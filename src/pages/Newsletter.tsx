const Newsletter = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-2xl">
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Newsletter</h1>
    <div className="space-y-5 text-foreground/90 leading-relaxed mb-10">
      <p>
        <em>Historian in the Loop</em> is a biweekly newsletter that applies historical pattern recognition to what's happening in AI right now.
      </p>
      <p>
        Each edition picks a development in AI or automation and traces it back — finding the echoes, the precedents, and the lessons that got lost along the way. It's written for engineers, builders, and anyone who thinks context matters.
      </p>
    </div>
    <a
      href="https://historianintheloop.beehiiv.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-accent-foreground font-medium text-sm hover:opacity-90 transition-opacity"
    >
      Subscribe on Beehiiv →
    </a>
  </section>
);

export default Newsletter;
