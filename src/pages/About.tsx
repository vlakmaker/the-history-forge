const About = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
    <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
      {/* Photo column */}
      <div className="md:col-span-2">
        <div className="aspect-[3/4] rounded-lg bg-card border border-border overflow-hidden relative sticky top-28">
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

      {/* Bio column */}
      <div className="md:col-span-3">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">About</p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
          Vera Lakmaker
        </h1>
        <p className="text-accent font-serif italic mb-6">Historian · AI Engineer · Writer</p>
        <div className="editorial-rule-gold mb-8" />
        <div className="space-y-5 text-foreground/90 leading-relaxed text-[1.05rem]">
          <p>
            I started as a historian — studying how societies adopt new technologies, how they resist them, and what happens in between. Then I became an AI &amp; automation engineer and started building the very things I used to study.
          </p>
          <p>
            Today I design and build production AI systems: pipelines, integrations, automations, and tools that actually ship. I care about making things work reliably, not just impressively.
          </p>
          <p>
            I write <em>Historian in the Loop</em> because I keep noticing echoes — the same patterns showing up across centuries of technological change. The newsletter is where I work those out in public.
          </p>
          <p>
            I believe the best engineers know some history, and the best historians stay curious about the tools shaping their world.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
