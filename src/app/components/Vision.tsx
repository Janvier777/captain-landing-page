import { motion } from "motion/react";
import workspaceSettings from "../../assets/workspace-settings.mov";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const phases = [
  {
    phase: "Now",
    title: "AI Control Layer",
    description: "Plan, route, execute, oversee. One input turns into a complete, running workflow.",
    bg: "linear-gradient(135deg, rgba(138,173,102,0.22), rgba(248,200,160,0.12))",
    border: "rgba(138,173,102,0.4)",
    color: "#8AAD66",
    active: true,
    delay: 0,
  },
  {
    phase: "Next",
    title: "Team Brain",
    description: "Unified context across every person and agent — tracking intent, syncing decisions across your whole organization.",
    bg: "linear-gradient(135deg, rgba(138,173,102,0.2), rgba(138,173,102,0.08))",
    border: "rgba(138,173,102,0.35)",
    color: "#8AAD66",
    active: false,
    delay: 0.15,
  },
  {
    phase: "Future",
    title: "Work OS",
    description: "The default way human + AI teams operate. Every piece of work, aligned with what actually matters.",
    bg: "linear-gradient(135deg, rgba(7,102,83,0.12), rgba(124,107,175,0.06))",
    border: "rgba(7,102,83,0.2)",
    color: "#076653",
    active: false,
    delay: 0.3,
  },
];

export function Vision() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(200,190,230,0.18) 40%, rgba(180,200,235,0.12) 100%)",
        padding: "140px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Twilight blob */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          background:
            "radial-gradient(ellipse, rgba(138,173,102,0.2) 0%, rgba(138,173,102,0.1) 40%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
          className="mono-label"
          style={{
            color: "#076653",
            marginBottom: "24px",
          }}
        >
          Where This Is Going
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            color: "#1E4A14",
            fontSize: "clamp(28px, 4vw, 54px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "640px",
            marginBottom: "32px",
          }}
        >
          The operating system for human + AI teams.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
          style={{ maxWidth: "560px", marginBottom: "80px" }}
        >
          <p style={{ color: "#5A566E", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Today, Captain turns your tasks into workflows and orchestrates your team.
          </p>
          <p style={{ color: "#5A566E", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
            Tomorrow, Captain becomes the shared brain for your entire organization — tracking intent, syncing context across agents, and making sure every piece of work stays aligned with what actually matters.
          </p>
          <p style={{ color: "#076653", fontSize: "16px", lineHeight: 1.8, fontWeight: 600 }}>
            The future isn't humans or AI. It's humans and AI, with Captain flying the plane.
          </p>
        </motion.div>

        {/* Phase cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {phases.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, ease, delay: p.delay }}
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(7,102,83,0.16)" }}
              style={{
                background: p.bg,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${p.border}`,
                borderRadius: "20px",
                padding: "32px 28px",
                position: "relative",
                boxShadow: "0 4px 24px rgba(7,102,83,0.08)",
                cursor: "default",
              }}
            >
              {p.active && (
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#8AAD66",
                    boxShadow: "0 0 10px rgba(138,173,102,0.8)",
                  }}
                />
              )}
              <p
                className="mono-label"
                style={{
                  color: "#076653",
                  marginBottom: "10px",
                  opacity: p.active ? 1 : 0.6,
                }}
              >
                {p.phase}
              </p>
              <h3
                style={{
                  color: "#076653",
                  fontSize: "20px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "10px",
                  opacity: p.active ? 1 : 0.65,
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  color: "#5A566E",
                  fontSize: "14px",
                  lineHeight: 1.7,
                  opacity: p.active ? 1 : 0.6,
                }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workspace settings demo video */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 16px 64px rgba(7,102,83,0.2)",
              border: "1px solid rgba(255,255,255,0.7)",
            }}
          >
            <video
              src={workspaceSettings}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
