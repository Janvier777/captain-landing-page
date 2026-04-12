import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  questions,
  resultTypes,
  dimensions,
  calculateResult,
} from "./quizData";

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "680px",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(38px, 6vw, 68px)",
            fontWeight: 400,
            color: "#0C342C",
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            marginBottom: "12px",
          }}
        >
          The AGTI
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 3vw, 32px)",
            fontWeight: 400,
            color: "#0C342C",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "8px",
          }}
        >
          MBTI for AI Teams
        </p>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#7a9a8a",
            marginBottom: "36px",
          }}
        >
          AI Group Type Indicator
        </p>
        <p
          style={{
            fontSize: "16px",
            color: "#4a7a6a",
            lineHeight: 1.65,
            maxWidth: "520px",
            margin: "0 auto 40px",
          }}
        >
          Every team claims to be AI-native and building AGI. This test reveals
          your team's AI-native index and its personality in the AI era.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "24px",
          }}
        >
          <button
            onClick={onStart}
            style={{
              background: "#1f4a34",
              color: "#fff",
              fontSize: "17px",
              fontWeight: 600,
              padding: "16px 48px",
              borderRadius: "100px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 6px 28px rgba(0,0,0,0.3)",
              transition: "transform 0.15s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 36px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 28px rgba(0,0,0,0.3)";
            }}
          >
            Start the test
          </button>
          <button
            onClick={onLearnMore}
            style={{
              background: "transparent",
              color: "#1f4a34",
              fontSize: "15px",
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: "100px",
              border: "1.5px solid #1f4a34",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1f4a34";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#1f4a34";
            }}
          >
            Know more about Captain
          </button>
        </div>
        <p style={{ fontSize: "12px", color: "#7a9a8a", lineHeight: 1.5 }}>
          No right answers &middot; results are permanent and irrefutable
        </p>
      </motion.div>
    </section>
  );
}

/* ============================================================
   QUIZ SCREEN — scrollable single page, all questions visible
   ============================================================ */
