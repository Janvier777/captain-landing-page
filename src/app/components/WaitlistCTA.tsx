import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

export function WaitlistCTA() {
  // TODO: Wire up email submission to your backend or Mailchimp/Loops
  return (
    <section
      id="waitlist"
      style={{
        background: "linear-gradient(160deg, #faf8f2 0%, #f5f7f0 25%, #f8faf4 50%, #f0f6e8 75%, #edf4e2 100%)",
        position: "relative",
        overflow: "hidden",
        minHeight: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 32px",
      }}
    >
      {/* Mechanical hand — left */}
      <motion.img
        src="/mech-hand-nobg.png"
        alt=""
        initial={{ opacity: 0, x: "-60%" }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, ease }}
        style={{
          position: "absolute",
          left: "-4%",
          top: "18%",
          transform: "translateY(-50%)",
          width: "38%",
          maxWidth: "480px",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />

      {/* Human hand — right */}
      <motion.img
        src="/human-hand-nobg.png"
        alt=""
        initial={{ opacity: 0, x: "60%" }}
        whileInView={{ opacity: 0.55, x: 0 }}
        viewport={vp}
        transition={{ duration: 0.8, ease }}
        style={{
          position: "absolute",
          right: "-4%",
          top: "18%",
          transform: "translateY(-50%)",
          width: "38%",
          maxWidth: "480px",
          objectFit: "contain",
          pointerEvents: "none",
        }}
      />

      {/* Center glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(138,173,102,0.12) 0%, rgba(91,173,168,0.05) 40%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "560px" }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease }}
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#076653",
            marginBottom: "20px",
          }}
        >
          NOW ONBOARDING
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 4vw, 56px)",
            fontWeight: 400,
            color: "#0C342C",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "20px",
          }}
        >
          Be part of the first crew
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.15 }}
          style={{
            fontSize: "16px",
            color: "#4a7a6a",
            lineHeight: 1.6,
            maxWidth: "420px",
            margin: "0 auto 44px",
          }}
        >
          We're onboarding design partners now. Get early access before public launch.
        </motion.p>

        {/* Email input + button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0",
            justifyContent: "center",
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            borderRadius: "100px",
            padding: "6px",
            border: "1px solid rgba(7,102,83,0.12)",
            boxShadow: "0 4px 24px rgba(7,102,83,0.08)",
          }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              borderRadius: "100px",
              padding: "16px 28px",
              fontSize: "15px",
              color: "#0C342C",
              outline: "none",
            }}
          />
          <button
            style={{
              background: "#1f4a34",
              color: "#F5F0E8",
              fontSize: "15px",
              fontWeight: 600,
              padding: "16px 36px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Get Early Access
          </button>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.3 }}
          style={{
            fontSize: "12px",
            color: "#5a8c7a",
            marginTop: "20px",
          }}
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
