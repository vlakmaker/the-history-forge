const Newsletter = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-3xl">
    <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Newsletter</p>
    <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Historian in the Loop</h1>
    <div className="editorial-rule-gold mb-8" />
    <div className="space-y-5 text-foreground/90 leading-relaxed mb-10">
      <p>
        A newsletter that applies historical pattern recognition to what's happening in AI right now.
        Each edition picks a development in AI or automation and traces it back — finding the echoes,
        the precedents, and the lessons that got lost along the way.
      </p>
    </div>
    <div className="rounded-lg border border-border bg-card p-2">
      <iframe
        src="https://embeds.beehiiv.com/86741402-7658-4141-85c0-a0d5925b9bab"
        data-test-id="beehiiv-embed"
        width="100%"
        height="320"
        frameBorder="0"
        scrolling="no"
        style={{
          borderRadius: "8px",
          border: "none",
          backgroundColor: "transparent",
        }}
        title="Historian in the Loop - Subscribe"
      />
    </div>
    <p className="text-sm text-muted-foreground mt-6">
      Or visit the full archive at{" "}
      <a
        href="https://newsletter.historianintheloop.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-accent transition-colors"
      >
        newsletter.historianintheloop.com
      </a>
    </p>
  </section>
);

export default Newsletter;
