import React from "react";

const EMAIL = "mailtodashy@gmail.com";
const SUBJECT = "Bolati Pustake - Account Deletion Request";
const BODY = [
  "Hello Bolati Pustake Team,",
  "",
  "I would like to request deletion of my Bolati Pustake account and associated personal data.",
  "",
  "Registered email:",
  "Registered phone number:",
  "",
  "Thank you.",
].join("\n");

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(BODY)}`;

export default function DeleteAccount() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f2ea",
        color: "#1f1b18",
        fontFamily: "Segoe UI, Arial, sans-serif",
        lineHeight: 1.7,
      }}
    >
      <header
        style={{
          background: "rgba(107, 29, 47, 0.96)",
          color: "#fff",
          padding: "18px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontWeight: 700,
            letterSpacing: "0.02em",
          }}
        >
          <span
            style={{
              width: 40,
              height: 40,
              background: "#f8f2ea",
              color: "#6b1d2f",
              borderRadius: 12,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 14,
              fontWeight: 800,
            }}
          >
            BP
          </span>
          <span>Bolati Pustake</span>
        </div>
      </header>

      <main
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <section
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 22,
            padding: "32px 24px",
            boxShadow: "0 12px 30px rgba(71, 44, 31, 0.06)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              marginBottom: 12,
              fontSize: 12,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#c79d4c",
              fontWeight: 700,
            }}
          >
            Account management
          </div>

          <h1
            style={{
              margin: "0 0 14px",
              color: "#6b1d2f",
              fontSize: "clamp(2rem, 4vw, 2.7rem)",
              lineHeight: 1.2,
            }}
          >
            Delete Your Bolati Pustake Account
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#2b221f",
              margin: "0 0 26px",
            }}
          >
            To request deletion of your Bolati Pustake account and associated
            personal data, click the button below and send us the pre-filled
            email.
          </p>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 28px",
              borderRadius: 14,
              background: "#6b1d2f",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 10px 20px rgba(107, 29, 47, 0.2)",
              transition: "transform 0.2s ease",
            }}
          >
            Request Account Deletion
          </a>

          <p
            style={{
              marginTop: 22,
              color: "#4b403b",
              fontSize: "0.96rem",
            }}
          >
            After receiving your request, we will verify your account details
            and process the deletion request. Certain transaction or legal
            records may be retained where required by applicable law.
          </p>
        </section>
      </main>
    </div>
  );
}