function QuizScreen({
  onComplete,
}: {
  onComplete: (answers: Record<number, string>) => void;
}) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const total = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / total) * 100;
  const allAnswered = answeredCount === total;
  const canSkip = answeredCount >= 15;

  const handleSelect = (qId: number, letter: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: letter }));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        paddingBottom: "120px",
      }}
    >
      {/* Sticky progress bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "rgba(7,102,83,0.08)",
          zIndex: 100,
        }}
      >
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

      {/* All questions */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 0" }}>
        {questions.map((q, idx) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: idx * 0.03 }}
            style={{
              marginBottom: "56px",
            }}
          >
            {/* Question header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#0C342C",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                Q{idx + 1}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "#7a9a8a",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                }}
              >
                {dimLabels[q.dim]}
              </span>
            </div>

            {/* Question text */}
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(24px, 3vw, 34px)",
                fontWeight: 400,
                color: "#0C342C",
                lineHeight: 1.2,
                letterSpacing: "-0.015em",
                marginBottom: "8px",
              }}
            >
              {q.text}
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#7a9a8a",
                marginBottom: "24px",
                lineHeight: 1.5,
              }}
            >
              {q.sub}
            </p>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt.letter;
                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleSelect(q.id, opt.letter)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "6px",
                      padding: "18px 24px",
                      background: selected
                        ? "rgba(7,102,83,0.08)"
                        : "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(8px)",
                      border: selected
                        ? "1.5px solid rgba(7,102,83,0.35)"
                        : "1px solid rgba(7,102,83,0.10)",
                      borderRadius: "14px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.2s, border 0.2s",
                      width: "100%",
                    }}
                  >
                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#7a9a8a",
                          letterSpacing: "0.08em",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        {opt.letter}
                      </span>
                      <span
                        style={{
                          fontSize: "17px",
                          color: "#0C342C",
                          lineHeight: 1.5,
                          fontWeight: 450,
                        }}
                      >
                        {opt.text}
                      </span>
                    </div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#8aaa8a",
                        fontStyle: "italic",
                        lineHeight: 1.45,
                        paddingLeft: "25px",
                      }}
                    >
                      {opt.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Sticky bottom bar */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(245,247,240,0.92)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(7,102,83,0.08)",
          padding: "16px 24px",
          zIndex: 100,
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "14px", color: "#7a9a8a", fontWeight: 500 }}>
            {answeredCount} / {total} answered
          </span>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            {canSkip && !allAnswered && (
              <button
                onClick={() => onComplete(answers)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#7a9a8a",
                  fontSize: "14px",
                  cursor: "pointer",
                  padding: "8px 16px",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#0C342C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#7a9a8a")}
              >
                Skip to results →
              </button>
            )}
            {allAnswered && (
              <button
                onClick={() => onComplete(answers)}
                style={{
                  background: "#1f4a34",
                  color: "#fff",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "12px 36px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                }}
              >
                See my results
              </button>
            )}
          </div>
        </div>
        {canSkip && !allAnswered && (
          <p style={{ fontSize: "12px", color: "#a0b8a8", textAlign: "center", margin: "6px 0 0" }}>
            You can see your results now — but answering all 24 questions will make your type more accurate.
          </p>
        )}
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

  const dimData = [
    { key: "sc", label: "Execution", left: "Speed-first", right: "Careful", leftVal: counts.sc.S, rightVal: counts.sc.C },
    { key: "vr", label: "Ambition", left: "Visionary", right: "Realist", leftVal: counts.vr.V, rightVal: counts.vr.R },
    { key: "ap", label: "Governance", left: "Aligned", right: "Pragmatic", leftVal: counts.ap.A, rightVal: counts.ap.P },
    { key: "fm", label: "Operating", left: "Focus-mode", right: "Meeting-mode", leftVal: counts.fm.F, rightVal: counts.fm.M },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 24px 80px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Partial results banner */}
        {!isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            style={{
              background: "rgba(200,180,100,0.10)",
              border: "1px solid rgba(200,180,100,0.20)",
              borderRadius: "12px",
              padding: "14px 20px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: "14px", color: "#7a6a3a" }}>
              Results based on {answeredCount}/24 questions. Retake the full test for a more accurate type.
            </span>
            <button
              onClick={onRestart}
              style={{
                background: "none",
                border: "1px solid rgba(120,100,50,0.3)",
                borderRadius: "6px",
                padding: "5px 14px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#7a6a3a",
                cursor: "pointer",
              }}
            >
              Retake
            </button>
          </motion.div>
        )}

        {/* ── Top: Code + Name ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <h1
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(56px, 10vw, 96px)",
              fontWeight: 700,
              color: "#0C342C",
              lineHeight: 1,
              letterSpacing: "0.08em",
              marginBottom: "8px",
            }}
          >
            {result.code}
          </h1>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 400,
              color: "#0C342C",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            {result.name}
          </h2>
        </motion.div>

        {/* ── Main content: Image left, Description right ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "24px",
            marginBottom: "28px",
            alignItems: "start",
          }}
        >
          {/* Left: Image + Score + Tags */}
          <div
            style={{
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(16px)",
              borderRadius: "20px",
              border: "1px solid rgba(7,102,83,0.10)",
              padding: "24px",
            }}
          >
            <div
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                marginBottom: "24px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={`/agti/${result.code}.png`}
                alt={result.name}
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* AI Score */}
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "clamp(44px, 6vw, 64px)",
                  fontWeight: 700,
                  color: "#0C342C",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter target={result.aiScore} />
              </span>
              <span
                style={{
                  fontSize: "18px",
                  color: "#7a9a8a",
                  marginLeft: "8px",
                  fontWeight: 400,
                }}
              >
                / 100
              </span>
            </div>

            {/* Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              {result.tags.map((tag, i) => {
                const c = tagColorMap[result.tagColors[i]] || tagColorMap.teal;
                return (
                  <span
                    key={i}
                    style={{
                      background: c.bg,
                      color: c.color,
                      fontSize: "13px",
                      fontWeight: 600,
                      padding: "6px 16px",
                      borderRadius: "100px",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Right: Description + Dimensions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Description */}
            <div
              style={{
                background: "rgba(255,255,255,0.50)",
                backdropFilter: "blur(12px)",
                borderRadius: "20px",
                border: "1px solid rgba(7,102,83,0.08)",
                padding: "32px",
              }}
            >
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: 1.85,
                  color: "#2a5a4a",
                  letterSpacing: "0.005em",
                }}
              >
                {result.description}
              </p>
            </div>

            {/* Dimensions */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
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
                      borderRadius: "14px",
                      border: "1px solid rgba(7,102,83,0.08)",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#7a9a8a",
                        marginBottom: "8px",
                      }}
                    >
                      {d.label}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "#0C342C",
                        marginBottom: "8px",
                      }}
                    >
                      {isLeft ? d.left : d.right}
                    </p>
                    <div
                      style={{
                        height: "5px",
                        borderRadius: "3px",
                        background: "rgba(7,102,83,0.08)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${leftPct}%` }}
                        transition={{ duration: 0.8, ease, delay: 0.4 }}
                        style={{
                          height: "100%",
                          background: "#076653",
                          borderRadius: "3px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "11px",
                        color: "#8aaa8a",
                        marginTop: "5px",
                      }}
                    >
                      <span>{d.left}</span>
                      <span>{d.right}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── AI-native bar + CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          style={{
            background: "rgba(255,255,255,0.55)",
            backdropFilter: "blur(16px)",
            borderRadius: "16px",
            border: "1px solid rgba(7,102,83,0.10)",
            padding: "28px 36px",
            marginBottom: "24px",
          }}
        >
          {/* Full-width score bar */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#0C342C", whiteSpace: "nowrap" }}>
              AI-native index
            </span>
            <div
              style={{
                flex: 1,
                height: "8px",
                background: "rgba(7,102,83,0.08)",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.aiScore}%` }}
                transition={{ duration: 1.2, ease, delay: 0.3 }}
                style={{
                  height: "100%",
                  background: "linear-gradient(to right, #076653, #3a7a18)",
                  borderRadius: "4px",
                }}
              />
            </div>
            <span style={{ fontSize: "16px", fontWeight: 700, color: "#0C342C", fontFamily: "'Space Mono', monospace" }}>
              {result.aiScore}/100
            </span>
          </div>

          {/* CTA row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                color: "#0C342C",
                margin: 0,
                flex: 1,
                minWidth: "200px",
              }}
            >
              Make your team more AI-native
            </p>
            <div
              style={{
                display: "flex",
                gap: "0",
                background: "rgba(255,255,255,0.7)",
                borderRadius: "100px",
                padding: "4px",
                border: "1px solid rgba(7,102,83,0.12)",
                flex: "0 0 auto",
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
                  padding: "10px 18px",
                  fontSize: "14px",
                  color: "#0C342C",
                  outline: "none",
                  width: "200px",
                }}
              />
              <button
                style={{
                  background: "#1f4a34",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 20px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Send
              </button>
            </div>
            <button
              onClick={onLearnMore}
              style={{
                background: "transparent",
                border: "1.5px solid #1f4a34",
                color: "#1f4a34",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 24px",
                borderRadius: "100px",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1f4a34";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#1f4a34";
              }}
            >
              Learn more about Captain
            </button>
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
              fontSize: "14px",
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
