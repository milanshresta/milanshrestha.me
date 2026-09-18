import Link from "next/link";

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "color-mix(in srgb, var(--bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        <Link
          href="/"
          className="mono"
          style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.02em" }}
        >
          Milan Shrestha
        </Link>
        <div style={{ display: "flex", gap: 28, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <Link href="/#work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
