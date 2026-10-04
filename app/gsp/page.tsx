import type { Metadata } from "next";
import Link from "next/link";
import { Fig, Measure, SectionHead, Sheet } from "@/components/drawing";

export const metadata: Metadata = {
  title: "GSP Platform | Basit Azeez",
  description:
    "GSP, the system of record a seven-country education business runs on: admissions across nine destinations, agent and student portals, commission, email automation and a Flow Builder in build.",
};

const STATS = [
  { value: "9", label: "Study destinations, UK and Europe, one shared core" },
  { value: "500+", label: "Agent and partner organisations onboarding" },
  { value: "300,000+", label: "Student records held" },
  { value: "1 → 9", label: "Destinations added in six months" },
];

const ROLE = [
  ["Product owner", "Requirements, prioritisation and acceptance sign-off on every release."],
  ["Designer", "Interactive HTML prototypes for every module before a line of production code."],
  ["Architect", "Data flow, stage logic, permissions and the commission model."],
  ["Team builder", "Moved delivery in-house by recruiting the engineers who now build it."],
];

const PHASES = [
  {
    label: "Phase 1 · Built from scratch on Monday.com",
    red: false,
    items: [
      ["Enrolled boards, by intake", "Claiming commission from universities and pathway providers, with a Finance View that set the column standard."],
      ["Agents Commission board", "Paying agents and referral partners for the students they brought in."],
    ],
  },
  {
    label: "Phase 2 · Native in GSP",
    red: true,
    items: [
      ["Commission Claims", "Institution claims, grouped by university or admission provider, with currency following the institution’s region and the invoicing company set per institution."],
      ["Agents and Partners", "Agents, who see their claims in the GSP agent portal, and referral partners, who have no login but must still be paid and stay visible."],
    ],
  },
];

const FLOWS = [
  {
    label: "Flow A · Claiming from institutions",
    red: false,
    steps: [
      ["Enters from CAS Review", "Enrolment is the default view. Drop Out with CAS never enters, since it can never be commissioned."],
      ["Mirrors the record", "Student, course, intake and year stay in step with the Application and Institution modules."],
      ["Calculates, stays editable", "Any value can be rewritten; every dependent figure recalculates."],
      ["Invoices correctly", "Invoicing company and currency follow the institution."],
      ["Settles in place", "Part and full payments on the claim itself, exported for Finance in one download."],
    ],
  },
  {
    label: "Flow B · Paying agents and referral partners",
    red: true,
    steps: [
      ["Statement issued", "What is paid and what is owed, per partner."],
      ["Accept, dispute or reject", "With reasons, modelled on the agent contract flow."],
      ["Reissued until settled", "A revised statement replaces the email thread."],
      ["Half or full payment", "Kept simple, with no approval chain, since the flow runs both ways."],
      ["Visible on both sides", "Agents see Expected, Pending, Paid and Under Review in their portal."],
    ],
  },
];

const RULES = [
  ["One source of truth", "Always referenceable, always true to the state of the application."],
  ["Built for both directions", "Ready for a future institution interface so universities can see claim status too."],
  ["Finance sees what it needs", "Including the CAS, linked from each claim."],
  ["GSP’s own language", "List or grouped by institution, with filters that match the rest of the platform."],
];

