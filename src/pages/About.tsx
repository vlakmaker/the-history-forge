const About = () => (
  <section className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
    <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
      {/* Photo column */}
      <div className="md:col-span-2">
        <div className="aspect-[3/4] rounded-lg bg-card border border-border overflow-hidden relative sticky top-28">
          <img
            src="/vera-photo.jpg"
            alt="Vera Lakmaker"
            className="absolute inset-0 w-full h-full object-cover"
          />
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
            I didn't start in AI. I started in stories. One in particular: how humans interact with technology.
          </p>
          <p>
            The first chapter was games journalism. I wrote for Eurogamer.nl and NG-Gamer.nl, hosted a podcast called BetaWaveRadio, and interviewed indie developers about their love for games and the reasons they were making them. Alongside that I worked in marketing, PR, and project management. Always at the intersection of people, stories, and the things they build.
          </p>
          <p>
            Then I became fascinated with another question. How does the technology actually work? I moved into IT, which gave me a solid foundation across most of the domain: servicedesk, business, network, infrastructure, and my great love, Linux.
          </p>
          <p>
            In 2020 everything changed. At Gameye I learned how remote teams actually function. At Unlock I became a Remote Work Champion. At Social Seeder I worked on the product side, learning how to design things people actually use.
          </p>
          <p>
            Somewhere along the way I started building AI systems. Not as a pivot. As the natural next step for someone who has always cared about the space between a tool and the person using it.
          </p>
          <p>
            Today I design and build production AI systems: pipelines, integrations, automations, and tools that actually ship. So far that's meant building AIropa, a European news aggregator; XueCodex, my personal knowledge base with a RAG database; and Kilo Learn, an anti-cognitive-offloading module that won a hackathon. Seven production systems and counting. I care about making things work reliably, not just impressively.
          </p>
          <p>
            I write <em>Historian in the Loop</em> because I keep noticing echoes. The same patterns showing up across centuries of technological change. The railroad mania of the 1840s. The dot-com bubble. Now this. History doesn't repeat, but it rhymes loudly if you know where to listen.
          </p>
          <p>
            The newsletter is where I work those patterns out in public.
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
