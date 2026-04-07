import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#6366f1",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              color: "white",
            }}
          >
            N
          </div>
          <span
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Nexus
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "white",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          Your Entire AI Workforce.
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            background: "linear-gradient(90deg, #6366f1, #a78bfa, #818cf8)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          One Platform.
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            textAlign: "center",
            marginTop: "32px",
            maxWidth: "800px",
            lineHeight: 1.5,
          }}
        >
          AI receptionist, website generator, chat agent, and analytics — all
          sharing one intelligent brain.
        </p>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "48px",
            color: "#71717a",
            fontSize: "18px",
          }}
        >
          <span>6 AI Agents</span>
          <span>|</span>
          <span>One Brain</span>
          <span>|</span>
          <span>5 Minutes Setup</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