type Status = "LIVE" | "ROLLING OUT" | "LAUNCHING SOON" | "IN BUILD" | "SPECIFIED";
const MODULES: { ref: string; title: string; blurb: string; scope: string; status: Status }[] = [
  { ref: "01", title: "Commission engine", blurb: "Institution claims and partner payouts on one record.", scope: "Commission Claims and Agents and Partners pages; statements; part payments; multi-currency.", status: "IN BUILD" },
  { ref: "02", title: "Multi-destination pipeline", blurb: "One engine running distinct UK and EU flows.", scope: "CAS route and Final Acceptance Review route; conditional stages that appear only when needed; agent-handled visas waive compliance substages.", status: "LIVE" },
  { ref: "03", title: "Agent portal and onboarding", blurb: "The B2B side: agents onboard, submit and track applications.", scope: "500+ partner organisations; agents manage their own pipelines; segment filter keeps agent and Study Now leads apart.", status: "ROLLING OUT" },
  { ref: "04", title: "Student portal", blurb: "The B2C front door: students apply and track directly.", scope: "Both UK and EU pipelines; Course Finder, shortlist and quick apply; action prompts raised by staff; fees inside each application.", status: "LAUNCHING SOON" },
  { ref: "05", title: "Dashboard and data health", blurb: "Role-curated reporting across nine destinations.", scope: "Ready, Complete and Unassigned per officer; unattributed applications surfaced; deposits and enrolments as separate targets.", status: "SPECIFIED" },
  { ref: "06", title: "Permissions and stage settings", blurb: "Access set per employee, not per role group.", scope: "Permissions matrix across the pipeline; mandatory fields configured per stage; sensitive actions held by named people.", status: "SPECIFIED" },
  { ref: "07", title: "Activity log", blurb: "One append-only store of every action.", scope: "Staff, agents, students and automation; field, previous and new value on one line; additive and feature-flagged.", status: "SPECIFIED" },
  { ref: "08", title: "Tasks and notifications", blurb: "A board people actually use.", scope: "Today, Tomorrow and Later; assign, snooze and complete from the card; reminders and an 08:30 digest.", status: "SPECIFIED" },
  { ref: "09", title: "Lead attribution and upload-and-match", blurb: "Campaign data out of spreadsheets.", scope: "Any subset of four attribution fields in one pass; rows matched and confirmed before commit; university sheets mapped to GSP courses.", status: "IN BUILD" },
  { ref: "10", title: "Email automation and inbox", blurb: "Admin-configured stage emails.", scope: "Sender and recipients per template; log of sent and unfired emails; replies threaded onto the record.", status: "IN BUILD" },
  { ref: "11", title: "Help Center and messaging oversight", blurb: "Support content and compliance.", scope: "Videos, articles and FAQs by audience; WhatsApp captured to the record under UK GDPR.", status: "SPECIFIED" },
  { ref: "12", title: "Flow Builder", blurb: "GSP’s own automation layer, built from scratch.", scope: "Triggers on stage and field changes; actions across email, tasks and records; Claude steps behind a confidence gate and a human review queue.", status: "IN BUILD" },
];
const STATUS_COLOUR: Record<Status, string> = {
  LIVE: "var(--ink)",
  "ROLLING OUT": "var(--ink)",
  "LAUNCHING SOON": "var(--red-text)",
  "IN BUILD": "var(--red-text)",
  SPECIFIED: "var(--muted)",
};

const METHOD = [
  ["Run it live", "Study the live instance and the people using it first."],
  ["Agree in conversation", "Settle the enhancement set before any artefact."],
  ["Prototype in HTML", "Clickable and realistic, iterated until the shape is obvious."],
  ["Write the brief", "Data points, queries and acceptance checks for the developers."],
  ["Sign off and measure", "Accept the release, then check months later that it held."],
];

function DetailIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="split" style={{ gap: 32 }}>
      <h3 className="wide" style={{ margin: 0, fontStretch: "112%", fontWeight: 700, fontSize: "clamp(26px, 2.8vw, 36px)", lineHeight: 1.15 }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65 }}>{body}</p>
    </div>
  );
}

const col = { display: "flex", flexDirection: "column" as const };

