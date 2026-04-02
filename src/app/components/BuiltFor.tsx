import { motion } from "motion/react";
import chiefOfStaff from "../../assets/chief-of-staff.mov";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const personas = [
  {
    tag: "Founders",
    title: "The Founding Team",
    description:
      "You're 5 people doing the work of 20. You've got AI agents for everything — but you're still the one holding it all together in your head. Captain becomes the coordination layer you can't hire yet.",
    topAccent: "linear-gradient(90deg, #8AAD66, #E8B4D8)",
    delay: 0,
  },
  {
    tag: "Engineers",
    title: "The AI-First Dev Team",
    description:
      "Your stack includes Cursor, Copilot, and a half-dozen AI tools. Shipping is fast. Knowing what to ship next — and making sure it all connects — is the hard part. Captain handles that.",
    topAccent: "linear-gradient(90deg, #8AAD66, #FFD0A8)",
    delay: 0.15,
  },
  {
    tag: "Operators",
    title: "The Lean Growth Team",
    description:
      "Content, research, outreach, analysis — your team runs on AI outputs that need human review before they go live. Captain automates the workflow and keeps humans in the loop exactly where it matters.",
    topAccent: "linear-gradient(90deg, #8AAD66, #A8D8D4)",
    delay: 0.3,
  },
];

export function BuiltFor() {
  return (
    <section style={{ padding: "140px 32px", maxWidth: "1100px", margin: "0 auto" }}>
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
        Built For
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
        style={{
          color: "#076653",
          fontSize: "clamp(28px, 4vw, 54px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          maxWidth: "580px",
          marginBottom: "16px",
        }}
      >
        Small teams that punch above their weight.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
        style={{ color: "#5A566E", fontSize: "16px", marginBottom: "72px" }}
      >
        Captain.ai is for teams of 3–15 using AI agents every day.
      </motion.p>

      {/* Persona cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {personas.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: p.delay }}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(7,102,83,0.2)" }}
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(7,102,83,0.1)",
              cursor: "default",
            }}
          >
            {/* Gradient top accent bar */}
            <div style={{ height: "4px", background: p.topAccent }} />

            <div style={{ padding: "36px 32px" }}>
              <span
                style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#076653",
                  letterSpacing: "0.04em",
                  marginBottom: "20px",
                }}
              >
                {p.tag}
              </span>
              <h3
                style={{
                  color: "#076653",
                  fontSize: "18px",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                {p.title}
              </h3>
              <p style={{ color: "#5A566E", fontSize: "14px", lineHeight: 1.75 }}>
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chief of Staff demo video */}
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
            src={chiefOfStaff}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
