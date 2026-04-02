import captainLogo from "../../assets/captain-logo.png";

export function Footer() {
  const socialLinks = [
    { label: "Twitter / X", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Contact", href: "#" },
  ];
  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ];

  return (
    <footer
      style={{
        background: "rgba(232,224,248,0.4)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.6)",
        padding: "0 32px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Main row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "40px 0 32px",
            borderBottom: "1px solid rgba(138,173,102,0.2)",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <img
            src={captainLogo}
            alt="Captain"
            style={{
              height: "52px",
              objectFit: "contain",
              mixBlendMode: "multiply",
            }}
          />

          {/* Social links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#076653",
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#076653")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#076653")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal */}
          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#8AAD66",
                  fontSize: "13px",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#076653")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8AAD66")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom line */}
        <div style={{ padding: "24px 0", textAlign: "center" }}>
          <span
            style={{
              color: "#8AAD66",
              fontSize: "12px",
              letterSpacing: "0.01em",
            }}
          >
            © 2026 Captain.ai — The control layer for human + AI teams.
          </span>
        </div>
      </div>
    </footer>
  );
}
