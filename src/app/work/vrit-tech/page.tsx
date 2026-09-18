import Link from "next/link";
import type { Metadata } from "next";
import styles from "../case.module.css";

export const metadata: Metadata = {
  title: "Vrit Tech",
  description: "A brand redesign, and the clearest evidence of the typography and branding background behind the rest of this work.",
};

export default function VritTechCaseStudy() {
  return (
    <main>
      <header className={styles.header}>
        <div className="wrap">
          <Link href="/#work" className={styles.back}>← Selected work</Link>
          <h1 className={styles.title}>Vrit Tech</h1>
          <p className={styles.dek}>
            A brand redesign. Shorter case study, on purpose — this one is
            here to carry the visual-craft side of the story rather than a
            product narrative.
          </p>
          <div className={styles.metaRow}>
            <div>Role<strong>Brand &amp; visual design</strong></div>
            <div>What<strong>Identity redesign</strong></div>
          </div>
        </div>
      </header>

      <div className="wrap">
        <div className="mediaRow" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: -1 }}>
          <div className="placeholder-media" style={{ minHeight: 300 }}><span>logo / mark</span></div>
          <div className="placeholder-media" style={{ minHeight: 300 }}><span>brand system applied</span></div>
        </div>
      </div>

      <section className={styles.body}>
        <div className="wrap-narrow">
          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>01</span>Why this one</span>
            <div className={styles.blockContent}>
              <p>
                The other two case studies here are about product decisions
                under pressure. This one exists to make sure the graphic
                design background doesn&rsquo;t get lost underneath that —
                typography, branding, and visual craft are still the
                foundation everything else stands on.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>02</span>The work</span>
            <div className={styles.blockContent}>
              <p className={styles.openNote}>
                This case study is the least written-up of the three right
                now — the identity system exists, but the fuller story
                (the brief, the decisions, what changed and why) hasn&rsquo;t
                been put into words yet. Rather than pad it out, I&rsquo;m
                leaving it honest and short until that&rsquo;s written
                properly.
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.blockLabel}><span className={styles.blockNum}>03</span>Proof this stands for</span>
            <div className={styles.blockContent}>
              <div className={styles.proof}>
                <div className="claim">I care about visual craft.</div>
                <div className="evidence">
                  Vrit Tech, alongside typography experiments and marketing
                  work — the branding side of the practice, separate from
                  the product case studies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className={styles.nextRow}>
          <span className={styles.nextLabel}>Next</span>
          <Link href="/work/sworp" className={styles.nextName}>SWORP →</Link>
        </div>
      </div>
    </main>
  );
}
