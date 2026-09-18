import Link from "next/link";
import type { Metadata } from "next";
import styles from "../case.module.css";

export const metadata: Metadata = {
  title: "Intense Team",
  description:
    "Designing an employee monitoring and productivity product, including a Nepal payroll system built from scratch under deadline — and the lesson that changed how I think about product design.",
};

export default function IntenseTeamCaseStudy() {
  return (
    <main>
      <header className={styles.header}>
        <div className="wrap">
          <Link href="/#work" className={styles.back}>← Selected work</Link>
          <h1 className={styles.title}>Intense Team</h1>
          <p className={styles.dek}>
            An employee monitoring and productivity product. The project
            that changed how I think about product design — and put me in
            front of a payroll system I had to learn from zero.
          </p>
          <div className={styles.metaRow}>
            <div>Role<strong>UI/UX designer</strong></div>
            <div>What<strong>Product design, Nepal payroll module</strong></div>
            <div>Market<strong>Nepal</strong></div>
            <div>Status<strong>My last product role before the UK</strong></div>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="placeholder-media" style={{ minHeight: 340, marginTop: -1 }}>
          <span>Intense Team — product screens</span>
        </div>
      </div>

      <section className={styles.body}>
        <div className="wrap-narrow">
          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>01</span>Why this one</span>
            <div className={styles.blockContent}>
              <p>
                This is the project that talked me out of believing polish
                was the job. It&rsquo;s also the most unfamiliar territory
                I&rsquo;ve designed in — a domain I had to learn before I
                could design anything useful in it.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>02</span>The problem</span>
            <div className={styles.blockContent}>
              <p>
                Intense Team is a product for monitoring and measuring
                employee productivity — the kind of tool that lives or dies
                on whether it ships something useful fast, not on how
                complete the first version looks. Partway through, I was
                asked for something well outside a normal design brief: a
                complete payroll system for the Nepalese market.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>03</span>What I did</span>
            <div className={styles.blockContent}>
              <p>
                I had no real background in payroll or Nepalese taxation
                before this. I had to learn the rules well enough to design
                a system that calculated them correctly, on a deadline that
                didn&rsquo;t leave room to learn slowly — while still
                thinking about it as a product, not just a form that
                produces the right numbers.
              </p>
              <blockquote className={styles.pullQuote}>
                Making it pretty was never going to be enough here. It had
                to be correct, and it had to ship.
              </blockquote>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>04</span>What happened</span>
            <div className={styles.blockContent}>
              <p>
                This is where I want to be careful rather than tidy: I
                don&rsquo;t have hard numbers to put here yet — adoption,
                accuracy in production, how the payroll module held up once
                real payroll runs went through it. That&rsquo;s the honest
                gap in this case study right now, and I&rsquo;d rather flag
                it than dress it up.
              </p>
              <div className={styles.proof}>
                <div className="claim">I believe in shipping over perfecting.</div>
                <div className="evidence">
                  Intense Team is where that belief got tested against an
                  unfamiliar, high-stakes domain (payroll/tax) on a real
                  deadline — not just said in an interview.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>05</span>What I learned</span>
            <div className={styles.blockContent}>
              <p>
                That a polished interface proves nothing on its own.
                Products need to ship with the features that matter first,
                get in front of real users, and improve from what actually
                happens — not from how confident the mockups looked in
                review. This project is where &ldquo;ship, learn,
                improve&rdquo; stopped being a slogan and became something I
                actually did under pressure, in a domain I didn&rsquo;t
                start out understanding.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>06</span>What I&rsquo;d do differently</span>
            <div className={styles.blockContent}>
              <p className={styles.openNote}>
                Also still open — I want to give this a real answer rather
                than a generic one. Coming back to this once I&rsquo;ve
                properly reflected on it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className={styles.nextRow}>
          <span className={styles.nextLabel}>Next</span>
          <Link href="/work/vrit-tech" className={styles.nextName}>Vrit Tech →</Link>
        </div>
      </div>
    </main>
  );
}
