import { useState } from "react";
import heroBg from "../../assets/hero-bg2.mp4";
import heroFallback from "../../assets/hero-fallback.jpg";
import captainLogo from "../../assets/captain-logo.png";

export function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section
      style={{
        position: "relative",
        marginTop: "96px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Video — natural flow, defines section height proportionally */}
      <video
        src={heroBg}
        autoPlay
        muted
        playsInline
        ref={(el) => { if (el) el.playbackRate = 0.8; }}
        onEnded={() => setVideoEnded(true)}
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          opacity: videoEnded ? 0 : 1,
          transition: "opacity 0.8s ease",
          pointerEvents: "none",
        }}
      />
      {/* Fallback image — same proportions, shown after video ends */}
      <img
        src={heroFallback}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
          zIndex: 0,
          opacity: videoEnded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      />

      {/* Content overlay — centered on top of video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          padding: "1% 32px 20%",
        }}
      >
        {/* TOP group: badge + headline + logo */}
        <div style={{ maxWidth: "820px", width: "100%" }}>
          {/* Badge */}
          <div
            className="hero-badge"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "100px",
              padding: "6px 16px",
              marginBottom: "20px",
              marginTop: "-2%",
              boxShadow: "0 2px 16px rgba(7,102,83,0.1)",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "10px", height: "10px" }}>
              {/* Ripple ring */}
              <span style={{
                position: "absolute",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "rgba(138,173,102,0.35)",
                animation: "dotPulse 2s ease-out infinite",
              }} />
              {/* Core dot */}
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
            <span style={{ color: "#1E4A14", fontSize: "12px", fontWeight: 500, letterSpacing: "0.02em" }}>
              Now onboarding design partners
            </span>
          </div>

          {/* Headline */}
          <h1
            className="hero-headline"
            style={{
              color: "#1E4A14",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              marginBottom: "0px",
            }}
          >
            <span style={{ display: "block", fontSize: "clamp(18px, 2.6vw, 36px)", fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: "0.04em" }}>
              Every small teams need
            </span>
            <span style={{ display: "flex", justifyContent: "center", marginTop: "-40px", marginBottom: "-36px" }}>
              <img
                src={captainLogo}
                alt="Captain"
                style={{
                  width: "min(280px, 55%)",
                  height: "auto",
                  objectFit: "contain",
                  mixBlendMode: "multiply",
                }}
              />
            </span>
          </h1>
        </div>

        {/* BOTTOM group: subheadline + chat + CTAs */}
        <div style={{ maxWidth: "820px", width: "100%" }}>
          {/* Subheadline */}
          <p
            className="hero-sub"
            style={{
              color: "#9ca3af",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "4px auto 10px",
            }}
          >
            Captain is your AI control layer. Type a task — Captain breaks it into
            steps, assigns each to the right person or AI agent, and runs the
            whole workflow end-to-end.
          </p>

          {/* Chat mockup card */}
          <div className="hero-input" style={{ maxWidth: "580px", margin: "0 auto 16px" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: "20px",
                padding: "24px 28px",
                boxShadow: "0 12px 48px rgba(7,102,83,0.12)",
              }}
            >
              {/* Slack message row */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #076653, #498428)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                  }}
                >
                  💬
                </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: "11px", color: "#8AAD66", marginBottom: "4px", fontWeight: 600 }}>
                    #general · just now
                  </div>
                  <div style={{ fontSize: "14px", color: "#0C342C" }}>
                    Can someone update the Q1 deck before the investor call?
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "rgba(7,102,83,0.12)", marginBottom: "20px" }} />

              {/* Captain response */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.8)",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={captainLogo}
                    alt="Captain"
                    style={{ width: "26px", height: "auto", objectFit: "contain", mixBlendMode: "multiply" }}
                  />
                </div>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <div style={{ fontSize: "11px", color: "#8AAD66", marginBottom: "6px", fontWeight: 600 }}>
                    Captain · AI Chief of Staff
                  </div>
                  <div style={{ fontSize: "13px", color: "#0C342C", lineHeight: 1.65 }}>
                    Got it. I've created a task{" "}
                    <span style={{ color: "#1E4A14", fontWeight: 600 }}>Update Q1 Deck</span>, assigned it
                    to <span style={{ color: "#1E4A14", fontWeight: 600 }}>@sarah</span>, and set a reminder
                    for 2 hours before the call. I'll notify you if it's not completed in time.
                  </div>
                  <div style={{ display: "flex", gap: "8px", marginTop: "12px", flexWrap: "wrap" }}>
                    {["Task created ✓", "Assigned @sarah", "Reminder set"].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: "rgba(7,102,83,0.08)",
                          color: "#076653",
                          fontSize: "11px",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "100px",
                          border: "1px solid rgba(7,102,83,0.18)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div
            className="hero-cta"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "28px",
              flexWrap: "wrap",
              marginBottom: "28px",
            }}
          >
            <a
              href="#cta"
              style={{
                background: "linear-gradient(160deg, #c4e038 0%, #4ab830 35%, #2e7858 65%, #7aaab8 100%)",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 600,
                padding: "15px 36px",
                borderRadius: "100px",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                boxShadow: "0 6px 28px rgba(7,102,83,0.35)",
                transition: "transform 0.15s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(7,102,83,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(7,102,83,0.35)";
              }}
            >
              Get Early Access
            </a>
            <a
              href="#workflow"
              style={{
                color: "#076653",
                fontSize: "15px",
                fontWeight: 450,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#1E4A14")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#076653")}
            >
              Watch it work ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
