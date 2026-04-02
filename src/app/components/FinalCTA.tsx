import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

export function FinalCTA() {
  return (
    <section
      id="cta"
      style={{
        padding: "180px 32px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Warm focal blob */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "70vw",
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(111,196,176,0.12) 0%, rgba(111,196,176,0.06) 30%, rgba(111,196,176,0.04) 55%, transparent 75%)",
          filter: "blur(56px)",
          pointerEvents: "none",
          borderRadius: "50%",
        }}
      />


      <div style={{ position: "relative", zIndex: 1, maxWidth: "680px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.7, ease }}
          style={{
            color: "#076653",
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1.05,
            marginBottom: "24px",
          }}
        >
          Every task starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          style={{
            color: "#0C342C",
            fontSize: "18px",
            lineHeight: 1.7,
            marginBottom: "52px",
          }}
        >
          Tell Captain what needs to get done. Let your humans and AI agents do
          the rest.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          whileHover={{
            scale: 1.03,
            y: -3,
            boxShadow: "0 20px 60px rgba(7,102,83,0.5)",
          }}
          style={{
            display: "inline-block",
            background: "#1f4a34",
            color: "#ffffff",
            fontSize: "17px",
            fontWeight: 600,
            padding: "18px 48px",
            borderRadius: "100px",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            boxShadow: "0 8px 40px rgba(7,102,83,0.38)",
          }}
        >
          Get Early Access
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
          style={{ color: "#8AAD66", fontSize: "13px", marginTop: "20px" }}
        >
          Free for early teams. We'll onboard you personally.
        </motion.p>
      </div>
    </section>
  );
}
