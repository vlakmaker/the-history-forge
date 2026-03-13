import { useQuery } from "@tanstack/react-query";
import { ArrowRight, BookOpen, Mail, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface NewsletterPost {
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

const fetchPosts = async (): Promise<NewsletterPost[]> => {
  const res = await fetch("/api/newsletter-posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.posts;
};

const PostSkeleton = () => (
  <div className="rounded-lg border border-border bg-card overflow-hidden animate-pulse">
    <div className="aspect-[16/9] bg-muted" />
    <div className="p-6 space-y-3">
      <div className="h-4 bg-muted rounded w-1/4" />
      <div className="h-6 bg-muted rounded w-3/4" />
      <div className="h-4 bg-muted rounded w-full" />
    </div>
  </div>
);

const Newsletter = () => {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["newsletter-posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 30,
    retry: 2,
  });

  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Newsletter</p>
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Historian in the Loop</h1>
      <div className="editorial-rule-gold mb-8" />
      <div className="max-w-3xl space-y-5 text-foreground/90 leading-relaxed mb-10">
        <p>
          A newsletter that applies historical pattern recognition to what's happening in AI right now.
          Each edition picks a development in AI or automation and traces it back — finding the echoes,
          the precedents, and the lessons that got lost along the way.
        </p>
        <p>
          Written for engineers, builders, and anyone who thinks context matters.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-3xl mb-16">
        <a
          href="https://newsletter.historianintheloop.com/subscribe"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-8 hover:border-accent/50 hover:shadow-lg transition-all"
        >
          <Mail size={28} className="text-accent" />
          <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            Subscribe
          </h2>
          <p className="text-sm text-muted-foreground text-center">
            Get each edition delivered straight to your inbox.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-1">
            Subscribe now <ArrowRight size={14} />
          </span>
        </a>

        <a
          href="https://newsletter.historianintheloop.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-8 hover:border-accent/50 hover:shadow-lg transition-all"
        >
          <BookOpen size={28} className="text-accent" />
          <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
            Read the Archive
          </h2>
          <p className="text-sm text-muted-foreground text-center">
            Browse all past editions and explore the full back catalogue.
          </p>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-1">
            Visit archive <ArrowRight size={14} />
          </span>
        </a>
      </div>

      {/* Latest Editions */}
      <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">Latest Editions</h2>
      <div className="editorial-rule mb-8" />

      {isLoading && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <PostSkeleton key={i} />
          ))}
        </div>
      )}

      {isError && (
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground mb-4">
            Unable to load the latest posts right now.
          </p>
          <a
            href="https://newsletter.historianintheloop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Browse the archive instead <ArrowRight size={14} />
          </a>
        </div>
      )}

      {posts && posts.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const date = post.displayed_date || post.publish_date;
            return (
              <a
                key={post.id}
                href={post.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg border border-border bg-card overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {post.thumbnail_url && (
                  <div className="aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={post.thumbnail_url}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  {date && (
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      {format(new Date(date * 1000), "MMMM d, yyyy")}
                    </p>
                  )}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <ExternalLink size={14} className="text-muted-foreground mt-1 shrink-0 group-hover:text-accent transition-colors" />
                  </div>
                  {post.subtitle && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.subtitle}
                    </p>
                  )}
                  {post.content_tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {post.content_tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.65rem] uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Newsletter;
