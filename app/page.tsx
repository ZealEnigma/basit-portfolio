import Link from "next/link";
import { Fig, Measure, SectionHead, Sheet } from "@/components/drawing";

const INDEX = [
  { label: "GSP", code: "S-300", href: "/gsp", hot: true },
  { label: "Work", code: "S-400", href: "#work" },
  { label: "How I work", code: "A-200", href: "#principles" },
  { label: "Automation and AI", code: "M-500", href: "#automation" },
  { label: "About", code: "A-100", href: "#about" },
  { label: "Writing", code: "D-700", href: "#writing" },
  { label: "Contact", code: "C-800", href: "#contact" },
];

const FIGURES = [
  { value: "7.5×", label: "Enrolments, 200 to 1,500+" },
  { value: "£500k+", label: "Technology and operations budget owned" },
  { value: "20", label: "Team across engineering, data, support" },
  { value: "4", label: "Enterprise migrations delivered" },
  { value: "9", label: "Study destinations on one platform" },
  { value: "500+", label: "Partner agents trained and onboarded" },
];

const GSP_MODULES = [
  { code: "01", name: "Commission engine", sub: "Claims and payouts", hot: true },
  { code: "02", name: "Multi-destination pipeline", sub: "UK and EU flows" },
  { code: "03", name: "Agent portal (B2B)", sub: "500+ partners" },
  { code: "04", name: "Student portal (B2C)", sub: "Launching soon", hot: true },
  { code: "05", name: "Dashboard and data health", sub: "Role-curated" },
  { code: "06", name: "Permissions", sub: "Per employee" },
  { code: "07", name: "Activity log and tasks", sub: "Every action" },
  { code: "08", name: "Flow Builder and email", sub: "In build" },
];

type Work = {
  sheet: string;
  kind: string;
  title: string;
  status: string;
  red?: boolean;
  img: string;
  phone?: boolean;
  blurb: string;
  materials: string;
};

const WORKS: Work[] = [
  {
    sheet: "S-401",
    kind: "Study Now",
    title: "Monday.com operating system",
    status: "Live",
    img: "/drawing/monday-commission-board.webp",
    blurb:
      "Every module built from scratch, from leads and applications to commission claims and agent payouts, serving every department, with 500+ agents trained onto it. GSP was designed from it.",
    materials: "Monday.com, automations, Zapier",
  },
  {
    sheet: "S-402",
    kind: "Study Now",
    title: "Automation layer",
    status: "Live · In build",
    red: true,
    img: "/drawing/monday-automations.webp",
    blurb:
      "Built across the stack: Monday.com automations running commission statements, invoice documents and routing; Zapier connecting lead sources into the CRM; and now a Flow Builder inside GSP, built from scratch, with Claude calls behind a confidence gate and a human review queue.",
    materials: "Monday.com, Zapier, GSP Flow Builder, Claude API",
  },
  {
    sheet: "S-403",
    kind: "Internal",
    title: "Deposit Tracker",
    status: "Internal",
    img: "/drawing/deposit-tracker.webp",
    blurb:
      "Real-time multi-currency deposit reconciliation across 7 markets, replacing a manual process that took two people several days a month. Built after running the manual process myself to see where it broke.",
    materials: "React, Vite, Supabase, TypeScript",
  },
  {
    sheet: "S-404",
    kind: "Internal",
    title: "Employee Voting App",
    status: "Internal",
    img: "/drawing/voting-admin.webp",
    blurb:
      "Governed Employee of the Month voting across Nigeria and Global tracks, with role-based access and an admin portal HR runs without a developer.",
    materials: "Next.js, Supabase, Vercel",
  },
  {
    sheet: "S-405",
    kind: "Personal",
    title: "Shuqs",
    status: "Live",
    red: true,
    img: "/drawing/shuqs.webp",
    phone: true,
    blurb: "A task PWA with onboarding, batch actions, cross-device sync and push notifications. shuqs.vercel.app",
    materials: "React, PWA, Supabase",
  },
  {
    sheet: "S-406",
    kind: "Personal",
    title: "Isiro",
    status: "Live",
    red: true,
    img: "/drawing/isiro.webp",
    phone: true,
    blurb:
      "Personal finance built on the Dabasir allocation principle from The Richest Man in Babylon, multi-currency. isiro-sigma.vercel.app",
    materials: "React, Vite, Supabase, Vercel",
  },
];

