import anchorIcon from "../../assets/anchor-icon.png";

export function Footer() {
  const navLinks = [
    { label: "How It Works", href: "#demo" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "#1A3D2B",
        padding: "48px 32px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={anchorIcon}
            alt=""
            style={{ width: "20px", height: "20px", opacity: 0.9, filter: "brightness(0) invert(1)" }}
          />
          <span
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#F5F0E8",
              letterSpacing: "-0.02em",
            }}
          >
            Captain
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "#F5F0E8",
                fontSize: "14px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.textDecoration = "underline"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.textDecoration = "none"; }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <span style={{ fontSize: "12px", color: "#8AAD66" }}>
          © 2026 Captain. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
