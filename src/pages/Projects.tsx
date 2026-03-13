import { ExternalLink } from "lucide-react";

const projects = [
  { title: "AIropa", description: "AI-powered European news aggregator.", url: "https://airopa.news" },
  { title: "XueCodex", description: "Personal knowledgebase powered by RAG infrastructure.", url: "https://xuecodex.tech/" },
  { title: "Kilo Learn", description: "Hackathon-winning adaptive learning agent that prevents cognitive offloading in AI-assisted coding. Features auto-calibrating comprehension checks and a persistent learning tracker.", url: "https://devpost.com/software/kilo-learn-anti-cognitive-offloading-for-ai-assisted-coding" },
  { title: "BuildMap", description: "Architecture Guidance for Vibe Coders.", url: "https://buildmap.dev/" },
  { title: "MythosQuest", description: "Interactive storytelling engine rooted in mythology.", url: "https://mythosquest.bittygpt.com/auth/login" },
  { title: "Spellweaver's Grimoire", description: "Prompt Engineering learning tool rooted in magic.", url: "https://grimoire.bittygpt.com/" },
  { title: "BittyScout", description: "Intelligent scouting and research automation tool.", url: "#" },
];

const Projects = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Portfolio</p>
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Projects</h1>
    <div className="editorial-rule-gold mb-12" />
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((p, i) => (
        <a
          key={p.title}
          href={p.url}
          target={p.url !== "#" ? "_blank" : undefined}
          rel={p.url !== "#" ? "noopener noreferrer" : undefined}
          className="group block rounded-lg border border-border bg-card p-8 md:p-10 hover:border-accent/50 hover:shadow-lg transition-all animate-fade-in"
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          <div className="flex items-start justify-between mb-3">
            <h2 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {p.title}
            </h2>
            <ExternalLink size={18} className="text-muted-foreground mt-1.5 shrink-0 group-hover:text-accent transition-colors" />
          </div>
          <div className="editorial-rule mb-4 opacity-40 group-hover:opacity-100 transition-opacity" />
          <p className="text-muted-foreground leading-relaxed">{p.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
