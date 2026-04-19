import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import QRCode from "qrcode";
import {
  questions,
  resultTypes,
  dimensions,
  calculateResult,
} from "./quizData";
import anchorIcon from "../../assets/anchor-icon.png";

const ease = [0.16, 1, 0.3, 1] as const;

const tagColorMap: Record<string, { bg: string; color: string }> = {
  purple: { bg: "rgba(120,80,200,0.12)", color: "#6b46c1" },
  teal: { bg: "rgba(7,102,83,0.12)", color: "#076653" },
  amber: { bg: "rgba(200,150,50,0.12)", color: "#92650a" },
  coral: { bg: "rgba(200,80,80,0.12)", color: "#b44040" },
};

const dimLabels: Record<string, string> = {};
dimensions.forEach((d) => (dimLabels[d.key] = d.label));

/* ============================================================
   COVER SCREEN
   ============================================================ */
function CoverScreen({
  onStart,
  onLearnMore,
}: {
  onStart: () => void;
  onLearnMore: () => void;
}) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .agti-cover-content {
            margin-top: -10vh !important;
            padding: 0 16px !important;
          }
          .agti-label {
            font-size: 11px !important;
          }
          .agti-title {
            font-size: 48px !important;
          }
          .agti-subtitle {
            font-size: 20px !important;
          }
          .agti-desc {
            font-size: 16px !important;
          }
          .agti-btn {
            font-size: 15px !important;
            padding: 12px 24px !important;
          }
          .agti-captain-row {
            flex-direction: column !important;
            gap: 4px !important;
          }
          .agti-captain-logo {
            height: 50px !important;
          }
          .agti-captain-text {
            font-size: 14px !important;
          }
        }
      `}</style>
      <iframe
        src="/particle.html"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: "none",
          pointerEvents: "none",
        }}
      />
      <img
        src="/agti/background.png"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "auto",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className="agti-cover-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "-30vh",
          background: "transparent",
          border: "none",
          boxShadow: "none",
          textAlign: "center",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        {/* Label */}
        <p
          className="agti-label"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#4a7a5a",
            marginBottom: "10px",
            marginTop: 0,
          }}
        >
          AI GROUP TYPE INDICATOR
        </p>

        {/* Main title */}
        <h1
          className="agti-title"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "96px",
            fontWeight: 700,
            color: "#1a3a2a",
            lineHeight: 1,
            marginBottom: "6px",
            marginTop: 0,
          }}
        >
          The AGTI
        </h1>

        {/* Subtitle */}
        <p
          className="agti-subtitle"
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#2d5a3d",
            marginBottom: "10px",
            marginTop: 0,
          }}
        >
          How AI-ready is your team?
        </p>

        {/* Description */}
        <p
          className="agti-desc"
          style={{
            fontSize: "22px",
            color: "#3a5a44",
            lineHeight: 1.6,
            maxWidth: "400px",
            margin: "0 auto 24px",
          }}
        >
          Find out your AI team score and discover your team's personality type.
        </p>

        {/* Primary CTA */}
        <button
          className="agti-btn"
          onClick={onStart}
          style={{
            background: "#2d5a3d",
            color: "#f5f0e8",
            border: "none",
            borderRadius: "50px",
            padding: "12px 28px",
            fontSize: "20px",
            fontWeight: 600,
            cursor: "pointer",
            maxWidth: "360px",
            width: "100%",
            transition: "transform 0.15s, box-shadow 0.2s",
            boxShadow: "0 4px 16px rgba(30, 60, 30, 0.18)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(30, 60, 30, 0.28)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(30, 60, 30, 0.18)";
          }}
        >
          Test here for free
        </button>

        {/* Captain referral row */}
        <a
          className="agti-captain-row"
          href="#"
          onClick={(e) => { e.preventDefault(); onLearnMore(); }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            marginTop: "16px",
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          <img
            src="/assets/captain-logo.jpg"
            alt="Captain"
            className="agti-captain-logo"
            style={{ height: "80px", width: "auto", mixBlendMode: "multiply" }}
          />
          <span
            className="agti-captain-text"
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#2d5a3d",
              textDecoration: "underline",
            }}
          >
            Build an AI-native team with Captain
          </span>
        </a>
      </motion.div>
    </section>
  );
}

/* ============================================================
   QUIZ SCREEN — one question per page
   ============================================================ */
function QuizScreen({
  onComplete,
  onLearnMore,
}: {
  onComplete: (answers: Record<number, string>) => void;
  onLearnMore: () => void;
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const total = questions.length;
  const q = questions[currentIdx];
  const progress = ((currentIdx + 1) / total) * 100;
  const canSkip = currentIdx >= 9; // from question 10 onwards (0-indexed: 9)

  const handleSelect = (letter: string) => {
    const updated = { ...answers, [q.id]: letter };
    setAnswers(updated);
    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentIdx < total - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        onComplete(updated);
      }
    }, 300);
  };

  const goBack = () => {
    if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top bar: progress + header */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
        }}
      >
        {/* Progress bar */}
        <div style={{ height: "4px", background: "rgba(7,102,83,0.08)" }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease }}
            style={{
              height: "100%",
              background: "linear-gradient(to right, #3a7a18, #72b830)",
              borderRadius: "0 2px 2px 0",
            }}
          />
        </div>
        {/* Header */}
        <div
          style={{
            background: "rgba(245,247,240,0.88)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid rgba(7,102,83,0.06)",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={onLearnMore}
            style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
          >
            <img src={anchorIcon} alt="Captain" style={{ height: "28px", width: "28px", objectFit: "contain" }} />
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#0C342C" }}>Captain</span>
          </div>
          <span style={{ fontSize: "14px", color: "#7a9a8a", fontWeight: 500 }}>
            Question {currentIdx + 1} of {total}
          </span>
        </div>
      </div>

      {/* Question content — centered full page */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "clamp(70px, 12vh, 100px) 16px clamp(80px, 14vh, 120px)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease }}
            style={{ maxWidth: "640px", width: "100%" }}
          >
            {/* Dimension label */}
            <span
              style={{
                fontSize: "12px",
                color: "#7a9a8a",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "12px",
              }}
            >
              {dimLabels[q.dim]}
            </span>

            {/* Question text */}
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 400,
                color: "#0C342C",
                lineHeight: 1.3,
                letterSpacing: "-0.015em",
                marginBottom: "6px",
              }}
            >
              {q.text}
            </h2>
            <p style={{ fontSize: "14px", color: "#7a9a8a", marginBottom: "28px", lineHeight: 1.5 }}>
              {q.sub}
            </p>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.letter;
                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleSelect(opt.letter)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "4px",
                      padding: "16px 20px",
                      background: selected ? "rgba(7,102,83,0.08)" : "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(8px)",
                      border: selected ? "1.5px solid rgba(7,102,83,0.35)" : "1px solid rgba(7,102,83,0.10)",
                      borderRadius: "12px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.2s, border 0.2s, transform 0.15s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => { if (!selected) e.currentTarget.style.background = "rgba(7,102,83,0.04)"; }}
                    onMouseLeave={(e) => { if (!selected) e.currentTarget.style.background = "rgba(255,255,255,0.6)"; }}
                  >
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: "#7a9a8a", letterSpacing: "0.08em", flexShrink: 0, marginTop: "2px" }}>
                        {opt.letter}
                      </span>
                      <span style={{ fontSize: "16px", color: "#0C342C", lineHeight: 1.45, fontWeight: 450 }}>
                        {opt.text}
                      </span>
                    </div>
                    <span style={{ fontSize: "13px", color: "#8aaa8a", fontStyle: "italic", lineHeight: 1.4, paddingLeft: "25px" }}>
                      {opt.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom bar: back + skip/submit */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(245,247,240,0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(7,102,83,0.08)",
          padding: "14px 24px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={goBack}
            disabled={currentIdx === 0}
            style={{
              background: "none",
              border: "none",
              color: currentIdx === 0 ? "#c0d0c8" : "#7a9a8a",
              fontSize: "14px",
              cursor: currentIdx === 0 ? "default" : "pointer",
              padding: "8px 12px",
            }}
          >
            ← Back
          </button>
          {canSkip && (
            <button
              onClick={() => onComplete(answers)}
              style={{
                background: "#1f4a34",
                color: "#fff",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}
            >
              Skip to Results →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   ANIMATED COUNTER
   ============================================================ */
function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

/* ============================================================
   RESULTS SCREEN
   ============================================================ */
function ResultsScreen({
  answers,
  onRestart,
  onLearnMore,
}: {
  answers: Record<number, string>;
  onRestart: () => void;
  onLearnMore: () => void;
}) {
  const { code, counts, answeredCount, isComplete } = calculateResult(answers);
  const result = resultTypes[code] || resultTypes.SVAF;
  const [email, setEmail] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<"idle" | "success" | "error">("idle");

  // Auto-clear status message after 5s
  useEffect(() => {
    if (sendStatus === "idle") return;
    const t = setTimeout(() => setSendStatus("idle"), 5000);
    return () => clearTimeout(t);
  }, [sendStatus]);

  const handleSendReport = async () => {
    if (sending) return;
    setSending(true);
    try {
      const res = await fetch("/api/send-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, personalityType: result.code }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setSendStatus("success");
      } else {
        setSendStatus("error");
        if (data?.error) console.error("send-report error:", data.error);
      }
    } catch (err) {
      console.error("send-report network error:", err);
      setSendStatus("error");
    } finally {
      setSending(false);
    }
  };

  const percentile = Math.min(99, Math.max(5, result.aiScore));

  // Generate QR code once on mount
  useEffect(() => {
    QRCode.toDataURL("https://captainspace.ai", {
      width: 180,
      margin: 1,
      color: { dark: "#0C342C", light: "#00000000" },
    }).then(setQrDataUrl).catch(() => {});
  }, []);

  const dimData = [
    { key: "sc", label: "Execution", left: "Speed-first", right: "Careful", leftVal: counts.sc.S, rightVal: counts.sc.C },
    { key: "vr", label: "Ambition", left: "Visionary", right: "Realist", leftVal: counts.vr.V, rightVal: counts.vr.R },
    { key: "ap", label: "Governance", left: "Aligned", right: "Pragmatic", leftVal: counts.ap.A, rightVal: counts.ap.P },
    { key: "fm", label: "Operating", left: "Focus-mode", right: "Meeting-mode", leftVal: counts.fm.F, rightVal: counts.fm.M },
  ];

  // Generate share card as downloadable image
  const handleShare = useCallback(async () => {
    const canvas = document.createElement("canvas");
    const w = 1080, h = 1350; // Instagram 4:5
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d")!;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, "#faf8f2");
    grad.addColorStop(0.5, "#f0f6e8");
    grad.addColorStop(1, "#e6efdd");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Inner card
    const rx = 60, ry = 60, rw = w - 120, rh = h - 120;
    ctx.fillStyle = "rgba(255,255,255,0.82)";
    ctx.beginPath();
    ctx.roundRect(rx, ry, rw, rh, 32);
    ctx.fill();
    ctx.strokeStyle = "rgba(7,102,83,0.14)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const cx = w / 2;

    // Top label
    ctx.textAlign = "center";
    ctx.font = "500 18px Inter, sans-serif";
    ctx.fillStyle = "#7a9a8a";
    ctx.fillText("A G T I  ·  A I  G R O U P  T Y P E  I N D I C A T O R", cx, 140);

    // Helper: load image as Promise
    const loadImg = (src: string) => new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });

    // Load character + QR images, then draw and download
    try {
      const charImg = await loadImg(`/agti/${result.code}.png`);

      // Character image with rounded corners (centered top)
      const imgSize = 420;
      const imgX = cx - imgSize / 2;
      const imgY = 190;
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(imgX, imgY, imgSize, imgSize, 24);
      ctx.clip();
      ctx.drawImage(charImg, imgX, imgY, imgSize, imgSize);
      ctx.restore();
      // Soft shadow border
      ctx.strokeStyle = "rgba(7,102,83,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(imgX, imgY, imgSize, imgSize, 24);
      ctx.stroke();

      // Result code
      ctx.textAlign = "center";
      ctx.font = "bold 68px 'Space Mono', Menlo, monospace";
      ctx.fillStyle = "#0C342C";
      ctx.fillText(result.code, cx, imgY + imgSize + 80);

      // Result name
      ctx.font = "400 40px 'Playfair Display', Georgia, serif";
      ctx.fillStyle = "#0C342C";
      ctx.fillText(result.name, cx, imgY + imgSize + 130);

      // Hook line — wrap if needed
      ctx.font = "italic 400 24px 'Playfair Display', Georgia, serif";
      ctx.fillStyle = "#4a7a6a";
      const hook = `"${result.shortHook}"`;
      const maxWidth = w - 260;
      const words = hook.split(" ");
      const lines: string[] = [];
      let line = "";
      for (const word of words) {
        const test = line ? line + " " + word : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          lines.push(line);
          line = word;
        } else {
          line = test;
        }
      }
      if (line) lines.push(line);
      const hookStartY = imgY + imgSize + 180;
      lines.forEach((l, i) => ctx.fillText(l, cx, hookStartY + i * 32));

      // Score pill
      const pillY = hookStartY + lines.length * 32 + 40;
      const pillW = 280, pillH = 76;
      const pillX = cx - pillW / 2;
      ctx.fillStyle = "#1f4a34";
      ctx.beginPath();
      ctx.roundRect(pillX, pillY, pillW, pillH, 38);
      ctx.fill();
      ctx.font = "bold 44px 'Space Mono', Menlo, monospace";
      ctx.fillStyle = "#fff";
      ctx.textBaseline = "middle";
      ctx.fillText(`${result.aiScore} / 100`, cx, pillY + pillH / 2 + 2);
      ctx.textBaseline = "alphabetic";
      // Small label above pill
      ctx.font = "500 12px Inter, sans-serif";
      ctx.fillStyle = "#7a9a8a";
      ctx.fillText("AI NATIVE INDEX", cx, pillY - 10);

      // Bottom: QR + url
      const qrUrl = await QRCode.toDataURL("https://captainspace.ai", {
        width: 160,
        margin: 1,
        color: { dark: "#0C342C", light: "#00000000" },
      });
      const qrImg = await loadImg(qrUrl);
      const qrSize = 130;
      const qrX = cx - qrSize / 2;
      const qrY = h - 220;
      ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);

      ctx.textAlign = "center";
      ctx.font = "600 18px Inter, sans-serif";
      ctx.fillStyle = "#1f4a34";
      ctx.fillText("captainspace.ai", cx, qrY + qrSize + 30);
      ctx.font = "400 13px Inter, sans-serif";
      ctx.fillStyle = "#7a9a8a";
      ctx.fillText("Scan to discover your team's type", cx, qrY + qrSize + 52);

      // Download
      const link = document.createElement("a");
      link.download = `AGTI-${result.code}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Share card generation failed:", err);
    }
  }, [result]);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 24px 60px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 767px) {
          .results-container {
            padding: 24px 16px 40px !important;
          }
          .results-main-grid {
            grid-template-columns: 1fr !important;
          }
          .results-dim-grid {
            grid-template-columns: 1fr !important;
          }
          .results-qr-score-share {
            grid-template-columns: auto 1fr auto !important;
            gap: 8px !important;
          }
          .results-qr-link {
            width: 48px !important;
            height: 48px !important;
          }
          .results-email-section {
            padding: 20px 16px !important;
          }
          .results-email-input-wrap {
            flex: 1 1 100% !important;
            min-width: 0 !important;
          }
          .results-hook {
            font-size: 14px !important;
          }
        }
      `}</style>
      <div className="results-container" style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Partial results banner */}
        {!isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              background: "rgba(200,180,100,0.10)",
              border: "1px solid rgba(200,180,100,0.20)",
              borderRadius: "10px",
              padding: "10px 16px",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "13px", color: "#7a6a3a" }}>
              Results based on {answeredCount}/24 questions.
            </span>
            <button
              onClick={onRestart}
              style={{
                background: "none",
                border: "1px solid rgba(120,100,50,0.3)",
                borderRadius: "6px",
                padding: "4px 12px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#7a6a3a",
                cursor: "pointer",
              }}
            >
              Retake
            </button>
          </motion.div>
        )}

        {/* Top: Code + Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: "center", marginBottom: "24px" }}
        >
          <h1
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(48px, 8vw, 72px)",
              fontWeight: 700,
              color: "#0C342C",
              lineHeight: 1,
              letterSpacing: "0.08em",
              marginBottom: "6px",
            }}
          >
            {result.code}
          </h1>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(20px, 2.5vw, 28px)",
              fontWeight: 400,
              color: "#0C342C",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "8px",
            }}
          >
            {result.name}
          </h2>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.8vw, 18px)",
              fontWeight: 400,
              color: "#4a7a6a",
              lineHeight: 1.4,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            "{result.shortHook}"
          </p>
        </motion.div>

        {/* Main content: 2-column grid */}
        <motion.div
          className="results-main-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "20px",
            alignItems: "stretch",
          }}
        >
          {/* Left: Image + Score */}
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              borderRadius: "16px",
              border: "1px solid rgba(7,102,83,0.10)",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "16px",
                boxShadow: "0 6px 24px rgba(0,0,0,0.08)",
                aspectRatio: "1 / 1",
              }}
            >
              <img
                src={`/agti/${result.code}.png`}
                alt={result.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Bottom row: QR | Score | Share */}
            <div
              className="results-qr-score-share"
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                alignItems: "center",
                gap: "12px",
                marginTop: "auto",
              }}
            >
              {/* QR code — left */}
              <a
                className="results-qr-link"
                href="https://captainspace.ai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "64px",
                  height: "64px",
                  background: "#fff",
                  borderRadius: "10px",
                  border: "1px solid rgba(7,102,83,0.12)",
                  padding: "4px",
                  textDecoration: "none",
                }}
                title="Open captainspace.ai"
              >
                {qrDataUrl ? (
                  <img src={qrDataUrl} alt="captainspace.ai QR" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                ) : (
                  <span style={{ fontSize: "10px", color: "#7a9a8a" }}>QR</span>
                )}
              </a>

              {/* Score — center */}
              <div style={{ textAlign: "center" }}>
                <div>
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "clamp(32px, 4.5vw, 44px)",
                      fontWeight: 700,
                      color: "#0C342C",
                      lineHeight: 1,
                    }}
                  >
                    <AnimatedCounter target={result.aiScore} />
                  </span>
                  <span style={{ fontSize: "15px", color: "#7a9a8a", marginLeft: "4px", fontWeight: 400 }}>
                    / 100
                  </span>
                </div>
                <p style={{ fontSize: "11px", fontWeight: 500, color: "#4a7a6a", margin: "4px 0 0" }}>
                  You beat <strong style={{ color: "#0C342C" }}>{percentile}%</strong> of teams
                </p>
              </div>

              {/* Share button — right */}
              <button
                onClick={handleShare}
                aria-label="Share your result"
                title="Share your result"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  background: "#1f4a34",
                  color: "#fff",
                  border: "none",
                  borderRadius: "50%",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(31,74,52,0.28)",
                  transition: "transform 0.15s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(31,74,52,0.38)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(31,74,52,0.28)";
                }}
              >
                {/* Upload/share icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Description + Dimensions + Tags */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div
              style={{
                background: "rgba(255,255,255,0.50)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
                border: "1px solid rgba(7,102,83,0.08)",
                padding: "20px",
                flex: 1,
              }}
            >
              <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#2a5a4a" }}>
                {result.description}
              </p>
            </div>

            <div className="results-dim-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {dimData.map((d) => {
                const tot = d.leftVal + d.rightVal;
                const leftPct = tot > 0 ? (d.leftVal / tot) * 100 : 50;
                const isLeft = d.leftVal >= d.rightVal;
                return (
                  <div
                    key={d.key}
                    style={{
                      background: "rgba(255,255,255,0.5)",
                      backdropFilter: "blur(8px)",
                      borderRadius: "12px",
                      border: "1px solid rgba(7,102,83,0.08)",
                      padding: "14px",
                    }}
                  >
                    <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#7a9a8a", marginBottom: "4px" }}>
                      {d.label}
                    </p>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#0C342C", marginBottom: "6px" }}>
                      {isLeft ? d.left : d.right}
                    </p>
                    <div style={{ height: "4px", borderRadius: "2px", background: "rgba(7,102,83,0.08)", overflow: "hidden" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${leftPct}%` }}
                        transition={{ duration: 0.8, ease, delay: 0.4 }}
                        style={{ height: "100%", background: "#076653", borderRadius: "2px" }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#8aaa8a", marginTop: "3px" }}>
                      <span>{d.left}</span>
                      <span>{d.right}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {result.tags.map((tag, i) => {
                const c = tagColorMap[result.tagColors[i]] || tagColorMap.teal;
                return (
                  <span
                    key={i}
                    style={{
                      background: c.bg,
                      color: c.color,
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 12px",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Action buttons: Generate Report + Share */}
        <motion.div
          className="results-email-section"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          style={{
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(16px)",
            borderRadius: "16px",
            border: "1px solid rgba(7,102,83,0.10)",
            padding: "28px 32px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "18px",
              fontWeight: 500,
              color: "#0C342C",
              marginBottom: "18px",
              lineHeight: 1.4,
            }}
          >
            Want the full report? Enter your email below.
          </p>

          <div style={{ display: "flex", gap: "10px", marginBottom: "18px", flexWrap: "wrap", alignItems: "center" }}>
            <div
              className="results-email-input-wrap"
              style={{
                display: "flex",
                background: "rgba(255,255,255,0.7)",
                borderRadius: "100px",
                padding: "3px",
                border: "1px solid rgba(7,102,83,0.12)",
                flex: "1 1 280px",
                minWidth: "240px",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderRadius: "100px",
                  padding: "10px 16px",
                  fontSize: "14px",
                  color: "#0C342C",
                  outline: "none",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button
                onClick={handleSendReport}
                disabled={sending}
                style={{
                  background: "#1f4a34",
                  color: "#fff",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "10px 20px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: sending ? "default" : "pointer",
                  whiteSpace: "nowrap",
                  opacity: sending ? 0.65 : 1,
                  transition: "opacity 0.2s",
                }}
              >
                {sending ? "Sending..." : "Generate Full Report"}
              </button>
            </div>

          </div>

          {/* Send status feedback */}
          {sendStatus !== "idle" && (
            <div
              role="status"
              aria-live="polite"
              style={{
                marginTop: "-6px",
                marginBottom: "14px",
                fontSize: "13px",
                fontWeight: 500,
                color: sendStatus === "success" ? "#2d5a3d" : "#b94a3a",
              }}
            >
              {sendStatus === "success"
                ? "Report sent! Check your inbox."
                : "Something went wrong. Please try again."}
            </div>
          )}

          {/* Captain CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={onLearnMore}
              style={{
                background: "#1f4a34",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "100px",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Learn More About Captain
            </button>
            <span style={{ fontSize: "13px", color: "#5a8a6a" }}>
              Improve your AI-native index with Captain
            </span>
          </div>
        </motion.div>

        {/* Restart */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onRestart}
            style={{
              background: "none",
              border: "none",
              color: "#7a9a8a",
              fontSize: "13px",
              cursor: "pointer",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            Take it again (be more honest this time)
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   MAIN QUIZ COMPONENT
   ============================================================ */
export function Quiz({ onFinish }: { onFinish: () => void }) {
  const [screen, setScreen] = useState<"cover" | "quiz" | "results">("cover");
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, #faf8f2 0%, #f5f7f0 25%, #f8faf4 50%, #f0f6e8 75%, #edf4e2 100%)",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        {screen === "cover" && (
          <motion.div
            key="cover"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CoverScreen onStart={() => setScreen("quiz")} onLearnMore={onFinish} />
          </motion.div>
        )}
        {screen === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <QuizScreen
              onComplete={(a) => {
                setAnswers(a);
                setScreen("results");
                window.scrollTo(0, 0);
              }}
              onLearnMore={onFinish}
            />
          </motion.div>
        )}
        {screen === "results" && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <ResultsScreen
              answers={answers}
              onRestart={() => {
                setAnswers({});
                setScreen("cover");
                window.scrollTo(0, 0);
              }}
              onLearnMore={onFinish}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
