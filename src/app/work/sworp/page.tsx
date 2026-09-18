import Link from "next/link";
import type { Metadata } from "next";
import styles from "../case.module.css";

export const metadata: Metadata = {
  title: "SWORP",
  description:
    "Leading a website relaunch for property-management software in the Czech Republic, in a week and a half, while the senior designer was away.",
};

export default function SworpCaseStudy() {
  return (
    <main>
      <header className={styles.header}>
        <div className="wrap">
          <Link href="/#work" className={styles.back}>← Selected work</Link>
          <h1 className={styles.title}>SWORP</h1>
          <p className={styles.dek}>
            Property-management software for the Czech Republic. A design
            system and product redesign that turned into a lesson in
            ownership, when the senior designer went away for her wedding
            and the website still had to ship.
          </p>
          <div className={styles.metaRow}>
            <div>Role<strong>UI/UX designer</strong></div>
            <div>What<strong>Design system, product redesign, website relaunch</strong></div>
            <div>Team<strong>3 designers + a PM</strong></div>
            <div>Status<strong>Shipped, live customers</strong></div>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="placeholder-media" style={{ minHeight: 340, marginTop: -1 }}>
          <span>SWORP — product / website screens</span>
        </div>
      </div>

      <section className={styles.body}>
        <div className="wrap-narrow">
          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>01</span>Why this one</span>
            <div className={styles.blockContent}>
              <p>
                Most of my case studies are about what I made. This one is
                about what happened when I had to make decisions for other
                people, under a deadline I didn&rsquo;t set, with someone
                senior to me trusting I&rsquo;d handle it.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>02</span>The problem</span>
            <div className={styles.blockContent}>
              <p>
                SWORP needed more than a fresh coat of paint — the product
                experience and the design system underneath it were being
                rebuilt, and a new marketing website had to go with it. I was
                already working on the redesign when the senior designer
                went on leave for her wedding.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>03</span>What I did</span>
            <div className={styles.blockContent}>
              <p>
                Management asked me to work directly with the project
                manager and get the new website out the door — about a week
                and a half. I split the work across myself and two other
                designers, kept the senior designer in the loop the whole
                time even though she wasn&rsquo;t in the office, and made
                the calls that needed making so the timeline held.
              </p>
              <blockquote className={styles.pullQuote}>
                Nobody handed me a &ldquo;design lead&rdquo; title. The
                situation just needed someone to lead, so I did.
              </blockquote>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>04</span>What happened</span>
            <div className={styles.blockContent}>
              <p>
                The site shipped on time. SWORP picked up paying customers
                off the back of it — the clearest signal I&rsquo;ve had that
                a design decision translated into an actual business result,
                not just a nicer-looking screen.
              </p>
              <div className={styles.proof}>
                <div className="claim">I can take ownership.</div>
                <div className="evidence">
                  Led the SWORP website relaunch to a fixed deadline while
                  the senior designer was unavailable — coordinated two other
                  designers, kept her informed, shipped on time.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>05</span>What I learned</span>
            <div className={styles.blockContent}>
              <p>
                Mostly about responsibility and collaboration under
                pressure — how much a project depends on communication when
                the person usually making the calls isn&rsquo;t there, and
                how directly users&rsquo; response to a shipped product
                validates (or doesn&rsquo;t) the decisions you made in a
                hurry.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>06</span>What I&rsquo;d do differently</span>
            <div className={styles.blockContent}>
              <p className={styles.openNote}>
                Still working out the honest answer to this one — I haven&rsquo;t
                sat down and picked the week apart in detail yet. Check back.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className={styles.nextRow}>
          <span className={styles.nextLabel}>Next</span>
          <Link href="/work/intense-team" className={styles.nextName}>Intense Team →</Link>
        </div>
      </div>
    </main>
  );
}
