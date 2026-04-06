import "./animations.css";
import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { ParticleHero } from "./components/ParticleHero";
import { DemoVideo } from "./components/DemoVideo";
import { Features } from "./components/Features";
import { Pricing } from "./components/Pricing";
import { WaitlistCTA } from "./components/WaitlistCTA";
import { Footer } from "./components/Footer";

// ── Blob config ──────────────────────────────────────────────────────────────
const blobs = [
  {
    style: {
      top: "-10vh",
      right: "-8vw",
      width: "55vw",
      height: "55vw",
      background:
        "radial-gradient(circle, rgba(138,173,102,0.12) 0%, rgba(138,173,102,0.12) 50%, transparent 75%)",
      filter: "blur(80px)",
      opacity: 0.6,
      animationName: "floatA",
      animationDuration: "25s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
    },
  },
  {
    style: {
      top: "30vh",
      left: "-12vw",
      width: "38vw",
      height: "38vw",
      background:
        "radial-gradient(circle, rgba(7,102,83,0.12) 0%, rgba(138,173,102,0.08) 55%, transparent 80%)",
      filter: "blur(70px)",
      opacity: 0.5,
      animationName: "floatB",
      animationDuration: "18s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "-5s",
    },
  },
  {
    style: {
      top: "110vh",
      left: "-10vw",
      width: "45vw",
      height: "45vw",
      background:
        "radial-gradient(circle, rgba(138,173,102,0.14) 0%, rgba(7,102,83,0.06) 55%, transparent 80%)",
      filter: "blur(80px)",
      opacity: 0.5,
      animationName: "floatC",
      animationDuration: "22s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "-8s",
    },
  },
  {
    style: {
      top: "230vh",
      right: "-8vw",
      width: "36vw",
      height: "36vw",
      background:
        "radial-gradient(circle, rgba(138,173,102,0.12) 0%, rgba(138,173,102,0.08) 55%, transparent 80%)",
      filter: "blur(72px)",
      opacity: 0.5,
      animationName: "floatA",
      animationDuration: "20s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "-12s",
    },
  },
  {
    style: {
      bottom: "10vh",
      left: "50%",
      transform: "translateX(-50%)",
      width: "52vw",
      height: "52vw",
      background:
        "radial-gradient(circle, rgba(138,173,102,0.16) 0%, rgba(7,102,83,0.1) 40%, transparent 72%)",
      filter: "blur(80px)",
      opacity: 0.55,
      animationName: "floatB",
      animationDuration: "24s",
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDelay: "-3s",
    },
  },
];

// ── Thin section divider ─────────────────────────────────────────────────────
function SectionDivider() {
  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 32px",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(7,102,83,0.2) 20%, rgba(255,255,255,0.6) 50%, rgba(7,102,83,0.2) 80%, transparent)",
        }}
      />
    </div>
  );
}

// ── Sticky scroll progress bar ─────────────────���─────────────────────────────
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 200,
        background: "rgba(212,224,23,0.3)",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress * 100}%`,
          background: "linear-gradient(to right, #3a7a18, #72b830)",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, #faf8f2 0%, #f5f7f0 25%, #f8faf4 50%, #f0f6e8 75%, #edf4e2 100%)",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* ── Scroll progress bar ── */}
      <ScrollProgress />

      {/* ── Floating animated blobs ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {blobs.map((b, i) => (
          <div key={i} className="blob" style={b.style as React.CSSProperties} />
        ))}
      </div>

      {/* ── Page content ── */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <main>
          <ParticleHero />

          <DemoVideo />
          <SectionDivider />
          <Features />
          <SectionDivider />
          <Pricing />
          <WaitlistCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
