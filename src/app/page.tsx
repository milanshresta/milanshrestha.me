import Link from "next/link";
import styles from "./page.module.css";

const work = [
  {
    slug: "sworp",
    index: "01",
    name: "SWORP",
    dek: "Property management software, Czech Republic. Led a website relaunch in a week and a half while the senior designer was away.",
  },
  {
    slug: "intense-team",
    index: "02",
    name: "Intense Team",
    dek: "Employee monitoring & productivity product. Where I learned that shipping beats polishing — and built a payroll system I knew nothing about.",
  },
  {
    slug: "vrit-tech",
    index: "03",
    name: "Vrit Tech",
    dek: "A brand redesign — the clearest evidence of the typography and branding background everything else is built on.",
  },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className="wrap">
          <p className={`eyebrow ${styles.heroEyebrow}`}>Product &amp; visual designer — Scotland, UK</p>
          <div className={styles.heroRow}>
            <h1 className={styles.heroTitle}>
              Design people can&rsquo;t ignore, <em>made with care.</em>
            </h1>
            <p className={styles.heroIntro}>
              I&rsquo;m Milan — trained first in graphic design, now working
              across UI, UX and product. Finishing an MSc in Scotland,
              looking for my next role. This site is closer to a working
              notebook than a highlight reel: real projects, the decisions
              behind them, and what I&rsquo;d do differently now.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Selected work</h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--ink-faint)" }}>
              3 case studies
            </span>
          </div>
          <div className={styles.workList}>
            {work.map((w) => (
              <Link key={w.slug} href={`/work/${w.slug}`} className={styles.workRow}>
                <span className={styles.workIndex}>{w.index}</span>
                <span>
                  <h3 className={styles.workName}>{w.name}</h3>
                  <p className={styles.workDek}>{w.dek}</p>
                </span>
                <span className={`placeholder-media ${styles.workMedia}`}>
                  <span>cover image</span>
                </span>
                <span className={styles.workArrow}>view →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>What I believe</h2>
          </div>
          <div className={styles.beliefsGrid}>
            <div className={styles.beliefCard}>
              <h3>Design is care, not decoration</h3>
              <p>Something can be technically designed, or someone can actually care about it. Visitors can tell the difference.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3>Pretty isn&rsquo;t enough</h3>
              <p>A Figma file isn&rsquo;t proof anything works. The product still has to.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3>Clarity over cleverness</h3>
              <p>People shouldn&rsquo;t have to figure out how an interface works. That&rsquo;s a failure, not a puzzle.</p>
            </div>
            <div className={styles.beliefCard}>
              <h3>Process serves the outcome</h3>
              <p>Not the other way round. I use the process that gets a project somewhere better — not the one that looks correct on a slide.</p>
            </div>
          </div>

          <div className={styles.pivot}>
            <div className={styles.pivotCard}>
              <span className={styles.pivotLabel}>Used to think</span>
              <p className={styles.pivotThen}>&ldquo;Good design is about making things look good.&rdquo;</p>
              <p className={styles.pivotNow}>Now: making something pretty isn&rsquo;t enough.</p>
            </div>
            <div className={styles.pivotCard}>
              <span className={styles.pivotLabel}>Used to think</span>
              <p className={styles.pivotThen}>&ldquo;Finish everything before you show it.&rdquo;</p>
              <p className={styles.pivotNow}>Now: ship, learn, improve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Visual experiments</h2>
            <span className="mono" style={{ fontSize: 13, color: "var(--ink-faint)" }}>
              typography &amp; branding
            </span>
          </div>
          <p style={{ color: "var(--ink-muted)", maxWidth: "56ch", marginBottom: 32 }}>
            Not everything here is a product problem. Some of it is just how
            I think visually when no one&rsquo;s briefing me — typography
            studies in the lineage of Vignelli and Weingart, branding, and
            posters.
          </p>
          <div className={styles.experimentsGrid}>
            <div className="placeholder-media"><span>typography study</span></div>
            <div className="placeholder-media"><span>poster / layout experiment</span></div>
            <div className="placeholder-media"><span>branding work</span></div>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{ borderBottom: "none" }}>
        <div className="wrap">
          <div className={styles.aboutSection}>
            <div className={styles.aboutBody}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>About</p>
              <p>
                I didn&rsquo;t grow up certain I&rsquo;d be a designer — I
                considered IT first, and didn&rsquo;t feel especially strong
                at the coding side. Design found me through a multimedia
                subject at university, and I went looking for freelance work
                myself rather than waiting for a break.
              </p>
              <p>
                I moved to Scotland in 2025 for an MSc, wanting a different
                environment to grow a design career in. I&rsquo;m still
                figuring out how to break into the UK industry properly —
                that part isn&rsquo;t finished yet, and I&rsquo;d rather say
                so than pretend otherwise.
              </p>
              <Link href="/about" className={styles.aboutLink}>
                The full story →
              </Link>
            </div>
            <div className="placeholder-media" style={{ minHeight: 320 }}>
              <span>portrait / workspace photo</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
