import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Milan Shrestha's path from graphic design in Nepal to product design in the UK — the real story, not the highlight reel.",
};

export default function About() {
  return (
    <main>
      <header className={styles.header}>
        <div className="wrap-narrow">
          <p className="eyebrow" style={{ marginBottom: 18 }}>About</p>
          <h1 className={styles.title}>Craft first, then thinking. Still figuring out the rest.</h1>
        </div>
      </header>

      <section className={styles.body}>
        <div className="wrap-narrow">
          <p>
            I&rsquo;d considered studying IT before design found me — I had
            some exposure to code and didn&rsquo;t feel especially strong at
            it. Design came in through a multimedia subject in my first
            year of university: text, colour, Photoshop. Something about it
            clicked in a way coding hadn&rsquo;t, and I noticed I had an
            instinct for it.
          </p>
          <p>
            I didn&rsquo;t wait for someone to discover me. I went looking
            for freelance work myself — replying to project listings,
            sometimes emailing businesses directly and offering to design
            for free just to build something real to show. That&rsquo;s
            what turned into my first internship, and everything after
            followed from there.
          </p>

          <div className={styles.factRow}>
            <div className="fact">Background<strong>Graphic design → product design</strong></div>
            <div className="fact">Currently<strong>MSc IT with Web Development, UWS</strong></div>
            <div className="fact">Based<strong>Scotland, UK</strong></div>
          </div>

          <p>
            Graphic design is where the fundamentals came from — typography,
            spacing, hierarchy, composition, branding, and the habit of
            paying attention to detail. Moving into product design added a
            different set of questions on top: not just how something
            looks, but what problem it&rsquo;s actually solving, how people
            behave around it, and what happens after it ships. I think of
            it as craft plus thinking, rather than one replacing the other.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "40px 0 8px" }}>How I got here</h2>
          <div className={styles.timeline}>
            <div className={styles.stage}>
              <div className={styles.stageName}>Graphic design (from 2018)</div>
              <div className={styles.stageLessons}>typography · composition · hierarchy · branding</div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageName}>First UI/UX role</div>
              <div className={styles.stageLessons}>interfaces · user problems · flows</div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageName}>Back to UI/UX, a year later</div>
              <div className={styles.stageLessons}>stronger product instincts · learning from more experienced designers</div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageName}>Intense Team — final Nepal role</div>
              <div className={styles.stageLessons}>shipping over polishing · unfamiliar domains under deadline</div>
            </div>
            <div className={styles.stage}>
              <div className={styles.stageName}>UK / MSc (Sept 2025 — )</div>
              <div className={styles.stageLessons}>new environment · new network · still finding my footing here</div>
            </div>
          </div>

          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "40px 0 8px" }}>Why the UK</h2>
          <p>
            I moved to Scotland in September 2025 for a Master&rsquo;s,
            wanting a different environment to develop in — a broader
            network, a different working culture, more room to grow as a
            designer than I felt I had access to before. Since arriving
            I&rsquo;ve spent time in the Demola community helping build an
            AI-related product, and taught UI/UX for a couple of months.
          </p>
          <p>
            I&rsquo;m still working out how to break into the UK design
            industry properly. I haven&rsquo;t &ldquo;made it&rdquo; yet,
            and I&rsquo;d rather this page say that plainly than pretend
            otherwise.
          </p>

          <h2 style={{ fontSize: 22, fontWeight: 700, margin: "40px 0 8px" }}>Outside of design</h2>
          <p>Running, cooking, and travel — I&rsquo;ll write more about what those actually teach me once I&rsquo;ve got something honest to say, rather than a line that could belong to anyone.</p>
        </div>
      </section>
    </main>
  );
}
