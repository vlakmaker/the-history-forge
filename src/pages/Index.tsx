import { Link } from "react-router-dom";
import logo from "@/assets/HitL.png";
import { Cpu, PenLine, Users } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Build",
    subtitle: "AI systems & automations",
    description:
      "Production pipelines, integrations, and tools that actually ship. I've built seven systems as a solo builder, from a European news aggregator to a RAG knowledge base to a hackathon-winning anti-cognitive-offloading module. I know what breaks and how to prevent it.",
  },
  {
    icon: PenLine,
    title: "Write",
    subtitle: "Newsletter & technical storytelling",
    description:
      "I write Historian in the Loop, a weekly newsletter connecting historical patterns to modern AI developments. Railroad mania predicted the dot-com bubble. The dot-com bubble predicted now. Clear thinking, no hype, real signal.",
  },
  {
    icon: Users,
    title: "Consult",
    subtitle: "AI strategy for teams",
    description:
      "I help teams figure out where AI actually fits, and where it doesn't. I've facilitated paid AI workshops and built fluency frameworks for non-technical teams. Grounded in engineering reality, not vendor promises.",
  },
];

const Index = () => (
  <>
    {/* Hero — centered */}
    <section className="container mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
      <img src={logo} alt="Historian in the Loop" className="h-36 w-auto mb-10 animate-fade-in" />
      <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed mb-10 animate-fade-in"
         style={{ animationDelay: "0.1s", opacity: 0 }}>
        I'm Vera Lakmaker — a historian who ended up building AI systems. Not by accident. I've always been interested in what actually happens between a tool and the person using it. Seven production systems later, I'm still asking the same question.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
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
