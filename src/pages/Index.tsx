import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Cpu, PenLine, Users } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Build",
    subtitle: "AI systems & automations",
    description:
      "Production pipelines, integrations, and tools that actually ship. From prototype to reliable infrastructure.",
  },
  {
    icon: PenLine,
    title: "Write",
    subtitle: "Newsletter & technical storytelling",
    description:
      "Biweekly essays connecting historical patterns to modern AI developments. Clear thinking, no hype.",
  },
  {
    icon: Users,
    title: "Consult",
    subtitle: "AI strategy for teams",
    description:
      "Helping teams figure out where AI fits — and where it doesn't. Grounded in engineering reality.",
  },
];

const Index = () => (
  <>
    {/* Hero — two column */}
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="animate-fade-in">
          <img src={logo} alt="Historian in the Loop" className="h-16 w-16 mb-6" />
          <div className="editorial-rule-gold mb-6" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground leading-[1.15] mb-4">
            Historian in
            <br />
            the Loop
          </h1>
          <p className="text-lg md:text-xl text-accent font-serif italic mb-6">
            Where history meets AI engineering
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-[1.05rem]">
            I'm Vera Lakmaker — a historian turned AI &amp; automation engineer.
            I build production systems, write about the patterns connecting past
            and present technology, and share it all in a biweekly newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/newsletter"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Read the newsletter
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              See what I've built
            </Link>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="animate-fade-in hidden md:block" style={{ animationDelay: "0.2s" }}>
          <div className="aspect-[3/4] rounded-lg bg-card border border-border overflow-hidden relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="mt-3 text-sm font-serif italic">Photo placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="container mx-auto px-4 md:px-8">
      <hr className="border-border" />
    </div>

    {/* How I can help */}
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Services</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          How I can help
        </h2>
        <div className="editorial-rule mx-auto" />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-10 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="bg-card border border-border rounded-lg p-8 hover:border-accent/40 hover:shadow-md transition-all animate-fade-in"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <s.icon size={28} className="text-accent mb-5" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
              {s.title}
            </h3>
            <p className="text-sm text-accent font-medium mb-3">{s.subtitle}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Index;
