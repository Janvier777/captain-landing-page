import { useState } from "react";
import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;
const vp = { once: true, margin: "-60px" } as const;

const plans = [
  {
    name: "Starter",
    price: "$[TBD]",
    unit: "/mo/user",
    badge: null,
    includes: "Includes",
    sections: [
      {
        title: "Core Features",
        items: [
          "Up to 5 team members",
          "10 AI workflow runs/month",
          "Basic project tracking",
          "Slack integration",
        ],
      },
    ],
  },
  {
    name: "Pro",
    price: "$[TBD]",
    unit: "/mo/user",
    badge: "MOST POPULAR",
    includes: "Everything in Starter, plus",
    sections: [
      {
        title: "Advanced Workflows",
        items: [
          "Unlimited AI workflow runs",
          "Custom workflow builder",
          "Priority task routing",
          "Advanced analytics & reporting",
        ],
      },
    ],
  },
  {
    name: "Enterprise",
    price: "$[TBD]",
    unit: "/mo/user",
    badge: null,
    includes: "Everything in Pro, plus",
    sections: [
      {
        title: "Enterprise Features",
        items: [
          "Custom permissions & security",
          "Dedicated onboarding partner",
          "SSO & audit logs",
          "Custom integrations & SLA",
        ],
      },
    ],
  },
];

export function Pricing() {
  const [selected, setSelected] = useState(1);

  return (
    <section
      id="pricing"
      style={{
        padding: "128px 32px",
        textAlign: "center",
      }}
    >
      {/* Section header */}
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
        PRICING
      </motion.p>

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
          letterSpacing: "-0.02em",
          marginBottom: "64px",
        }}
      >
        Choose the right model for you
      </motion.h2>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={vp}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
        style={{
          display: "flex",
          gap: "24px",
          maxWidth: "1100px",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {plans.map((plan, i) => {
          const isSelected = selected === i;
          return (
            <div
              key={i}
              onClick={() => setSelected(i)}
              style={{
                flex: 1,
                background: "#ffffff",
                border: "1px solid rgba(7,102,83,0.08)",
                borderRadius: "16px",
                padding: "40px 32px",
                textAlign: "left",
                position: "relative",
                cursor: "pointer",
                boxShadow: isSelected
                  ? "0 0 0 1px rgba(7,102,83,0.08), 0 8px 48px rgba(7,102,83,0.18), 0 0 24px rgba(138,173,102,0.15)"
                  : "0 2px 12px rgba(7,102,83,0.04)",
                transition: "box-shadow 0.35s ease, transform 0.25s ease",
                transform: isSelected ? "translateY(-4px)" : "translateY(0)",
              }}
            >
              {/* Plan name + badge */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "#0C342C",
                  }}
                >
                  {plan.name}
                </span>
                {plan.badge && (
                  <span
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#0C342C",
                      border: "1px solid #0C342C",
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    {plan.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div style={{ marginBottom: "28px" }}>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: 400,
                    color: "#0C342C",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ fontSize: "16px", color: "#5a8c7a" }}>{plan.unit}</span>
              </div>

              {/* CTA */}
              <a
                href="#waitlist"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "flex",
                  width: "100%",
                  background: isSelected ? "#1f4a34" : "transparent",
                  color: isSelected ? "#F5F0E8" : "#0C342C",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "14px 24px",
                  borderRadius: "8px",
                  border: isSelected ? "none" : "1px solid rgba(7,102,83,0.2)",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "28px",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  transition: "background 0.25s ease, color 0.25s ease",
                }}
              >
                Talk to our team <span style={{ fontSize: "16px" }}>›</span>
              </a>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "rgba(7,102,83,0.1)",
                  marginBottom: "28px",
                }}
              />

              {/* Includes */}
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#0C342C",
                  marginBottom: "24px",
                  fontStyle: "italic",
                }}
              >
                {plan.includes}
              </p>

              {/* Feature sections */}
              {plan.sections.map((section, si) => (
                <div key={si} style={{ marginBottom: "20px" }}>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0C342C",
                      marginBottom: "12px",
                    }}
                  >
                    {section.title}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {section.items.map((item, ii) => (
                      <div key={ii} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span style={{ color: "#076653", fontSize: "14px", flexShrink: 0, marginTop: "2px" }}>✓</span>
                        <span style={{ fontSize: "14px", color: "#4a7a6a", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
