import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        background: "#f8f2ea",
        color: "#1f1b18",
        fontFamily: "Segoe UI, Arial, sans-serif",
        lineHeight: 1.7,
        minHeight: "100vh",
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
        style={{ maxWidth: 980, margin: "0 auto", padding: "32px 20px 80px" }}
      >
        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "28px 24px 18px",
            boxShadow: "0 16px 35px rgba(91, 58, 34, 0.04)",
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
            Privacy Policy
          </div>

          <h1
            style={{
              margin: "0 0 12px",
              color: "#6b1d2f",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.2,
            }}
          >
            Privacy Policy – Bolati Pustake
          </h1>

          <p
            style={{
              display: "inline-block",
              margin: "0 0 16px",
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(199, 157, 76, 0.12)",
              color: "#6b1d2f",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Effective date / Last updated: 29 September 2026
          </p>

          <p>
            Bolati Pustake (“we”, “our”, or “us”) values the privacy of
            visitors, listeners, and anyone contacting us through our website or
            related channels. This Privacy Policy explains what information we
            may collect, how it is used, and how you can contact us regarding
            privacy-related requests.
          </p>

          <div
            style={{
              background: "rgba(107, 29, 47, 0.04)",
              borderLeft: "4px solid #c79d4c",
              padding: "14px 16px",
              borderRadius: 12,
              margin: "18px 0",
            }}
          >
            This policy reflects the data and services currently present in the
            inspected codebase for this project. Based on the repository
            reviewed, the site does not currently implement a user account
            system, login flow, app purchase checkout, payment gateway
            integration, or Android app backend in this codebase. The
            information below therefore describes only the data processing that
            is actually visible in the project.
          </div>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            1. Information we collect
          </h2>
          <p>
            Depending on how you interact with Bolati Pustake, we may collect
            the following information:
          </p>
          <ul>
            <li>
              Name, email address, phone number, and message data submitted
              through the contact form.
            </li>
            <li>
              IP address, browser type, device information, operating system,
              page visits, and timestamps.
            </li>
            <li>
              Browser local storage preferences used to remember the selected
              language and visitor count state.
            </li>
          </ul>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            2. How information is used
          </h2>
          <ul>
            <li>
              To respond to user enquiries and messages submitted through the
              website contact form.
            </li>
            <li>To improve website usability and accessibility.</li>
            <li>
              To understand general site usage through standard server and
              traffic logging.
            </li>
            <li>
              To remember the language preference in the browser for a better
              experience.
            </li>
          </ul>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            3. Contact form and message processing
          </h2>
          <p>
            The website includes a contact form that sends submitted data to the
            external automation endpoint:{" "}
            <a
              href="https://automation.mysamvedana.org/webhook/bolati-pustake-web"
              target="_blank"
              rel="noreferrer"
            >
              https://automation.mysamvedana.org/webhook/bolati-pustake-web
            </a>
            .
          </p>
          <p>
            This form collects and submits the user’s name, phone number, email
            address, subject, and message for handling by the team or workflow
            configured for the website. We do not see evidence in this codebase
            of a separate customer database, login system, or app-specific CRM
            for user records.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            4. Purchases, payments, and user accounts
          </h2>
          <p>
            We have not identified any implemented audiobook purchase flow, user
            account creation flow, payment processing code, or checkout
            integration in the current project. There is no evidence in the
            repository of a payment gateway such as Stripe, Razorpay, PayPal,
            subscription billing, or stored card/UPI data management within this
            site.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            5. Third-party services
          </h2>
          <p>
            Based on the current project and source code reviewed, the only
            third-party service clearly used is:
          </p>
          <ul>
            <li>
              Website contact automation endpoint:{" "}
              <a
                href="https://automation.mysamvedana.org/webhook/bolati-pustake-web"
                target="_blank"
                rel="noreferrer"
              >
                automation.mysamvedana.org
              </a>
            </li>
          </ul>
          <p>
            The current codebase does not contain evidence of Google Analytics,
            Firebase, or similar tracking SDKs.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            6. Data storage and security
          </h2>
          <p>
            We store limited information necessary to operate the website. This
            includes browser-local preferences and the contact form data
            submitted through the dedicated automation endpoint. The website
            uses HTTPS for secure browser communication.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            7. Data retention
          </h2>
          <p>
            We retain information only as long as necessary for the purpose for
            which it was collected or as required by applicable law, contract,
            or operational need. Contact form submissions may be retained for
            communication and support purposes.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            8. Deletion of data / account removal requests
          </h2>
          <p>
            If you want to request deletion of your contact information or
            privacy-related data held by us, please contact us using the details
            below. Since the current project does not implement an account
            system or persistent user database, there is no automated
            self-service account deletion flow at this time.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            9. Children’s privacy
          </h2>
          <p>
            Our website and content are intended for general audiences. We do
            not knowingly collect personal information from children in a way
            that suggests direct marketing or profiling.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            10. User rights and privacy requests
          </h2>
          <p>
            You may request access to, correction of, or deletion of any
            personal information we hold about you.
          </p>
          <p>
            Please contact us using the details below and include a clear
            description of your request.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            11. Changes to this policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in the website, services, legal requirements, or our
            operating practices. The “Last updated” date at the top will
            indicate when the policy was revised.
          </p>
        </section>

        <section
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid rgba(107, 29, 47, 0.15)",
            borderRadius: 20,
            padding: "24px",
            marginTop: 24,
          }}
        >
          <h2 style={{ color: "#6b1d2f", margin: "0 0 12px" }}>
            12. Contact information
          </h2>
          <ul>
            <li>
              Email:{" "}
              <a href="mailto:mailtodashy@gmail.com">mailtodashy@gmail.com</a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/919960120521"
                target="_blank"
                rel="noreferrer"
              >
                +91 9960120521
              </a>
            </li>
            <li>
              Website:{" "}
              <a href="https://bolatipustake.in/">https://bolatipustake.in/</a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
