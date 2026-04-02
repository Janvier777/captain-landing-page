import { motion } from "motion/react";
import skillsAgents from "../../assets/skills-agents.mov";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-80px" } as const;

const row1 = [
  { name: "Slack",          color: "#4A154B" },
  { name: "Notion",         color: "#1C1917" },
  { name: "Google Docs",    color: "#4285F4" },
  { name: "GitHub",         color: "#1C1917" },
  { name: "Gmail",          color: "#EA4335" },
  { name: "Google Sheets",  color: "#34A853" },
  { name: "Linear",         color: "#076653" },
  { name: "Figma",          color: "#F24E1E" },
  { name: "HubSpot",        color: "#FF7A59" },
  { name: "Trello",         color: "#0052CC" },
];

const row2 = [
  { name: "Google Calendar", color: "#4285F4" },
  { name: "Google Drive",    color: "#FBBC04" },
  { name: "Canva",           color: "#00C4CC" },
  { name: "Asana",           color: "#F06A6A" },
  { name: "Jira",            color: "#0052CC" },
  { name: "Zoom",            color: "#0B5CFF" },
  { name: "Dropbox",         color: "#0061FF" },
  { name: "Airtable",        color: "#18BFFF" },
  { name: "Zapier",          color: "#FF4A00" },
  { name: "Google Meet",     color: "#00897B" },
];

function MarqueePill({ name, color }: { name: string; color: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(255,255,255,0.65)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.7)",
        borderRadius: "12px",
        padding: "10px 18px",
        boxShadow: "0 2px 12px rgba(7,102,83,0.08)",
        whiteSpace: "nowrap",
        cursor: "default",
        flexShrink: 0,
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(7,102,83,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(7,102,83,0.08)";
      }}
    >
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: color,
          flexShrink: 0,
          opacity: 0.8,
        }}
      />
      <span style={{ color: "#076653", fontSize: "13px", fontWeight: 600 }}>{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Fade edges */}
      <div
        style={{
          position: "absolute",
          inset: "0",
          left: 0,
          width: "120px",
          background: "linear-gradient(to right, rgba(245,244,239,0.95), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: "0",
          left: "auto",
          right: 0,
          width: "120px",
          background: "linear-gradient(to left, rgba(245,244,239,0.95), transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
        style={{ display: "flex", gap: "12px", width: "max-content" }}
      >
        {doubled.map((tool, i) => (
          <MarqueePill key={`${tool.name}-${i}`} name={tool.name} color={tool.color} />
        ))}
      </motion.div>
    </div>
  );
}

export function Integrations() {
  return (
    <section
      id="integrations"
      style={{ padding: "140px 0", overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 32px", marginBottom: "64px" }}>
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
          Connects to Everything
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          style={{
            color: "#076653",
            fontSize: "clamp(20px, 2.2vw, 28px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            maxWidth: "560px",
            marginBottom: "16px",
          }}
        >
          Connected to 700+{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #076653, #8AAD66)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            tools your team uses.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={vp}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          style={{
            color: "#0C342C",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "480px",
          }}
        >
          Captain works across your entire stack — capturing context and coordinating
          execution wherever your team works.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.7, ease, delay: 0.1 }}
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={vp}
        transition={{ duration: 0.6, ease, delay: 0.3 }}
        style={{
          textAlign: "center",
          color: "#076653",
          fontSize: "14px",
          marginTop: "40px",
          fontStyle: "italic",
        }}
      >
        Slack, Notion, Google Workspace, GitHub, and hundreds more via our connector platform.
      </motion.p>

      {/* Workspace settings demo video */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        style={{ marginTop: "48px", padding: "0 48px", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 16px 64px rgba(7,102,83,0.2)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <video
            src={skillsAgents}
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
