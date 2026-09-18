export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" style={{ borderTop: "1px solid var(--border)", marginTop: 96 }}>
      <div
        className="wrap"
        style={{
          paddingTop: 56,
          paddingBottom: 40,
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "space-between",
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Get in touch</p>
          {/* TODO(Milan): swap in your real contact email once you've decided hello@milanshrestha.me vs. your existing address */}
          <a
            href="mailto:hello@milanshrestha.me"
            className="display"
            style={{
              fontSize: "clamp(24px, 4vw, 36px)",
              fontWeight: 700,
              display: "inline-block",
              borderBottom: "2px solid var(--accent)",
            }}
          >
            hello@milanshrestha.me
          </a>
          <p className="mono" style={{ color: "var(--ink-faint)", fontSize: 12.5, marginTop: 14 }}>
            Based in Scotland, UK — open to product/UI/UX roles.
          </p>
        </div>
        <div
          className="mono"
          style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "var(--ink-muted)" }}
        >
          {/* TODO(Milan): drop in your real LinkedIn URL */}
          <a href="https://www.linkedin.com/in/YOUR-HANDLE" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://theunnoticeddesign.xyz" target="_blank" rel="noreferrer">The Unnoticed Design ↗</a>
          <span style={{ color: "var(--ink-faint)" }}>© {year} Milan Shrestha</span>
        </div>
      </div>
    </footer>
  );
}
