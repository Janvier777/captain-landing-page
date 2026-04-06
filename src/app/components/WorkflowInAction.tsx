import { motion } from "motion/react";
import projectDemo from "../../assets/project-demo.mov";
import newProjectDemo from "../../assets/new-project-demo.mov";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

const workflowSteps = [
  { number: "①", type: "AI",    agent: "OpenSpec",  description: "Fetch existing documentation and technical specs from connected data sources to provide context." },
  { number: "②", type: "AI",    agent: "OpenDevin", description: "Browse the web and analyze the competitive landscape, identifying unique selling points and pain points." },
  { number: "③", type: "AI",    agent: "OpenSpec",  description: "Generate a slide-by-slide outline including Problem, Solution, Market Size, Product Demo, Business Model, and Team." },
  { number: "④", type: "HUMAN", agent: "Sunny",     description: "Review the drafted outline and scripts for tone, accuracy, and flow. Adjust the narrative for brand alignment." },
  { number: "⑤", type: "AI",    agent: "Gamma",     description: "Input the approved outline into Gamma to generate a modern, high-quality visual pitch deck." },
  { number: "⑥", type: "AI",    agent: "Decktopus", description: "Generate data-driven slides and business-ready layouts for the market and financial sections." },
  { number: "⑦", type: "HUMAN", agent: "Sunny",     description: "Final check of the generated presentation to ensure all visual elements and data points are correct." },
];

const stepVariant = (i: number) => ({
  initial: { opacity: 0, x: i % 2 === 0 ? -36 : 36 },
  animate: { opacity: 1, x: 0 },
});

export function WorkflowInAction() {
  return (
    <section
      id="workflow"
      style={{ position: "relative", overflow: "hidden" }}
    >

      {/* New project demo — above "See It Work" */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease }}
        style={{ padding: "100px 48px 60px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 16px 64px rgba(7,102,83,0.2)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <video
            src={newProjectDemo}
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", display: "block" }}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, padding: "60px 32px 60px", maxWidth: "1100px", margin: "0 auto" }}>
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
          See It Work
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
            maxWidth: "640px",
            marginBottom: "16px",
          }}
        >
          "Make a pitch deck" → 7 steps → done.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
          style={{
            color: "#0C342C",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "500px",
            marginBottom: "64px",
          }}
        >
          One sentence. Captain figures out which tools to use, what order to run
          them in, and where humans need to step in.
        </motion.p>

        <div style={{ maxWidth: "680px" }}>
          {/* Simulated input bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease, delay: 0.25 }}
            style={{
              background: "rgba(255,255,255,0.65)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "14px",
              padding: "15px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "40px",
              boxShadow: "0 4px 24px rgba(7,102,83,0.1)",
            }}
          >
            <span style={{ color: "#8AAD66", fontSize: "16px" }}>※</span>
            <span style={{ color: "#076653", fontSize: "15px", flex: 1 }}>
              Make a pitch deck for our Series A.
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                background: "#1f4a34",
                color: "#8AAD66",
                fontSize: "10px",
                fontWeight: 400,
                padding: "6px 14px",
                borderRadius: "3px",
                whiteSpace: "nowrap",
                letterSpacing: "0.05em",
              }}
            >
              Create Plan ✓
            </span>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Connecting line — 2px, #8AAD66 */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={vp}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              style={{
                position: "absolute",
                left: "17px",
                top: "36px",
                bottom: "36px",
                width: "2px",
                background: "#8AAD66",
                transformOrigin: "top center",
              }}
            />

            {workflowSteps.map((step, i) => {
              const isHuman = step.type === "HUMAN";
              const v = stepVariant(i);
              return (
                <motion.div
                  key={i}
                  initial={v.initial}
                  whileInView={v.animate}
                  viewport={vp}
                  transition={{ duration: 0.65, ease, delay: 0.1 * i }}
                  style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.75)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: `1.5px solid ${isHuman ? "rgba(7,102,83,0.7)" : "rgba(91,173,168,0.7)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      zIndex: 1,
                      fontSize: "13px",
                      color: isHuman ? "#076653" : "#5BADA8",
                    }}
                  >
                    {step.number}
                  </div>

                  <motion.div
                    whileHover={{ y: -3, boxShadow: "0 10px 32px rgba(7,102,83,0.15)" }}
                    style={{
                      flex: 1,
                      background: isHuman ? "rgba(111,196,176,0.07)" : "rgba(91,173,168,0.06)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      border: `1px solid ${isHuman ? "rgba(7,102,83,0.35)" : "rgba(91,173,168,0.35)"}`,
                      borderRadius: "14px",
                      padding: "16px 20px",
                      boxShadow: "0 4px 20px rgba(7,102,83,0.07)",
                      transition: "box-shadow 0.25s ease",
                      cursor: "default",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <motion.span
                        initial={{ scale: 0.75, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={vp}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 * i + 0.2 }}
                        style={{
                          display: "inline-block",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "9px",
                          fontWeight: 400,
                          letterSpacing: "0.1em",
                          color: isHuman ? "#076653" : "#5BADA8",
                          background: isHuman ? "rgba(111,196,176,0.1)" : "rgba(91,173,168,0.12)",
                          padding: "3px 8px",
                          borderRadius: "3px",
                        }}
                      >
                        {step.type}
                      </motion.span>
                      <span style={{ color: "#076653", fontSize: "14px", fontWeight: 600 }}>
                        {step.agent}
                      </span>
                    </div>
                    <p style={{ color: "#0C342C", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={vp}
            transition={{ duration: 0.65, ease, delay: 0.3 }}
            style={{
              marginTop: "40px",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "14px",
              padding: "22px 26px",
              boxShadow: "0 4px 24px rgba(7,102,83,0.08)",
            }}
          >
            <p style={{ color: "#076653", fontSize: "14px", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
              Captain planned 7 steps across 4 AI agents and 2 humans — from one sentence.
            </p>
          </motion.div>

        </div>
      </div>

      {/* Project detail demo — below callout */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        style={{ padding: "48px 48px 100px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 16px 64px rgba(7,102,83,0.2)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <video
            src={projectDemo}
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
