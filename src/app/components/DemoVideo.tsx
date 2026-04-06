import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

export function DemoVideo() {
  return (
    <section
      id="demo"
      style={{
        padding: "128px 32px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "900px", width: "100%", textAlign: "center" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#076653",
            marginBottom: "20px",
          }}
        >
          SEE IT IN ACTION
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(28px, 3.5vw, 44px)",
            fontWeight: 400,
            color: "#0C342C",
            lineHeight: 1.15,
            maxWidth: "600px",
            margin: "0 auto 48px",
            letterSpacing: "-0.03em",
          }}
        >
          Where your team and your agents collaborate in one workspace
        </motion.h2>

        {/* Demo video */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 16px 64px rgba(7,102,83,0.15)",
          }}
        >
          <video
            src="/captain-demo.mp4"
            controls
            playsInline
            style={{ width: "100%", display: "block" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
