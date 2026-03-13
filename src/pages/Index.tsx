import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Index = () => (
  <section className="container mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
    <img
      src={logo}
      alt="Historian in the Loop"
      className="h-28 w-28 mb-8 animate-fade-in"
    />
    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 animate-fade-in"
        style={{ animationDelay: "0.1s", opacity: 0 }}>
      Historian in the Loop
    </h1>
    <p className="text-lg md:text-xl text-accent font-serif italic mb-8 animate-fade-in"
       style={{ animationDelay: "0.2s", opacity: 0 }}>
      Where history meets AI engineering
    </p>
    <p className="max-w-xl text-muted-foreground leading-relaxed mb-10 animate-fade-in"
       style={{ animationDelay: "0.3s", opacity: 0 }}>
      I'm Vera Lakmaker — a historian turned AI &amp; automation engineer. I build production systems, write about the patterns connecting past and present technology, and share it all in a biweekly newsletter.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
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
);

export default Index;
