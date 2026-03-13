import { Mail, Linkedin } from "lucide-react";

const Contact = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-2xl">
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Contact</h1>
    <p className="text-foreground/90 leading-relaxed mb-10">
      Want to collaborate, chat, or just say hello? Reach out below.
    </p>
    <div className="space-y-5">
      <a
        href="mailto:vera@historianintheloop.com"
        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
      >
        <Mail size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
        <span>vera@historianintheloop.com</span>
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
      >
        <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
        <span>LinkedIn</span>
      </a>
    </div>
  </section>
);

export default Contact;
