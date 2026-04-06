import { motion } from "motion/react";
import recurringTasks from "../../assets/recurring-tasks.mov";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const steps = [
  {
    step: "01",
    title: "Capture",
    description:
      "Captain picks up commitments from your Slack conversations — decisions, follow-ups, and next steps that would otherwise get lost.",
    color: "#D4E017",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "Each task gets broken into clear steps with the right tools and owners. You review and approve the plan before anything runs.",
    color: "#D4E017",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Captain coordinates execution across your connected tools — drafting, researching, updating — with real-time progress updates.",
    color: "#D4E017",
  },
  {
    step: "04",
    title: "Review",
    description:
      "Human checkpoints at every critical moment. Approve outputs, request changes, or redirect — then Captain continues.",
    color: "#D4E017",
  },
];

const cardDelays = [0, 0.15, 0.3, 0.45];

export function Capabilities() {
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
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.65, ease, delay: 0.1 }}
        style={{ marginBottom: "72px" }}
      >
        <h2
          style={{
            color: "#1E4A14",
            fontSize: "clamp(28px, 3vw, 44px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "560px",
            marginBottom: "16px",
          }}
        >
          From conversation to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #8AAD66, #076653)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            completed work.
          </span>
        </h2>
        <p style={{ color: "#0C342C", fontSize: "17px", lineHeight: 1.7, maxWidth: "500px" }}>
          Captain follows the work from start to finish — so your team can focus on what matters.
        </p>
      </motion.div>

      {/* 4 steps in a row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "0",
          position: "relative",
        }}
      >
        {/* Connector line behind cards */}
        <div
          style={{
            position: "absolute",
            top: "42px",
            left: "12.5%",
            right: "12.5%",
            height: "1px",
            background: "linear-gradient(to right, rgba(138,173,102,0.4), rgba(138,173,102,0.2))",
            zIndex: 0,
          }}
        />

        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease, delay: cardDelays[i] }}
            style={{ padding: "0 24px 0 0", position: "relative", zIndex: 1 }}
          >
            {/* Step number with accent dot */}
            <div style={{ position: "relative", display: "inline-flex", marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "40px",
                  fontWeight: 400,
                  color: "rgba(111,196,176,0.12)",
                  letterSpacing: "0",
                  lineHeight: 1,
                }}
              >
                {step.step}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  left: "-2px",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: step.color,
                  opacity: 0.5,
                }}
              />
            </div>

            <h3
              style={{
                color: "#1E4A14",
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

            {/* Animated traveling dot between steps */}
            {i < steps.length - 1 && (
              <motion.div
                initial={{ left: "88%", opacity: 0 }}
                whileInView={{ left: "112%", opacity: [0, 1, 1, 0] }}
                viewport={vp}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5 + 0.8,
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  top: "42px",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: step.color,
                  transform: "translateY(-50%)",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Recurring tasks demo video */}
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
            boxShadow: "0 16px 64px rgba(212,224,23,0.15)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <video
            src={recurringTasks}
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
