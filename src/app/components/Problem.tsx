import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const glassCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.45)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255,255,255,0.7)",
  borderRadius: "20px",
  boxShadow: "0 8px 40px rgba(7,102,83,0.1)",
};

export function Problem() {
  return (
    <section style={{ padding: "20px 32px 100px" }}>
      {/* Proof line + scroll arrow carried over from hero */}
      <div
        style={{
          position: "relative",
          
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        <p style={{ color: "#8AAD66", fontSize: "13px", marginBottom: "16px" }}>
          Built for teams of 3–15 using AI agents every day.
        </p>
        <div
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "scrollBounce 2s ease-in-out infinite",
            opacity: 0.55,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="#076653" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "0 auto" }}>
      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.6, ease }}
        className="mono-label"
        style={{
          color: "#076653",
          marginBottom: "28px",
        }}
      >
        The Bottleneck Isn't Execution
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
        style={{
          color: "#076653",
          fontSize: "clamp(28px, 3vw, 44px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "680px",
          marginBottom: "40px",
        }}
      >
        Your team has 10 AI tools.
        <br />
        Nobody's flying the plane.
      </motion.h2>

      {/* Body */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.65, ease, delay: 0.2 }}
        style={{ maxWidth: "640px", marginBottom: "80px" }}
      >
        <p style={{ color: "#0C342C", fontSize: "17px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 400 }}>
          Your engineers use Cursor. Your content team uses ChatGPT. You've got
          agents for research, design, code review, and deployment.
        </p>
        <p style={{ color: "#0C342C", fontSize: "17px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 400 }}>
          Everyone is 10x more productive — alone.
        </p>
        <p style={{ color: "#0C342C", fontSize: "17px", lineHeight: 1.7, marginBottom: "16px", fontWeight: 400 }}>
          But who plans the workflow? Who decides which agent handles which step?
          Who makes sure the human review happens before the AI output ships?
        </p>
        <p style={{ color: "#076653", fontSize: "19px", lineHeight: 1.7, fontWeight: 400 }}>
          Right now, that's you. In Slack. At midnight. And it's not scaling.
        </p>
      </motion.div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          style={{ ...glassCard, padding: "56px 52px" }}
          whileHover={{ y: -4, boxShadow: "0 16px 56px rgba(7,102,83,0.18)" }}
        >
          <div
            style={{
              fontSize: "clamp(64px, 8vw, 100px)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              background: "linear-gradient(135deg, #72b830 0%, #3a7a18 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            58%
          </div>
          <div style={{ color: "#0C342C", fontSize: "15px", lineHeight: 1.65, maxWidth: "260px" }}>
            of your day lost to coordination: syncing, status-checking, figuring
            out who's doing what.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease, delay: 0.45 }}
          style={{ ...glassCard, padding: "56px 52px" }}
          whileHover={{ y: -4, boxShadow: "0 16px 56px rgba(7,102,83,0.18)" }}
        >
          <div
            style={{
              fontSize: "clamp(64px, 8vw, 100px)",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              background: "linear-gradient(135deg, #72b830 0%, #3a7a18 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            67%
          </div>
          <div style={{ color: "#0C342C", fontSize: "15px", lineHeight: 1.65, maxWidth: "260px" }}>
            of strategies that fail — not because the plan was wrong, but
            because execution drifted from intent.
          </div>
        </motion.div>
      </div>
      </div>
      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.55; }
          50% { transform: translateY(7px); opacity: 0.85; }
        }
      `}</style>
    </section>
  );
}