export default function GspPage() {
  return (
    <Sheet>
      <header className="topline tag" style={{ alignItems: "center" }}>
        <Link href="/" className="btn" style={{ minHeight: 44, padding: "0 14px", fontSize: 12 }}>
          <span aria-hidden="true">←</span> A-001 · Home
        </Link>
        <span>Sheet S-300 · GSP Platform · Study Now · 2024 to now</span>
      </header>

      {/* Hero */}
      <section style={{ ...col, gap: 30 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/drawing/gsp-logo.png" alt="Global Student Pathway" style={{ width: "min(360px, 80%)", height: "auto", display: "block" }} />
        <h1 className="wide" style={{ margin: 0, fontWeight: 800, fontSize: "clamp(40px, 6.4vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.025em", textTransform: "uppercase", maxWidth: 1150 }}>
          The system of record a seven-country business <span className="redline">runs on.</span>
        </h1>
        <p style={{ margin: 0, fontSize: "clamp(18px, 1.8vw, 22px)", lineHeight: 1.55, maxWidth: 820 }}>
          A proprietary admissions, partner and finance platform I took from ideation and HTML prototypes to production,
          then brought in-house. It serves both sides of the business: B2B, where 500+ partner agents submit and track
          their students’ applications and see their commission, and B2C, where students apply directly, with a student
          portal about to launch. Counsellors, compliance and finance work from the same record, and a new destination is
          configuration rather than a rebuild.
        </p>
        <div className="ruled cols-190">
          {STATS.map((s) => (
            <Measure key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* Live system */}
      <section aria-label="GSP live" style={{ ...col, gap: 20, marginTop: -40 }}>
        <Fig
          heavy
          src="/drawing/gsp-application.webp"
          alt="Live GSP application record with the ten-stage tracker, officers, deposit stage and compose panel"
          caption="View 0.1 · Live application record: ten stages, named owners, deposit and messages in one place"
          note="Live system · test record"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20 }}>
          <Fig src="/drawing/gsp-pipeline.webp" alt="Live GSP applications pipeline grouped by stage" caption="View 0.2 · Applications pipeline, grouped by stage" />
          <Fig src="/drawing/gsp-settings.webp" alt="GSP settings: permissions, checklists, mandatory fields and agent tiers" caption="View 0.3 · Settings: permissions, checklists, mandatory fields, agent tiers. Configuration, not code" />
        </div>
      </section>

      {/* Role */}
      <section style={{ ...col, gap: 24 }}>
        <SectionHead n={1} code="S-301" title="My role" />
        <div className="ruled cols-240">
          {ROLE.map(([t, l]) => (
            <div key={t} style={{ padding: 20, ...col, gap: 8 }}>
              <span className="tag" style={{ fontWeight: 600 }}>
                {t}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55 }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Commission */}
      <section id="commission" style={{ ...col, gap: 24 }}>
        <SectionHead n={2} code="S-310" title="Commission" red stamp="GSP module in build" />
        <div style={{ border: "2px solid var(--red)", background: "var(--paper)", padding: "clamp(20px, 3vw, 36px)", ...col, gap: 28 }}>
          <DetailIntro
            title="Money in from institutions. Money out to partners. One source of truth."
            body="Commission is where an education business either knows its numbers or reconstructs them in Excel and email. I built it twice: first from scratch on Monday.com, alongside every other module the business ran on there, and now as a native GSP module that reads straight from the application, so a claim is always true to the state of the student it belongs to."
          />
          <div className="ruled cols-340">
            {PHASES.map((ph) => (
              <div key={ph.label} style={{ padding: 20, ...col, gap: 14 }}>
                <div className="tag" style={{ fontWeight: 600, color: ph.red ? "var(--red-text)" : undefined }}>
                  {ph.label}
                </div>
                {ph.items.map(([t, l]) => (
                  <div key={t} style={{ border: "1.5px solid var(--ink)", padding: 14 }}>
                    <b style={{ fontSize: 16 }}>{t}</b>
                    <div style={{ fontSize: 14, lineHeight: 1.55, marginTop: 4, color: "#2e2e2b" }}>{l}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 20 }}>
            <Fig src="/drawing/monday-commission-board.webp" alt="Agents Commission board on Monday.com, grouped by claim stage" caption="Phase 1 as built · Agents Commission board: request to verified to invoiced to paid" />
            <Fig src="/drawing/monday-automations.webp" alt="Automations on the Agents Commission board" caption="Phase 1 as built · 22 automations: statements, invoice documents, routing, notifications" />
          </div>
          {FLOWS.map((fl) => (
            <div key={fl.label}>
              <div className="tag" style={{ fontWeight: 600, marginBottom: 10 }}>
                {fl.label}
              </div>
              <ol className="ruled cols-190" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {fl.steps.map(([t, l], i) => (
                  <li key={t} style={{ padding: 16, ...col, gap: 6 }}>
                    <span className="mono" style={{ fontSize: 12, fontWeight: 600, color: fl.red ? "var(--red-text)" : undefined }}>
                      0{i + 1} →
                    </span>
                    <b style={{ fontSize: 15 }}>{t}</b>
                    <span style={{ fontSize: 13, lineHeight: 1.5, color: "#2e2e2b" }}>{l}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))", gap: "0 28px" }}>
            {RULES.map(([t, l]) => (
              <div key={t} style={{ borderTop: "2px solid var(--ink)", paddingTop: 10, marginTop: 6 }}>
                <b style={{ fontSize: 15 }}>{t}</b>
                <div style={{ fontSize: 14, lineHeight: 1.55, color: "#2e2e2b", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student portal */}
      <section id="portal" style={{ ...col, gap: 24 }}>
        <SectionHead n={3} code="S-340" title="Student portal" stamp="Launching soon" />
        <DetailIntro
          title="The B2C front door, built on the same record staff and agents use."
          body="Students see exactly what the CRM knows: every application across the UK and EU pipelines on its own stepper, the actions their team has asked of them, and updates from institutions kept separate from tasks. Designed from a live sweep of GSP so the portal never shows a stage or a status the platform does not hold."
        />
        <Fig heavy src="/drawing/portal-applications.webp" alt="GSP student portal, Applications page with three applications across the UK and EU pipelines" caption="View 3.1 · Applications: UK and EU pipelines, one stepper each" note="Prototype v8 · test data" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 24 }}>
          <Fig src="/drawing/portal-home.webp" alt="Student portal home with action-needed requests and updates" caption="View 3.2 · Home: actions raised by staff, updates from institutions" />
          <Fig src="/drawing/portal-courses.webp" alt="Student portal course finder across nine destinations" caption="View 3.3 · Courses: search, shortlist and quick apply" />
        </div>
      </section>

      {/* Email automation */}
      <section id="email" style={{ ...col, gap: 24 }}>
        <SectionHead n={4} code="S-350" title="Email automation" stamp="In build" />
        <DetailIntro
          title="From hard-coded rules to emails an admin can configure, and audit."
          body="Every stage email used to live in code. Now an admin builds it inside GSP’s existing Add Template steps: what it says, the moment it fires, who receives it and from which sender. Before saving, the template states in one plain sentence what it will do and is tested against sample applications, and a delivery log records what was sent, what fell back, and what did not fire and why."
        />
        <Fig heavy src="/drawing/email-review.webp" alt="Edit Template, Review and test step, with a plain-language summary of what the template will do" caption="View 4.1 · Review and test: the template explains itself before it is saved" note="Prototype · sample data" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: 24 }}>
          <Fig src="/drawing/email-templates.webp" alt="Templates grouped by the pipeline moment that sends them" caption="View 4.2 · Templates grouped by the moment that sends them" />
          <Fig src="/drawing/email-log.webp" alt="Delivery log showing sent, not fired and failed emails with reasons" caption="View 4.3 · Delivery log: sent, not fired, failed, with the reason" />
        </div>
      </section>

      {/* Modules */}
      <section style={{ ...col, gap: 24 }}>
        <SectionHead n={5} code="S-320" title="Every module" />
        <div className="table-wrap">
          <table style={{ minWidth: 760 }}>
            <thead>
              <tr>
                <th style={{ width: 60 }}>REF</th>
                <th style={{ width: 300 }}>MODULE</th>
                <th>SCOPE</th>
                <th style={{ width: 150 }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {MODULES.map((m) => (
                <tr key={m.ref}>
                  <td className="mono" style={{ fontSize: 12 }}>
                    {m.ref}
                  </td>
                  <td>
                    <b style={{ fontSize: 16 }}>{m.title}</b>
                    <div style={{ fontSize: 14, lineHeight: 1.5, color: "#2e2e2b", marginTop: 4 }}>{m.blurb}</div>
                  </td>
                  <td style={{ fontSize: 14, lineHeight: 1.6 }}>{m.scope}</td>
                  <td>
                    <span className="stamp" style={{ color: STATUS_COLOUR[m.status] }}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Method */}
      <section style={{ ...col, gap: 24 }}>
        <SectionHead n={6} code="S-330" title="How each module gets made" />
        <ol className="ruled cols-190" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {METHOD.map(([t, l], i) => (
            <li key={t} style={{ padding: 18, ...col, gap: 8 }}>
              <span className="outline-num" style={{ fontSize: 40 }} aria-hidden="true">
                {i + 1}
              </span>
              <b style={{ fontSize: 16 }}>{t}</b>
              <span style={{ fontSize: 14, lineHeight: 1.55, color: "#2e2e2b" }}>{l}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Title block */}
      <footer style={{ border: "2px solid var(--ink)", display: "flex", flexWrap: "wrap", background: "var(--paper)" }}>
        <div style={{ flex: "2 1 420px", minWidth: 0, padding: "clamp(22px, 3vw, 36px)", borderRight: "1px solid var(--ink)", ...col, gap: 14 }}>
          <div className="tag">B2B and B2C · Walkthrough on request</div>
          <div className="wide" style={{ fontWeight: 800, fontSize: "clamp(17px, 5.4vw, 48px)", lineHeight: 0.95, textTransform: "uppercase" }}>
            Used by staff, partner agents and, soon, students.
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55 }}>
            I am glad to walk through the platform, the prototypes and the thinking behind any module on a call.
          </p>
        </div>
        <div style={{ flex: "1 1 280px", ...col }}>
          <a href="https://calendly.com/azeezbasit700/30min" className="btn solid" style={{ flex: 1, minHeight: 64, justifyContent: "space-between", border: 0 }}>
            Book a walkthrough <span aria-hidden="true">→</span>
          </a>
          <Link href="/" className="mono" style={{ minHeight: 52, display: "flex", alignItems: "center", padding: "0 18px", fontSize: 13, fontWeight: 600 }}>
            BACK TO SHEET A-001
          </Link>
        </div>
      </footer>
    </Sheet>
  );
}
