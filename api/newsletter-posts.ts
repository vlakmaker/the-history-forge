import type { VercelRequest, VercelResponse } from "@vercel/node";

const BEEHIIV_API_BASE = "https://api.beehiiv.com/v2";
const PUBLICATION_ID = "pub_86741402-7658-4141-85c0-a0d5925b9bab";

interface BeehiivPost {
  id: string;
  title: string;
  subtitle: string;
  thumbnail_url: string;
  web_url: string;
  publish_date: number;
  displayed_date: number;
  content_tags: string[];
  slug: string;
}

interface BeehiivResponse {
  data: BeehiivPost[];
  total_results: number;
  total_pages: number;
  page: number;
  limit: number;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  if (!apiKey) {
    console.error("BEEHIIV_API_KEY environment variable is not set");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const url = new URL(`${BEEHIIV_API_BASE}/publications/${PUBLICATION_ID}/posts`);
    url.searchParams.set("status", "confirmed");
    url.searchParams.set("platform", "all");
    url.searchParams.set("limit", "6");
    url.searchParams.set("order_by", "publish_date");
    url.searchParams.set("direction", "desc");

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(`Beehiiv API error: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({
        error: "Failed to fetch newsletter posts",
      });
    }

    const data: BeehiivResponse = await response.json();

    const posts = data.data.map((post) => ({
      id: post.id,
      title: post.title,
      subtitle: post.subtitle,
      thumbnail_url: post.thumbnail_url,
      web_url: post.web_url,
      publish_date: post.publish_date,
      displayed_date: post.displayed_date,
      content_tags: post.content_tags,
      slug: post.slug,
    }));

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=600");
    res.setHeader("Access-Control-Allow-Origin", "*");

    return res.status(200).json({ posts });
  } catch (error) {
    console.error("Error fetching newsletter posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
