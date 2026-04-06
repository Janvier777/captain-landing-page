import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const steps = [
  {
    number: "01",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M8 9h8M8 13h5M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconColor: "#076653",
    iconBg: "rgba(111,196,176,0.12)",
    title: "Describe what you need",
    description: "Type a task in plain language. No tickets, no subtasks. Just say what done looks like.",
  },
  {
    number: "02",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M12 3v3M12 18v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M3 12h3M18 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    iconColor: "#8AAD66",
    iconBg: "rgba(138,173,102,0.12)",
    title: "Captain builds the plan",
    description: "Captain generates a step-by-step workflow, assigning each step to the right AI agent or human — automatically.",
  },
  {
    number: "03",
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    iconColor: "#8AAD66",
    iconBg: "rgba(138,173,102,0.12)",
    title: "Humans and AI execute together",
    description: "AI steps run automatically. Human steps land in their inbox with full context. Nothing is missed.",
  },
];

const cardDelays = [0.1, 0.25, 0.4];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{ padding: "140px 32px", maxWidth: "1100px", margin: "0 auto" }}
    >
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
        How Captain Works
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
          maxWidth: "620px",
          marginBottom: "72px",
        }}
      >
        One input. A complete plan.
        <br />
        Automatic execution.
      </motion.h2>

      {/* Step cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.7, ease, delay: cardDelays[i] }}
            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(7,102,83,0.2)" }}
            style={{
              background: "rgba(255,255,255,0.45)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "24px",
              padding: "24px",
              boxShadow: "0 8px 40px rgba(7,102,83,0.1)",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
            }}
          >
            {/* Watermark number */}
            <div
              style={{
                position: "absolute",
                top: "-8px",
                right: "20px",
                fontFamily: "'Inter', sans-serif",
                fontSize: "72px",
                fontWeight: 400,
                color: "rgba(111,196,176,0.1)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {step.number}
            </div>

            {/* Icon */}
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "12px",
                background: step.iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: step.iconColor,
                marginBottom: "20px",
              }}
            >
              {step.icon}
            </div>

            <h3
              style={{
                color: "#076653",
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "10px",
              }}
            >
              {step.title}
            </h3>
            <p style={{ color: "#0C342C", fontSize: "15px", lineHeight: 1.7 }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
