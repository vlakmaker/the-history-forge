import { ExternalLink } from "lucide-react";

const projects = [
  { title: "AIropa", description: "AI-powered exploration of European cultural heritage." },
  { title: "XueCodex", description: "Bridging ancient Chinese texts with modern NLP techniques." },
  { title: "BittyScout", description: "Intelligent scouting and research automation tool." },
  { title: "BuildMap", description: "Visual mapping of software build and deployment pipelines." },
  { title: "MythosQuest", description: "Interactive storytelling engine rooted in mythology." },
  { title: "Spellweaver's Grimoire", description: "A creative AI tool for crafting narrative spells and lore." },
  { title: "BittyNews", description: "Curated, AI-summarized news for busy builders." },
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
          href="#"
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
