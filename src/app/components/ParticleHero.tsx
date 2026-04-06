import captainLogo from "../../assets/captain-logo.png";

export function ParticleHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Particle background via iframe */}
      <iframe
        src="/particle.html"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "none",
        }}
      />

      {/* Content overlay — matches nav's 1100px container + 32px side padding */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 32px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: "32px",
          }}
        >
        <div style={{ maxWidth: "520px", display: "flex", flexDirection: "column", gap: "32px", alignItems: "flex-start" }}>
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.8)",
            borderRadius: "100px",
            padding: "6px 16px",
            boxShadow: "0 2px 16px rgba(7,102,83,0.12)",
          }}
        >
          <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "10px", height: "10px" }}>
            <span style={{
              position: "absolute",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "rgba(138,173,102,0.35)",
              animation: "dotPulse 2s ease-out infinite",
            }} />
            <span style={{
              position: "relative",
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#8AAD66",
              boxShadow: "0 0 6px rgba(138,173,102,0.8), 0 0 12px rgba(138,173,102,0.4)",
              display: "inline-block",
            }} />
          </span>
          <style>{`
            @keyframes dotPulse {
              0% { transform: scale(1); opacity: 0.8; }
              70% { transform: scale(2.4); opacity: 0; }
              100% { transform: scale(1); opacity: 0; }
            }
          `}</style>
          <span style={{ color: "#8AAD66", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", fontFamily: "'Inter', sans-serif" }}>
            NOW ONBOARDING DESIGN PARTNERS
          </span>
        </div>

        {/* Logo / Headline */}
        <div style={{ width: "100%" }}>
          <span style={{ display: "block", fontSize: "clamp(12px, 1.2vw, 16px)", fontFamily: "'Inter', sans-serif", fontWeight: 400, letterSpacing: "0.16em", color: "#5a8c7a", marginBottom: "16px", textTransform: "uppercase" }}>
            Every small team needs
          </span>
          <img
            src={captainLogo}
            alt="Captain"
            style={{
              width: "min(280px, 55%)",
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0) saturate(100%) invert(27%) sepia(60%) saturate(500%) hue-rotate(120deg) brightness(70%)",
              opacity: 0.95,
              display: "block",
            }}
          />
        </div>

        {/* Subheadline */}
        <p
          style={{
            color: "#4a7a6a",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.7,
            maxWidth: "420px",
            margin: 0,
          }}
        >
          Captain is your AI control layer. Type a task — Captain breaks it into
          steps, assigns each to the right person or AI agent, and runs the
          whole workflow end-to-end.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#waitlist"
            style={{
              background: "#1f4a34",
              color: "#ffffff",
              fontSize: "16px",
              fontWeight: 600,
              padding: "15px 36px",
              borderRadius: "100px",
              textDecoration: "none",
              letterSpacing: "-0.01em",
              boxShadow: "0 6px 28px rgba(0,0,0,0.4)",
              transition: "transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(0,0,0,0.4)";
            }}
          >
            Get Early Access
          </a>
          <a
            href="#workflow"
            style={{
              color: "#8AAD66",
              fontSize: "15px",
              fontWeight: 450,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#b0d880")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8AAD66")}
          >
            Watch it work ↓
          </a>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
