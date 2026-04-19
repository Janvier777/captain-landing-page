const headingStyle: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "clamp(28px, 4vw, 42px)",
  fontWeight: 500,
  color: "#0C342C",
  lineHeight: 1.2,
  letterSpacing: "-0.02em",
  marginBottom: "40px",
};

const bodyStyle: React.CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.85,
  color: "#2a4a3a",
  fontFamily: "'Inter', sans-serif",
};

const dividerStyle: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto",
  padding: "0 32px",
};

const dividerLineStyle: React.CSSProperties = {
  height: "1px",
  background:
    "linear-gradient(to right, transparent, rgba(7,102,83,0.18) 20%, rgba(7,102,83,0.18) 80%, transparent)",
};

function Divider() {
  return (
    <div style={dividerStyle}>
      <div style={dividerLineStyle} />
    </div>
  );
}

/* ================================================================
   Browser-window card
   ================================================================ */
function BrowserCard({
  title,
  body,
  quote,
}: {
  title: string;
  body: string;
  quote: string;
}) {
  return (
    <div
      style={{
        borderRadius: "14px",
        border: "1.5px solid rgba(7,102,83,0.12)",
        background: "#fdfcf8",
        boxShadow:
          "0 8px 32px rgba(30,60,30,0.07), 0 1.5px 6px rgba(30,60,30,0.04)",
        overflow: "hidden",
      }}
    >
      {/* Window chrome bar */}
      <div
        style={{
          height: "40px",
          background: "rgba(240,238,232,0.85)",
          borderBottom: "1px solid rgba(7,102,83,0.08)",
          display: "flex",
          alignItems: "center",
          padding: "0 16px",
          gap: "8px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(7,102,83,0.15)",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(7,102,83,0.10)",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "rgba(7,102,83,0.07)",
          }}
        />
      </div>

      {/* Content */}
      <div className="browser-card-content" style={{ padding: "32px 36px 36px" }}>
        <h3
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(20px, 2.5vw, 26px)",
            fontWeight: 500,
            color: "#0C342C",
            lineHeight: 1.3,
            marginBottom: "14px",
          }}
        >
          {title}
        </h3>
        <p style={{ ...bodyStyle, margin: "0 0 20px 0" }}>{body}</p>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "17px",
            lineHeight: 1.6,
            color: "#1a4a34",
            margin: 0,
          }}
        >
          {quote}
        </p>
      </div>
    </div>
  );
}

/* ================================================================
   Section 3: Features with browser-window cards
   ================================================================ */
function Section3({ onGoToQuiz }: { onGoToQuiz?: () => void }) {
  const features = [
    {
      title: "Team Brain — Your organization's living memory.",
      body: "Captain distills the expertise of every employee and every role into a shared brain. Team consensus becomes searchable. AI-completed tasks become reusable assets.",
      quote: "Experience no longer disappears when people do.",
    },
    {
      title: "Task Delegation & Execution — From intent to outcome.",
      body: "Hand off any task — human or AI — to Captain. Our recommendation engine matches each task to the right workflow, and the full execution happens on the platform.",
      quote: "You define the what. Captain handles the how.",
    },
    {
      title: "Alignment — Stay in sync, in real time.",
      body: "Live compliance alerts. Live progress updates. Live decision sync. When your team works with AI, no one falls behind, and nothing goes off the rails.",
      quote: "Trust, but verify.",
    },
  ];

  return (
    <section
      className="feature-section-wrap"
      style={{ maxWidth: "1160px", margin: "0 auto", padding: "100px 32px" }}
    >
      <style>{`
        @media (max-width: 899px) {
          .feature-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-col-left {
            padding-top: 0 !important;
            padding-right: 0 !important;
          }
          .feature-col-right {
            padding-top: 0 !important;
          }
        }
        @media (max-width: 767px) {
          .feature-section-wrap {
            padding: 60px 16px !important;
          }
          .browser-card-content {
            padding: 20px 20px 24px !important;
          }
        }
      `}</style>

      <div style={{ maxWidth: "780px", marginBottom: "56px" }}>
        <h2 style={headingStyle}>
          Built for teams that work with AI, not just use AI.
          <br />
          <span
            style={{
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 400,
              color: "#4a7a6a",
            }}
          >
            How Captain can help your team.
          </span>
        </h2>
      </div>

      <div
        className="feature-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Left column: Card 1 + "Take the AGTI test" button */}
        <div
          className="feature-col-left"
          style={{ paddingTop: "180px", paddingRight: "24px" }}
        >
          <BrowserCard {...features[0]} />

          {/* "Take the AGTI test" button */}
          {onGoToQuiz && (
            <div style={{ marginTop: "72px" }}>
              <button
                onClick={onGoToQuiz}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: "#0C342C",
                  background: "transparent",
                  border: "1.5px solid #0C342C",
                  borderRadius: "12px",
                  padding: "14px 28px",
                  cursor: "pointer",
                  transition: "background 0.25s, color 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#0C342C";
                  e.currentTarget.style.color = "#faf8f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#0C342C";
                }}
              >
                <span style={{ fontSize: "20px", lineHeight: 1 }}>&larr;</span>
                Take the AGTI test
              </button>
            </div>
          )}
        </div>

        {/* Right column: Card 2 + Card 3 */}
        <div
          className="feature-col-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <BrowserCard {...features[1]} />
          <BrowserCard {...features[2]} />
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   Closing transition
   ================================================================ */
function ClosingTransition() {
  return (
    <section
      style={{
        maxWidth: "780px",
        margin: "0 auto",
        padding: "60px 32px 80px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(22px, 3vw, 30px)",
          fontWeight: 500,
          color: "#0C342C",
          lineHeight: 1.3,
          marginBottom: "16px",
        }}
      >
        The teams that figure this out first will own the next decade.
      </p>
      <p
        style={{
          fontSize: "16px",
          color: "#4a7a6a",
          lineHeight: 1.6,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Join the waitlist and be among the first to operate as an AI Native
        organization.
      </p>
    </section>
  );
}

/* ================================================================
   Export
   ================================================================ */
export function EditorialSections({
  onGoToQuiz,
}: {
  onGoToQuiz?: () => void;
}) {
  return (
    <>
      <Section3 onGoToQuiz={onGoToQuiz} />
      <Divider />
      <ClosingTransition />
    </>
  );
}