const PRINCIPLES = [
  ["A process nobody follows is worse than no process.", "Weight of governance is not quality of governance. The test is whether people use it without being chased."],
  ["Go-live is the halfway point.", "Every change ships with a rewritten SOP, a named owner and a check months later."],
  ["Run the manual process yourself first.", "Documentation tells you how it should work. Doing it tells you where it breaks."],
  ["Holding a defensible no makes the yeses credible.", "When demand exceeds capacity, the sequence is visible and the reasoning survives argument."],
  ["Automate the thing, do not absorb it into headcount.", "Adding a person to repeatable, growing work is a decision to pay for it forever."],
  ["Half the inefficiency lives in the handoffs.", "Every task in a swimlane and every step with a named owner surfaces more than the map itself."],
  ["Build capability, do not centralise it.", "If the process only runs when I am in the room, I have built a dependency, not a system."],
];

const AUTOMATION = [
  ["What I have built", "Automations on Monday.com and Zapier that run commission, invoicing and lead routing today. Now a Flow Builder inside GSP, with Claude designed in from the start under the controls below."],
  ["How I keep it honest", "Schema-constrained outputs, a confidence threshold and a value limit. Anything below or above routes to a human review queue."],
  ["Tooling", "Claude Code daily, with custom skills I author for the team. MCP for tool connection. RAG where retrieval beats context stuffing."],
  ["Where AI is not the answer", "Anything with a correct answer and a stable rule. Partial payments and duplicate transactions are deterministic problems."],
];

const FLOW = [
  ["01", "Model output", "Claude via API"],
  ["02", "Schema constrained", "Defined fields, no free text"],
  ["03", "Confidence gate", "Threshold and value limit"],
];

const REVISIONS = [
  { rev: "F", date: "2024 · now", title: "Head of Business Systems and Operations, GSP Platform", org: "Study Now · contractual title: Digital Transformation Project Manager", current: true },
  { rev: "E", date: "2023 · 2024", title: "Operations Manager, Business Systems", org: "Study Now · Monday.com and GSP" },
  { rev: "D", date: "2021 · 2022", title: "Technical Delivery Manager", org: "Getir, Germany · founding German market team" },
  { rev: "C", date: "2020 · 2021", title: "Operations and Delivery Manager", org: "Development Hub Consulting, Germany" },
  { rev: "B", date: "2018 · 2021", title: "MA, Architectural and Cultural Heritage", org: "Hochschule Anhalt, Dessau" },
  { rev: "A", date: "2010 · 2019", title: "Architecture, then project and product management", org: "BTech Architecture, FUTA; practice in Nigeria" },
];

const CERTS = ["MBA", "PMP", "ITIL 4", "CSM", "AI for Business, Wharton", "Lean Six Sigma White Belt", "APM Member", "Monday.com Core"];

const WRITING = [
  { date: "10 Aug 2026", title: "The Eureka Moment Comes Later" },
  { date: "14 Jun 2026", title: "The AI Paradox in Modern Organizations" },
  { date: "08 May 2026", title: "Why People Feel Guilty Using AI" },
];

const SUBSTACK = "https://zealenigma.substack.com";
const CALENDLY = "https://calendly.com/azeezbasit700/30min";

