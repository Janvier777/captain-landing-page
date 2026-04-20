import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

export function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async () => {
    if (sending || !email.trim()) return;
    setSending(true);
    setStatus("idle");
    // For now, simulate success (no waitlist API yet)
    // TODO: Replace with actual waitlist API call
    try {
      await new Promise((r) => setTimeout(r, 1500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="waitlist-section"
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
      <style>{`
        @media (max-width: 767px) {
          .waitlist-section {
            padding: 60px 16px !important;
            min-height: 400px !important;
          }
          .waitlist-hand {
            width: 30% !important;
            opacity: 0.3 !important;
          }
          .waitlist-input-wrap {
            flex-direction: column !important;
            border-radius: 16px !important;
          }
          .waitlist-input-wrap input {
            padding: 14px 20px !important;
          }
          .waitlist-input-wrap button {
            padding: 14px 24px !important;
            border-radius: 100px !important;
          }
        }
      `}</style>
      {/* Mechanical hand — left */}
      <motion.img
        className="waitlist-hand"
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
        className="waitlist-hand"
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
          We're building an AI-native collaborative workspace to help companies navigate their AI transformation. If that sounds like you, come onboard as an early user and get 50% off.
        </motion.p>

        {/* Email input + button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.2 }}
          className="waitlist-input-wrap"
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSubmit}
            disabled={sending}
            style={{
              background: "#1f4a34",
              color: "#F5F0E8",
              fontSize: "15px",
              fontWeight: 600,
              padding: "16px 36px",
              borderRadius: "100px",
              border: "none",
              cursor: sending ? "default" : "pointer",
              whiteSpace: "nowrap",
              opacity: sending ? 0.65 : 1,
            }}
          >
            {sending ? "Sending..." : "Get Early Access"}
          </button>
        </motion.div>

        {/* Modal popup */}
        <AnimatePresence>
          {status !== "idle" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setStatus("idle")}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(0,0,0,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: "#fff",
                  borderRadius: "18px",
                  padding: "40px 36px",
                  maxWidth: "420px",
                  width: "100%",
                  textAlign: "center",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>
                  {status === "success" ? "\u2705" : "\u26A0\uFE0F"}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  color: "#0C342C",
                  marginBottom: "12px",
                }}>
                  {status === "success" ? "You're on the list!" : "Something Went Wrong"}
                </h3>
                <p style={{ fontSize: "15px", color: "#4a7a6a", lineHeight: 1.6, marginBottom: "24px" }}>
                  {status === "success"
                    ? "We'll reach out soon with early access details. Check your inbox."
                    : "Please try again in a moment."}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "#1f4a34",
                    color: "#fff",
                    fontSize: "15px",
                    fontWeight: 600,
                    padding: "12px 32px",
                    borderRadius: "100px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {status === "success" ? "Got it" : "Close"}
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
