import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

const features = [
  {
    eyebrow: "ASK CAPTAIN",
    headline: "Your team's knowledge, always at your fingertips",
    body: "Captain knows everything about your team — projects, decisions, history. Just ask, and get instant answers without digging through Slack or Notion.",
    image: "/features/ask-captain.png",
  },
  {
    eyebrow: "PROJECT HOME",
    headline: "Every task, every agent, one view",
    body: "See what every teammate and every AI agent is working on in real time. No more status updates, no more follow-ups — just clarity.",
    image: "/features/project-home.png",
  },
  {
    eyebrow: "EXECUTION",
    headline: "Delegate anything. Captain handles the rest.",
    body: "Create any task in Captain and it automatically breaks it into a step-by-step workflow. With 1,000+ tool integrations, Captain routes work across any platform — you just set it and forget it.",
    image: "/features/execution.png",
  },
  {
    eyebrow: "ALIGNMENT",
    headline: "Stay ahead of risks. Celebrate every win.",
    body: "Captain surfaces risk alerts before they become problems, and tracks contributions and activity so nothing — and no one — goes unnoticed.",
    image: "/features/alignment.png",
  },
];

export function Features() {
  return (
    <section
      id="features"
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 32px",
      }}
    >
      {features.map((f, i) => (
        <div key={i} style={{ padding: "96px 0" }}>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease }}
            style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px" }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#076653",
                marginBottom: "14px",
              }}
            >
              {f.eyebrow}
            </p>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(24px, 2.5vw, 36px)",
                fontWeight: 400,
                color: "#0C342C",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              {f.headline}
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#4a7a6a",
              }}
            >
              {f.body}
            </p>
          </motion.div>

          {/* Image — full width */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(7,102,83,0.12)",
              boxShadow: "0 8px 40px rgba(7,102,83,0.1)",
            }}
          >
            <img
              src={f.image}
              alt={f.eyebrow}
              style={{ width: "100%", display: "block" }}
            />
          </motion.div>
        </div>
      ))}
    </section>
  );
}