export default function Home() {
  return (
    <Sheet>
      {/* Header */}
      <header style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="topline tag">
          <span style={{ fontWeight: 600 }}>Basit Adekunle Azeez</span>
          <span>Operations, business systems and transformation leader · Rev 08</span>
        </div>
        <nav aria-label="Main" className="index">
          {INDEX.map((i) => (
            <Link key={i.code} href={i.href} className={i.hot ? "hot" : undefined}>
              {i.label}
              <span className="code mono">{i.code}</span>
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero */}
      <section id="top" style={{ display: "flex", flexWrap: "wrap", gap: 48, alignItems: "flex-start" }}>
        <div style={{ flex: "999 1 560px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
          <div className="tag">Sheet A-001 · General arrangement</div>
          <h1
            className="wide"
            style={{ margin: 0, fontWeight: 800, fontSize: "clamp(52px, 8.6vw, 132px)", lineHeight: 0.9, letterSpacing: "-0.025em", textTransform: "uppercase" }}
          >
            I build systems that <span className="redline">scale.</span>
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(20px, 2vw, 26px)", lineHeight: 1.4, maxWidth: 660 }}>
            Then I stay until people actually use them. Trained as an architect in Nigeria and Germany; now I draw
            organisations, and build the platforms they run on.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="#work" className="btn solid">
              See the work
            </a>
            <a href="/Basit_Azeez_CV.pdf" download className="btn">
              Download CV
            </a>
          </div>
          <div className="mono" style={{ borderLeft: "2px solid var(--red)", paddingLeft: 12, color: "var(--red-text)", fontSize: 12, lineHeight: 1.6, maxWidth: 460 }}>
            REV 1: TWO COUNTRIES ON SPREADSHEETS.
            <br />
            REV 4: SEVEN COUNTRIES, 1,500+ ENROLMENTS, ONE PLATFORM.
          </div>
        </div>
        <figure style={{ flex: "1 1 300px", maxWidth: 380, margin: 0 }}>
          <div className="dim caption" style={{ gap: 8, marginBottom: 8 }}>
            <i />
            <span>6 yrs in operations</span>
            <i />
          </div>
          <div style={{ border: "1px solid var(--ink)", padding: 8, background: "var(--paper)", height: 440 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/drawing/portrait.webp"
              alt="Basit Azeez"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", filter: "grayscale(1) contrast(1.08)" }}
            />
          </div>
          <figcaption className="caption" style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span>Elevation 01 · the author</span>
            <span>NTS</span>
          </figcaption>
        </figure>
      </section>

      {/* Key figures */}
      <section aria-label="Key figures" className="ruled cols-190" style={{ marginTop: -40 }}>
        {FIGURES.map((f) => (
          <Measure key={f.label} value={f.value} label={f.label} />
        ))}
      </section>

      {/* GSP */}
      <section id="gsp" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHead n={1} code="S-300" title="The flagship: GSP" red />
        <div style={{ border: "2px solid var(--ink)", background: "var(--paper)", display: "flex", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 440px", padding: "clamp(22px, 3vw, 40px)", display: "flex", flexDirection: "column", gap: 20, borderRight: "1px solid var(--ink)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/drawing/gsp-logo.png" alt="Global Student Pathway" style={{ width: "min(300px, 80%)", height: "auto", display: "block" }} />
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6 }}>
              The system of record a seven-country business runs on, serving B2B and B2C alike: 500+ partner agents work
              through it daily, and a student portal for direct applicants is about to launch. Admissions across nine
              destinations, agent onboarding, reporting, and a commission engine that claims from institutions and pays
              agents and referral partners. I built every module on Monday.com from scratch first, then took GSP from
              ideation to the system of record and brought development in-house.
            </p>
            <Link href="/gsp" className="btn solid" style={{ alignSelf: "flex-start" }}>
              Open sheet S-300
            </Link>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div className="tag" style={{ padding: "10px 14px", borderBottom: "1px solid var(--ink)", fontWeight: 600 }}>
              Schedule of modules
            </div>
            {GSP_MODULES.map((g) => (
              <div key={g.code} style={{ display: "flex", gap: 14, alignItems: "baseline", padding: "11px 14px", borderBottom: "1px solid var(--hair)", color: g.hot ? "var(--red-text)" : undefined }}>
                <span className="mono" style={{ fontSize: 12, width: 34, flex: "0 0 auto" }}>
                  {g.code}
                </span>
                <span style={{ flex: 1, fontWeight: 600, fontSize: 15 }}>{g.name}</span>
                <span className="caption" style={{ color: g.hot ? undefined : "var(--muted)", textAlign: "right" }}>
                  {g.sub}
                </span>
              </div>
            ))}
          </div>
          <div style={{ flex: "1 1 100%", borderTop: "1px solid var(--ink)", padding: "clamp(14px, 2vw, 24px)" }}>
            <Fig
              src="/drawing/gsp-application.webp"
              alt="Live GSP application record with the ten-stage tracker, officers, deposit stage and messages"
              caption="Live application record: ten stages, named owners, deposit and messages in one place"
              note="More views on sheet S-300"
            />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHead n={2} code="S-400" title="What I have built" />
        <div className="ruled cols-300">
          {WORKS.map((w) => (
            <article key={w.sheet} style={{ display: "flex", flexDirection: "column" }}>
              <div
                className="hatch"
                style={{ height: 230, margin: "12px 12px 0", border: "1px solid var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: w.phone ? "14px 0" : 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={w.img}
                  alt={`${w.title} screen`}
                  loading="lazy"
                  className="shot"
                  tabIndex={0}
                  style={
                    w.phone
                      ? { height: "100%", width: "auto", display: "block", border: "1.5px solid var(--ink)", borderRadius: 14 }
                      : { width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top", display: "block" }
                  }
                />
              </div>
              <div style={{ padding: "16px 18px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                <div className="caption" style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <span>
                    {w.sheet} · {w.kind}
                  </span>
                  <span className={`stamp${w.red ? " red" : ""}`}>{w.status}</span>
                </div>
                <h3 className="wide" style={{ margin: 0, fontWeight: 700, fontSize: 21, fontStretch: "112%" }}>
                  {w.title}
                </h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#2e2e2b", flex: 1 }}>{w.blurb}</p>
                <div className="caption" style={{ color: "var(--muted)", borderTop: "1px dashed #9a9d9e", paddingTop: 8 }}>
                  Materials: {w.materials}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section id="principles" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHead n={3} code="A-200" title="How I work" />
        <div className="ruled cols-380">
          {PRINCIPLES.map(([t, line], i) => (
            <div key={t} style={{ padding: 22, display: "flex", gap: 20 }}>
              <span className="outline-num" style={{ fontSize: 56, flex: "0 0 48px" }} aria-hidden="true">
                {i + 1}
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 19, lineHeight: 1.3 }}>{t}</span>
                <span style={{ fontSize: 15, lineHeight: 1.55, color: "#2e2e2b" }}>{line}</span>
              </span>
            </div>
          ))}
          <div style={{ background: "var(--ink)", color: "var(--paper)", padding: 22, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 16 }}>
            <span className="tag" style={{ color: "#f08a84" }}>
              Note 8 · Adoption
            </span>
            <span style={{ fontSize: 19, lineHeight: 1.45, fontWeight: 600 }}>
              Most technology change fails after go-live, not before it. Adoption is the part I measure.
            </span>
          </div>
        </div>
      </section>

      {/* Automation and AI */}
      <section id="automation" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHead n={4} code="M-500" title="Automation and AI" />
        <div className="split">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: 24, alignContent: "start" }}>
            {AUTOMATION.map(([t, body]) => (
              <div key={t} style={{ borderTop: "2px solid var(--ink)", paddingTop: 12 }}>
                <div className="tag" style={{ fontWeight: 600, marginBottom: 8 }}>
                  {t}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
          <figure className="fig" style={{ padding: 22, display: "flex", flexDirection: "column" }}>
            <figcaption className="caption" style={{ fontWeight: 600, marginBottom: 16, marginTop: 0 }}>
              Detail 4.1 · How a record gets written
            </figcaption>
            {FLOW.map(([n, t, s]) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "100%", border: "1.5px solid var(--ink)", padding: "12px 14px", display: "flex", gap: 14, alignItems: "center" }}>
                  <span className="mono" style={{ fontSize: 12 }}>
                    {n}
                  </span>
                  <span>
                    <b style={{ fontSize: 15 }}>{t}</b>
                    <br />
                    <span style={{ fontSize: 13, color: "var(--muted)" }}>{s}</span>
                  </span>
                </div>
                <div style={{ width: 1.5, height: 22, background: "var(--ink)" }} aria-hidden="true" />
              </div>
            ))}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}>
              <div style={{ border: "1.5px solid var(--ink)", padding: 12 }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 600 }}>
                  PASS
                </span>
                <br />
                <b>Writes to record</b>
              </div>
              <div style={{ border: "1.5px solid var(--red)", padding: 12, color: "var(--red-text)" }}>
                <span className="mono" style={{ fontSize: 11, fontWeight: 600 }}>
                  HOLD
                </span>
                <br />
                <b>Human review queue</b>
              </div>
            </div>
            <div className="caption" style={{ marginTop: 14, color: "var(--red-text)" }}>
              Patterns seen twice become deterministic rules. The model’s surface area shrinks over time.
            </div>
          </figure>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <SectionHead n={5} code="A-100" title="Two countries to seven" />
        <div className="split">
          <div style={{ display: "flex", flexDirection: "column", gap: 18, fontSize: 18, lineHeight: 1.65 }}>
            <p className="wide" style={{ margin: 0, fontStretch: "112%", fontWeight: 600, fontSize: 24, lineHeight: 1.35 }}>
              Most growing businesses hit the same wall. The way you operated in two markets does not scale to seven.
            </p>
            <p style={{ margin: 0 }}>
              The tools that worked when everyone sat together break down across time zones. The processes that felt
              fine at 20 people become the constraint at 100.
            </p>
            <p style={{ margin: 0 }}>
              I trained as an architect in Nigeria and Germany, which is where the instinct for how systems fit together
              comes from. I moved into operations at Getir during its German expansion, then led the systems setup for a
              marketplace launch at Development Hub Consulting. I joined Study Now when it ran two countries on
              spreadsheets and built the technology and business systems function from nothing.
            </p>
          </div>
          <div>
            <div className="tag" style={{ fontWeight: 600, marginBottom: 8 }}>
              Revision schedule
            </div>
            <div className="table-wrap">
              <table style={{ minWidth: 420, fontSize: 14 }}>
                <thead>
                  <tr>
                    <th>REV</th>
                    <th>DATE</th>
                    <th>DESCRIPTION</th>
                  </tr>
                </thead>
                <tbody>
                  {REVISIONS.map((r) => (
                    <tr key={r.rev} style={{ background: r.current ? "#f3e3e1" : undefined }}>
                      <td className="mono" style={{ fontWeight: 600, color: r.current ? "var(--red-text)" : undefined }}>
                        {r.rev}
                      </td>
                      <td className="mono" style={{ fontSize: 12, whiteSpace: "nowrap", textTransform: "uppercase" }}>
                        {r.date}
                      </td>
                      <td>
                        <b>{r.title}</b>
                        <br />
                        <span style={{ fontSize: 13, color: "var(--muted)" }}>{r.org}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="ruled cols-340">
          <div style={{ padding: 24 }}>
            <div className="tag" style={{ color: "var(--muted)" }}>
              Existing · 2023
            </div>
            <div className="outline-num" style={{ fontSize: "clamp(30px, 8vw, 44px)", margin: "12px 0", lineHeight: 1 }}>
              2 COUNTRIES
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>
              Nigeria and the UK, run entirely on spreadsheets. About 200 enrolments a year, fragmented manual
              workflows, no digital infrastructure to grow into new markets.
            </p>
          </div>
          <div style={{ padding: 24 }}>
            <div className="tag" style={{ color: "var(--red-text)" }}>
              As built · 2026
            </div>
            <div className="wide" style={{ fontWeight: 800, fontSize: "clamp(30px, 8vw, 44px)", margin: "12px 0", lineHeight: 1 }}>
              7 COUNTRIES
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6 }}>
              Nine offices, 100+ staff, 500+ recruitment agents, 300,000+ student records and 1,500+ enrolments a year,
              on a stack that never became the constraint.
            </p>
          </div>
        </div>
      </section>

      {/* Toolkit, certifications, writing */}
      <section className="split">
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div>
            <div className="tag" style={{ fontWeight: 600, borderBottom: "1.5px solid var(--ink)", paddingBottom: 8, marginBottom: 10 }}>
              Toolkit
            </div>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>
              <b>Platforms</b> GSP, Monday.com, Microsoft 365, Element451, BambooHR, Jira. <b>Automation and AI</b>{" "}
              Claude API, Claude Code, MCP, Zapier, n8n, Make, Power Automate. <b>Data</b> Power BI, SQL, Python.{" "}
              <b>Build</b> React, Next.js, TypeScript, Supabase, Vercel.
            </p>
          </div>
          <div>
            <div className="tag" style={{ fontWeight: 600, borderBottom: "1.5px solid var(--ink)", paddingBottom: 8, marginBottom: 10 }}>
              Certifications
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {CERTS.map((c) => (
                <span key={c} style={{ border: "1.5px solid var(--ink)", padding: "6px 12px", fontWeight: 700, fontSize: 14 }}>
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div id="writing">
          <div className="tag" style={{ fontWeight: 600, borderBottom: "1.5px solid var(--ink)", paddingBottom: 8 }}>
            Writing · Substack
          </div>
          {WRITING.map((w) => (
            <a key={w.title} href={SUBSTACK} style={{ display: "block", padding: "14px 0", borderBottom: "1px solid var(--hair)" }}>
              <span className="caption" style={{ color: "var(--muted)" }}>
                {w.date}
              </span>
              <span className="wide" style={{ display: "block", fontStretch: "112%", fontWeight: 700, fontSize: 20, marginTop: 4 }}>
                {w.title}
              </span>
            </a>
          ))}
          <a href={SUBSTACK} className="mono" style={{ display: "inline-flex", alignItems: "center", minHeight: 44, fontSize: 13, fontWeight: 600, color: "var(--red-text)" }}>
            ALL WRITING ON SUBSTACK →
          </a>
        </div>
      </section>

      {/* Title block / contact */}
      <footer id="contact" style={{ border: "2px solid var(--ink)", display: "flex", flexWrap: "wrap", background: "var(--paper)" }}>
        <div style={{ flex: "2 1 420px", minWidth: 0, padding: "clamp(22px, 3vw, 36px)", borderRight: "1px solid var(--ink)", display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="tag">Issued for conversation</div>
          <div className="wide" style={{ fontWeight: 800, fontSize: "clamp(17px, 5.4vw, 54px)", lineHeight: 0.95, textTransform: "uppercase" }}>
            Hiring for operations, delivery or transformation?
          </div>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, maxWidth: 560 }}>
            Or you have an operational problem you want a view on. I would be glad to talk.
          </p>
        </div>
        <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column" }}>
          <div className="mono" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", fontSize: 12 }}>
            {[
              ["Client", "Hiring teams"],
              ["Location", "West Sussex · London hybrid or remote"],
              ["Right to work", "UK to 2030"],
              ["Sponsorship", "Not required"],
            ].map(([k, v], i) => (
              <div key={k} style={{ padding: "10px 12px", borderBottom: "1px solid var(--ink)", borderRight: i % 2 === 0 ? "1px solid var(--ink)" : undefined }}>
                {k.toUpperCase()}
                <br />
                <b style={{ fontFamily: "var(--font-archivo)", fontSize: 14 }}>{v}</b>
              </div>
            ))}
          </div>
          <a href={CALENDLY} className="btn solid" style={{ justifyContent: "space-between", border: 0, borderBottom: "1px solid var(--ink)", minHeight: 52 }}>
            Book 30 minutes <span aria-hidden="true">→</span>
          </a>
          <a href="mailto:azeezbasit700@gmail.com" className="mono" style={{ minHeight: 48, display: "flex", alignItems: "center", padding: "0 14px", borderBottom: "1px solid var(--ink)", fontSize: 13 }}>
            azeezbasit700@gmail.com
          </a>
          <a href="https://linkedin.com/in/basitadekunle" className="mono" style={{ minHeight: 48, display: "flex", alignItems: "center", padding: "0 14px", fontSize: 13 }}>
            linkedin.com/in/basitadekunle
          </a>
        </div>
        <div className="caption" style={{ flex: "1 1 100%", borderTop: "1px solid var(--ink)", padding: "10px 14px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span>© 2026 Basit Adekunle Azeez</span>
          <span>All dimensions verified on site</span>
        </div>
      </footer>
    </Sheet>
  );
}
