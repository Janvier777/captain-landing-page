import { useEffect, useState } from "react";
import anchorIcon from "../../assets/anchor-icon.png";

const navLinks = [
  { label: "Demo Video", href: "#demo",     sectionId: "demo" },
  { label: "Features",   href: "#features", sectionId: "features" },
  { label: "Join Us",    href: "#waitlist", sectionId: "waitlist" },
];

export function NavBar({ onGoToQuiz }: { onGoToQuiz?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.sectionId).filter(Boolean);
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        padding: scrolled ? "10px 32px" : "20px 32px",
        transition: "padding 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.65)",
          backdropFilter: scrolled ? "blur(28px)" : "blur(20px)",
          WebkitBackdropFilter: scrolled ? "blur(28px)" : "blur(20px)",
          border: "1px solid rgba(255,255,255,0.8)",
          borderRadius: "100px",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: scrolled
            ? "0 4px 40px rgba(7,102,83,0.14)"
            : "0 4px 24px rgba(7,102,83,0.08)",
          transition: "background 0.4s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img
            src={anchorIcon}
            alt="Captain"
            style={{
              height: "32px",
              objectFit: "contain",
              filter: "brightness(0) saturate(100%) invert(19%) sepia(55%) saturate(600%) hue-rotate(95deg) brightness(75%)",
            }}
          />
        </a>

        {/* Nav Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          {navLinks.map((link) => {
            const isActive = link.sectionId && activeSection === link.sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? "#076653" : "#076653",
                  fontSize: "15px",
                  fontWeight: isActive ? 600 : 450,
                  textDecoration: "none",
                  transition: "color 0.2s, font-weight 0.2s",
                  borderBottom: isActive ? "1.5px solid rgba(7,102,83,0.35)" : "1.5px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = "#076653";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.target as HTMLElement).style.color = "#076653";
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* CTA buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {onGoToQuiz && (
            <button
              onClick={onGoToQuiz}
              style={{
                background: "transparent",
                color: "#076653",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: "100px",
                border: "1.5px solid #076653",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#076653";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#076653";
              }}
            >
              Take the AGTI Test
            </button>
          )}
          <a
            href="#waitlist"
            style={{
              background: "#1f4a34",
              color: "#ffffff",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 22px",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              boxShadow: "0 4px 16px rgba(7,102,83,0.3)",
              transition: "opacity 0.2s, transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(7,102,83,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(7,102,83,0.3)";
            }}
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  );
}
