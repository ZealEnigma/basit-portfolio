"use client";
import { useState, useEffect, useRef } from "react";

/* Drop the PDF at public/Basit_Azeez_CV.pdf. */
const CV_FILE = "/Basit_Azeez_CV.pdf";

/* ── NAV ─────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Principles", href: "#principles" },
  { label: "Enablement", href: "#enablement" },
  { label: "AI", href: "#ai" },
  { label: "Built & Shipped", href: "#projects" },
  { label: "Case Study", href: "#work" },
  { label: "Contact", href: "#contact" },
];

/* ── STATS ───────────────────────────────────────────── */
const STATS = [
  {
    value: 7.5,
    decimals: 1,
    suffix: "x",
    label: "increase in annual enrolments, 200 to 1,500+",
  },
  {
    value: 500,
    decimals: 0,
    prefix: "£",
    suffix: "k+",
    label: "annual technology and operations budget owned",
  },
  {
    value: 20,
    decimals: 0,
    suffix: "",
    label: "team led across engineering, data and support",
  },
  {
    value: 4,
    decimals: 0,
    suffix: "",
    label: "enterprise platform migrations delivered",
  },
];

/* ── OPERATING PRINCIPLES ────────────────────────────── */
const PRINCIPLES = [
  {
    title: "A process nobody follows is worse than no process.",
    body: "Weight of governance is not the same as quality of governance. The test is whether people use it without being chased.",
  },
  {
    title: "Go-live is the halfway point.",
    body: "Deployment and adoption are different things, and only the second one counts. Every change ships with a rewritten SOP, a named owner and a check months later.",
  },
  {
    title: "Run the manual process yourself first.",
    body: "Documentation tells you how a process is supposed to work. Doing it tells you where it actually breaks.",
  },
  {
    title: "Holding a defensible no is what makes the yeses credible.",
    body: "When demand exceeds capacity, the sequence has to be visible and the reasoning has to survive being argued with.",
  },
  {
    title: "Automate the thing, do not absorb it into headcount.",
    body: "If work is repeatable and growing, adding a person is a decision to keep paying for it forever.",
  },
  {
    title: "Half the inefficiency lives in the handoffs.",
    body: "Which is why putting every task in a swimlane and naming an owner surfaces more than the mapping exercise itself.",
  },
  {
    title: "Build capability, do not centralise it.",
    body: "If the process only runs when I am in the room, I have built a dependency, not a system.",
  },
];

/* ── ENABLEMENT & ADOPTION ───────────────────────────── */
const ENABLEMENT = [
  {
    title: "Understand the work before redesigning it",
    body: "I sit with the people doing the job and run the process myself. What the documentation describes and what actually happens are rarely the same thing, and the gap is where the real problem lives.",
  },
  {
    title: "Design for the behaviour, not the diagram",
    body: "A redesigned process has to be lighter than the one it replaces, or people will route around it. I map end to end, name the owner for every step, and cut anything that exists because it always has.",
  },
  {
    title: "Ship with the adoption plan attached",
    body: "Rewritten SOPs, training, a named process owner, and clear guidance for the teams inheriting new responsibilities. Not a launch email.",
  },
  {
    title: "Measure whether it held",
    body: "I come back months later and check. Adoption rate, exception volume, whether the old workaround has quietly returned. If it has, that is a design problem, not a people problem.",
  },
];

/* ── AI & AUTOMATION ─────────────────────────────────── */
const AI_BLOCKS = [
  {
    title: "What I build",
    body: "Production automation calling Claude via API across compliance tracking, partner management, financial reconciliation and operational reporting. Orchestrated with n8n, Make and Power Automate. Running daily, not piloted.",
  },
  {
    title: "How I keep it honest",
    body: "Model outputs are constrained to a defined schema. Nothing writes to a record unless a confidence threshold is met. Anything below the threshold, or above a value limit, routes to a human review queue instead of posting. I review that queue weekly and convert recurring patterns into deterministic rules, so the model's surface area shrinks over time rather than growing.",
  },
  {
    title: "Tooling",
    body: "Claude Code daily in both CLI and desktop, including custom markdown skills I author so repeatable analysis and operational work runs to the same standard across the team. MCP for tool connection. RAG where retrieval beats context stuffing.",
  },
  {
    title: "Where I think AI is not the answer",
    body: "Anything with a correct answer and a stable rule. Partial payments, duplicate transactions and threshold logic are deterministic problems, and using a model for them adds cost and removes certainty. The skill is knowing which half of the problem is which.",
  },
];

/* ── CREDENTIALS ─────────────────────────────────────── */
const CREDS = [
  { label: "MBA", sub: "Quantic School of Business & Technology" },
  { label: "PMP", sub: "Project Management Institute" },
  { label: "ITIL 4 Foundation", sub: "AXELOS / PeopleCert" },
  { label: "Certified ScrumMaster", sub: "Scrum Alliance" },
  { label: "AI for Business", sub: "Wharton School, University of Pennsylvania" },
  { label: "Lean Six Sigma", sub: "Applied in process optimisation" },
];

/* ── TOOLS ───────────────────────────────────────────── */
/* Kept in step with the tools line on the CV — the site was understating the
   stack against the PDF a hiring manager downloads from the same page. */
const TOOL_GROUPS = [
  {
    group: "Platforms & systems",
    items: [
      "Microsoft 365",
      "Google Workspace",
      "Monday.com",
      "Element451",
      "BambooHR",
      "GSP (proprietary platform)",
      "Jira",
      "Confluence",
      "Asana",
      "Smartsheet",
    ],
  },
  {
    group: "AI & automation",
    items: [
      "Claude API",
      "Claude Code",
      "MCP",
      "RAG",
      "LangGraph",
      "OpenAI",
      "Microsoft Copilot",
      "n8n",
      "Make",
      "Power Automate",
      "Power Platform",
      "Zapier",
    ],
  },
  {
    group: "Data & reporting",
    items: [
      "Power BI",
      "Tableau",
      "SQL",
      "Python",
      "Excel",
      "Airtable",
      "Webhooks & APIs",
    ],
  },
  {
    group: "Engineering & modelling",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Supabase",
      "Vercel",
      "BPMN",
      "Visio",
      "Miro",
      "Revit",
    ],
  },
];

/* ── PLATFORMS & SYSTEMS ───────────────────────────────
   The headline items — enterprise systems, not small applications. No
   screenshots exist for these (internal, in some cases pre-dating a UI),
   so they render as full-width text cards ahead of the application grid. */
type SystemProject = {
  name: string;
  tag: string;
  description: string;
  tags: string[];
  status: string;
  internalNote?: boolean;
};

const SYSTEMS: SystemProject[] = [
  {
    name: "GSP Platform",
    tag: "Enterprise platform · Study Now",
    description:
      "Built from scratch as the operational system of record for the business, serving both sides: the 500+ partner and agent network on the B2B side, and direct student applicants on the B2C side. Covers admissions, agent onboarding, commissions and compliance. Taken from business requirements and HTML prototypes through external development partner coordination, architecture decisions and acceptance sign-off on every release, then brought in-house by recruiting three software engineers. Now runs nine study destinations across the UK and Europe, each with its own application flow, visa regime and compliance rules on a shared core. Currently architecting the commission engine and rolling out AQF-compliant agent onboarding across 500+ partners.",
    tags: [
      "Requirements to production",
      "Architecture",
      "Release governance",
      "Multi-destination",
      "B2B and B2C",
      "500+ partners",
    ],
    status: "Live — in-house team building next module",
    internalNote: true,
  },
  {
    name: "Monday.com Operating Infrastructure",
    tag: "Enterprise implementation · Study Now",
    description:
      "Designed and implemented Monday.com as the central operating infrastructure for the business, serving every department rather than a single team. Board architecture, workflow design, automation, permissions and reporting, with 500+ external agents trained onto it. The migration path into GSP was designed from it.",
    tags: [
      "Operating model",
      "Workflow design",
      "Automation",
      "500+ agents trained",
    ],
    status: "Live",
    internalNote: true,
  },
  {
    name: "AI Workflow Automation Suite",
    tag: "Production automation · Study Now",
    description:
      "Claude API, Claude Code, MCP, RAG, n8n, Make, Zapier and Power Automate, running across compliance, partner management, financial reconciliation, reporting and lead routing. Zapier acts as the interconnector across the wider tool stack, funnelling inbound leads into Monday.com and keeping systems in sync. Model outputs are constrained to a schema, nothing writes to a record unless a confidence threshold is met, and anything below threshold or above a value limit routes to a human review queue. Recurring patterns get converted into deterministic rules, so the model's surface area shrinks over time.",
    tags: ["Claude API", "MCP", "RAG", "n8n", "Zapier", "Power Automate"],
    status: "Live in production",
  },
  {
    name: "Custom Claude Code Skills",
    tag: "Team tooling",
    description:
      "Custom markdown skills authored for Claude Code, used in both CLI and desktop, so repeatable delivery, governance and analysis work runs to a consistent standard across the team rather than depending on one person.",
    tags: ["Claude Code", "CLI and desktop", "Team standardisation"],
    status: "In use",
  },
];

/* ── PROJECTS ────────────────────────────────────────── */
type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  link: string | null;
  image: string | null;
  imageAlt: string | null;
  orientation: "wide" | "tall";
};

/* The Employee Voting App screenshot is redacted at the source image: colleague
   names and photographs are obscured. Do not replace it with a raw capture. */
const PROJECTS: Project[] = [
  {
    name: "Deposit Tracker",
    tag: "Internal tool · Study Now",
    description:
      "Built to solve a real gap in visibility: where are student deposits sitting, across which institutions, and at what stage? A React and Supabase application tracking deposits across UK and international institutions, surfacing verified regional totals for the operations team.",
    stack: ["React", "Vite", "Supabase", "TypeScript"],
    link: null,
    image: "/tile-deposit-tracker.webp",
    imageAlt:
      "Deposit Tracker dashboard showing total deposits, per-university seat cap progress bars, and a university share breakdown.",
    orientation: "wide",
  },
  {
    name: "Employee Voting App",
    tag: "Internal tool · Study Now",
    description:
      "The HR team needed a governed, fair way to run Employee of the Month across two geographies. A React and Supabase application with separate Nigeria and Global voting tracks, role-based access control, and an admin portal the HR team configures monthly without developer involvement.",
    stack: ["React", "Supabase", "RBAC", "Admin portal"],
    link: null,
    image: "/tile-voting-app.webp",
    imageAlt:
      "Employee of the Month app showing separate Nigeria and Global winner cards. Winner names and photographs are anonymised.",
    orientation: "wide",
  },
  {
    name: "Shuqs",
    tag: "Personal project · Live",
    description:
      "A full progressive web app built for personal use — three-screen onboarding, multi-select batch actions, Supabase authentication with cross-device sync, and push notification wiring. React Native parity built alongside the web version.",
    stack: ["React", "PWA", "Supabase", "TypeScript"],
    link: "https://shuqs.vercel.app",
    image: "/tile-shuqs.webp",
    imageAlt:
      "Shuqs running on mobile, showing the quick-capture input, search, and the day's task list with swipe hints.",
    orientation: "tall",
  },
  {
    name: "Isiro",
    tag: "Personal project · Live",
    description:
      "A personal finance PWA built around the Dabasir allocation principle from George Clason's writing — a structured approach to how money is divided across obligations, savings, and goals. Built on React and Supabase, deployed on Vercel.",
    stack: ["React", "Vite", "Supabase", "Vercel"],
    link: "https://isiro-sigma.vercel.app",
    image: "/tile-isiro.webp",
    imageAlt:
      "Isiro running on mobile, showing the monthly reckoning view with debt cleared, wealth held, and this month's allocation.",
    orientation: "tall",
  },
];

/* ── CASE STUDY ──────────────────────────────────────── */
const CASE_BUILT = [
  "Monday.com implemented as central operating infrastructure — replaced Excel, every department, 500+ agents trained",
  "Proprietary GSP admissions platform — business requirements to live production",
  "Google Workspace to Microsoft 365 — full enterprise migration, zero critical downtime",
  "BambooHR implementation — 100+ person workforce, full audit readiness",
  "Monday.com to GSP migration — workflows redesigned across 7 countries",
  "AI-powered lead ecosystem (Element451 + GSP) — 50,000+ monthly interactions",
  "AI automation layer across compliance, partner management and finance, with human review gates",
  "Power BI intelligence dashboards — 300,000+ records, real-time executive visibility",
  "Release governance owned end to end after bringing production in-house",
  "IT department built from scratch — recruitment, structure, operating model",
  "Support department built from scratch — hired, structured and led as a new function",
  "OKRs and KPIs defined for the support function, with the reporting cadence to run against them",
  "Three software engineers and three data analysts recruited into capabilities that did not exist",
  "£500k+ annual technology and operations budget owned across all platforms",
];

/* ── WRITING ─────────────────────────────────────────── */
const SUBSTACK = "https://zealenigma.substack.com";

/* Real posts, newest first. Excerpts are each post's own subtitle, quoted
   verbatim — nothing here is written for the site. */
const POSTS = [
  {
    title: "The Eureka Moment Comes Later",
    excerpt: "What arrives late is the moment, not the thinking.",
    tag: "Problem solving",
    date: "10 Aug 2026",
    href: `${SUBSTACK}/p/the-eureka-moment-comes-later`,
  },
  {
    title: "The AI Paradox in Modern Organizations",
    excerpt:
      "Why individual productivity may be quietly weakening organisational intelligence.",
    tag: "Organisations",
    date: "14 Jun 2026",
    href: `${SUBSTACK}/p/the-ai-paradox-in-modern-organisations`,
  },
  {
    title: "Why People Feel Guilty Using AI",
    excerpt:
      "There is a quiet tension around AI that most people recognise but rarely admit.",
    tag: "Adoption",
    date: "8 May 2026",
    href: `${SUBSTACK}/p/why-people-feel-guilty-using-ai`,
  },
];

/* ── SCROLL REVEAL ───────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const inViewport = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // IntersectionObserver does not fire while the document is not being
    // rendered — a background tab, which is how most CV links get opened.
    // Anything already in the viewport (or reduced motion) is revealed on a
    // timer instead, so the page can never paint blank.
    if (
      reduceMotion ||
      typeof IntersectionObserver === "undefined" ||
      inViewport()
    ) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        // One-shot entrance, not a repeating scroll effect — stop watching
        // the instant it has fired once, so scrolling back up and down
        // never re-triggers it.
        obs.unobserve(entry.target);
        obs.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${Math.min(delay, 300)}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ── STAT COUNTER ────────────────────────────────────── */
function formatStat(n: number, decimals: number) {
  return n.toLocaleString("en-GB", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof STATS)[number];
  index: number;
}) {
  // Final value is the initial render, so the correct number is on screen
  // even if JS or the animation never runs.
  const [display, setDisplay] = useState(() =>
    formatStat(stat.value, stat.decimals),
  );

  // These stats now live in the hero, always above the fold — the count-up
  // runs once on mount rather than waiting on a scroll observer.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let raf = 0;
    const start = performance.now();
    const duration = 1100;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(formatStat(stat.value * eased, stat.decimals));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [stat.value, stat.decimals]);

  return (
    // Hairline between items comes from the container's divide-y; this just
    // supplies the 32px gap on top of it (first item gets none).
    <div className={index === 0 ? "" : "lg:pt-8"}>
      {/* min-height reserves space so the counter cannot shift layout */}
      <div
        className="mono text-[2rem] md:text-[2.375rem] font-semibold leading-none tracking-tight"
        style={{ color: "var(--ink)", minHeight: "2.375rem" }}
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <p className="small mt-4 max-w-[24ch]" style={{ color: "var(--muted)" }}>
        {stat.label}
      </p>
    </div>
  );
}

/* ── SECTION HEADER ──────────────────────────────────── */
function SectionHead({
  label,
  heading,
  intro,
}: {
  label: string;
  heading: string;
  intro?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <SectionEyebrow label={label} />
      <SectionHeading heading={heading} intro={intro} />
    </div>
  );
}

/* Split out so sections with a narrow intro column (Enablement, AI, Case
   Study) can render the hairline full-width across the section while the
   heading/intro text stays in the narrower column beneath it — otherwise the
   rule is only as wide as the intro column, not the section's content span. */
function SectionEyebrow({ label }: { label: string }) {
  return (
    <div className="section-head">
      <div className="eyebrow">
        <span className="label">{label}</span>
      </div>
    </div>
  );
}

function SectionHeading({
  heading,
  intro,
}: {
  heading: string;
  intro?: React.ReactNode;
}) {
  return (
    <div className="section-head">
      <h2 className="h2 max-w-[22ch]">{heading}</h2>
      {/* Colour comes from CSS so the .on-ink override can win — an inline
          style here would beat it and leave dark text on the dark section. */}
      {intro && <p className="lead intro mt-6 prose-col">{intro}</p>}
    </div>
  );
}

/* ── CONFIDENCE-THRESHOLD FLOW ───────────────────────── */
function FlowNode({
  step,
  title,
  note,
  tone = "default",
}: {
  step: string;
  title: string;
  note?: string;
  tone?: "default" | "pass" | "hold";
}) {
  const accentColour =
    tone === "pass" ? "#7FD8A4" : tone === "hold" ? "#E8B96B" : "var(--accent-on-ink)";
  return (
    <div
      className="rounded-xl p-4 flex-1 min-w-0"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        borderLeft: `2px solid ${accentColour}`,
      }}
    >
      <div
        className="mono text-[0.6875rem] uppercase tracking-[0.08em] mb-2"
        style={{ color: accentColour }}
      >
        {step}
      </div>
      <div className="text-[0.9375rem] font-semibold text-white leading-snug">
        {title}
      </div>
      {note && (
        <div className="text-[0.8125rem] mt-1 leading-snug dim">
          {note}
        </div>
      )}
    </div>
  );
}

function ConfidenceFlow() {
  return (
    <div
      className="rounded-xl p-6 md:p-8"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
    >
      <div className="label mb-6" style={{ color: "#94a8c2" }}>
        How a record actually gets written
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-stretch">
        <FlowNode step="01" title="Model output" note="Claude via API" />
        <FlowNode
          step="02"
          title="Schema constrained"
          note="Defined fields, no free text"
        />
        <FlowNode
          step="03"
          title="Confidence gate"
          note="Threshold and value limit"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <FlowNode
          step="Pass"
          title="Writes to record"
          note="Above threshold, under value limit"
          tone="pass"
        />
        <FlowNode
          step="Hold"
          title="Human review queue"
          note="Reviewed weekly; recurring patterns become deterministic rules"
          tone="hold"
        />
      </div>

      <p className="small mt-6 dim">
        The model&rsquo;s surface area shrinks over time, because every pattern I
        see twice stops being a model decision.
      </p>
    </div>
  );
}

/* ── HEADER ──────────────────────────────────────────── */
function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: a thin band across the vertical middle of the viewport
  // (rootMargin shrinks the observed area to 40–45% down) decides which
  // section is "current," rather than the top of the viewport — a section
  // reaching the middle feels like the reader's actual position.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const targets = NAV_LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    // Desktop only — a shrunken desktop nav on mobile is worse than none.
    <header
      className="site-header hidden md:block"
      data-scrolled={scrolled ? "true" : "false"}
    >
      <div className="container-page h-full flex items-center justify-between gap-8">
        <a href="#top" className="wordmark" aria-label="Back to top">
          Basit Azeez
        </a>
        <nav aria-label="Sections" className="flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              data-active={active === l.href.slice(1) ? "true" : "false"}
            >
              <span className="nav-link__label">{l.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ── BACK TO TOP ─────────────────────────────────────── */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 1600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full items-center justify-center"
      style={{
        display: show ? "flex" : "none",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--ink)",
        boxShadow: "0 6px 20px -8px rgba(0,0,0,0.5)",
      }}
    >
      <span aria-hidden="true">↑</span>
    </a>
  );
}

/* ── GRID OVERLAY (temporary — remove before shipping) ──
   Verification aid for the site-wide 12-column grid. Ctrl/Cmd+G toggles it.
   Not gated behind NODE_ENV: the preview build this is checked against runs
   `next start` (production mode), so an env gate would hide it from the one
   place it's actually needed. Strip this whole component once alignment is
   confirmed at 1440/1024/390px. */
function GridOverlay() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "g") {
        e.preventDefault();
        setShow((s) => !s);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none" aria-hidden="true">
      {/* 8px baseline grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, rgba(180,89,58,0.2) 0px, rgba(180,89,58,0.2) 1px, transparent 1px, transparent 8px)",
        }}
      />
      {/* Container edges — visible at every breakpoint */}
      <div className="container-page h-full relative">
        <div
          className="absolute inset-y-0 left-0 w-px"
          style={{ background: "rgba(180,89,58,0.5)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-px"
          style={{ background: "rgba(180,89,58,0.5)" }}
        />
        {/* 12 columns, lg+ only — matches every section's grid exactly */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-x-8 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-full"
              style={{ background: "rgba(180,89,58,0.14)" }}
            />
          ))}
        </div>
      </div>

      <div
        className="fixed bottom-4 left-4 mono text-[0.6875rem] px-3 py-2 rounded-lg"
        style={{ background: "#101e33", color: "#fff" }}
      >
        Grid overlay on — Ctrl/Cmd+G to hide
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <BackToTop />
      <GridOverlay />

      <main id="top" className="md:pt-[var(--header-h)]">
        {/* ── HERO ─────────────────────────────────────── */}
        {/* md:pt-[72px] overrides just the top of .section's padding-block
            (88px at desktop) — Tailwind's utility layer beats the components
            layer regardless of source order, so only the top changes; the
            bottom padding stays whatever .section already sets. Closes the
            nav-to-eyebrow gap from ~100px to the requested 72px without
            touching every other section's spacing. */}
        <section
          className="section md:pt-[72px]"
          style={{ background: "var(--surface)" }}
        >
          <div className="container-page">
            <div className="rise">
              <span className="label">Operations and delivery leader</span>
            </div>

            {/* items-start so the stat stack's top lands with the headline's
                top, not the section's — the stats fill what used to be an
                empty right column instead of sitting in their own band.
                Cols 1–7 content, cols 9–12 stats, col 8 the grid's own gutter. */}
            <div className="grid lg:grid-cols-12 lg:gap-x-8 items-start mt-4">
              <div className="lg:col-start-1 lg:col-span-7">
                <h1
                  className="display rise text-balance"
                  style={{ animationDelay: "60ms" }}
                >
                  I build the systems that let organisations scale, and then I
                  get people to <em>use</em> them.
                </h1>

                <p
                  className="lead rise mt-8 prose-col"
                  style={{ color: "var(--muted)", animationDelay: "120ms" }}
                >
                  Most businesses outgrow their systems before they notice. I
                  map what exists, design what should exist, build it, and stay
                  until the new way of working actually holds. Seven countries,
                  twenty people, four enterprise migrations, and a platform
                  taken from requirements to production.
                </p>

                <div
                  className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 rise"
                  style={{ animationDelay: "180ms" }}
                >
                  <a href="#projects" className="btn btn-primary">
                    See what I have built
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={CV_FILE}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    Download CV
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>

                {/* Demoted from a third equal-weight button — it doesn't need
                    to compete with the two real CTAs. */}
                <p className="rise mt-4" style={{ animationDelay: "195ms" }}>
                  <a
                    href="#principles"
                    className="prose-link small font-medium"
                  >
                    How I work
                  </a>
                </p>

                {/* A screening fact — cheaper to answer here than in a first call. */}
                <p
                  className="small mt-6 rise"
                  style={{ color: "var(--muted)", animationDelay: "220ms" }}
                >
                  London, UK · Right to work in the UK to 2030, no sponsorship
                  required
                </p>
              </div>

              {/* Stat stack — 2x2 on mobile, a single vertical column with
                  hairline dividers on desktop. */}
              <div
                className="rise grid grid-cols-2 lg:grid-cols-1 lg:col-start-9 lg:col-span-4 gap-x-6 gap-y-8 lg:gap-y-0 lg:divide-y lg:divide-[color:var(--border)]"
                style={{ animationDelay: "150ms" }}
              >
                {STATS.map((s, i) => (
                  <StatCard key={s.label} stat={s} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────── */}
        <section
          id="about"
          className="section"
          style={{ background: "var(--surface-alt)" }}
        >
          <div className="container-page grid lg:grid-cols-12 lg:gap-x-8">
            {/* Eyebrow full width so the hairline spans the whole section,
                same fix applied to Enablement/AI/Case Study. */}
            <Reveal className="lg:col-span-12">
              <SectionEyebrow label="About" />
            </Reveal>

            <div className="lg:col-span-12 grid lg:grid-cols-12 lg:gap-x-8 items-start">
            {/* Cols 1–5 — the profile card now takes 7–12, so the prose
                narrows to match (mirrors the AI section's 1–5/7–12 split). */}
            <div className="lg:col-start-1 lg:col-span-5">
              <Reveal delay={30}>
                <SectionHeading
                  heading="I build the systems that let ambitious organisations actually scale."
                  intro="Six years across international education, high-growth consumer tech and consultancy. Trained as an architect first."
                />
              </Reveal>
              <Reveal delay={60}>
                <div className="prose-col mt-8 space-y-6">
                  <p>
                    Most growing businesses hit the same wall. The way you
                    operated in two markets does not scale to seven. The tools
                    that worked when everyone sat together break down across
                    time zones. The processes that felt fine at 20 people become
                    the constraint at 100.
                  </p>
                  <p>
                    I trained as an architect in Nigeria and Germany before
                    moving into operations, which is where the instinct for how
                    systems fit together comes from. I pivoted at Getir during
                    its German expansion, then led the operational and systems
                    setup for a marketplace launch at Development Hub
                    Consulting. I joined Study Now when it ran two countries on
                    spreadsheets and built the technology and business systems
                    function from nothing: four enterprise migrations, a
                    proprietary admissions platform from requirements to
                    production, an AI automation layer, and the reporting the
                    leadership team now runs on. Seven countries, 1,500+ annual
                    enrolments, a team of 20, a £500k+ budget, and the systems
                    never became the bottleneck.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* One card, not two — photo, credentials, footer, nothing else.
                No photo — the card is credentials + footer only now, short
                enough that sticky is worth reinstating (see .profile-card in
                globals.css). */}
            <Reveal delay={120} className="lg:col-start-7 lg:col-span-6">
              <div className="profile-card">
                <span className="label">Credentials</span>
                <ul className="mt-6">
                  {CREDS.map((c) => (
                    <li key={c.label} className="profile-card__item">
                      <div className="h4">{c.label}</div>
                      <div
                        className="text-[0.8125rem] leading-snug mt-0.5"
                        style={{ color: "var(--muted)" }}
                      >
                        {c.sub}
                      </div>
                    </li>
                  ))}
                </ul>

                <div
                  className="profile-card__footer small"
                  style={{ color: "var(--muted)" }}
                >
                  London, UK · Right to work in the UK to 2030, no
                  sponsorship required
                  <div className="mt-2">
                    <a
                      href="https://linkedin.com/in/basitadekunle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="prose-link"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            </div>
          </div>
        </section>

        {/* ── OPERATING PRINCIPLES ─────────────────────── */}
        <section
          id="principles"
          className="section"
          style={{ background: "var(--surface)" }}
        >
          {/* Centred so the space sits on both sides — this section is meant to
              read as a deliberate pause, and symmetry earns that. Cols 3–10. */}
          <div className="container-page grid lg:grid-cols-12">
            <div className="lg:col-start-3 lg:col-span-8">
            <Reveal>
              <SectionHead
                label="Operating principles"
                heading="How I think about this work"
                intro="Seven things I have learned the hard way. They explain most of the decisions I make."
              />
            </Reveal>

            <ol className="mt-12">
              {PRINCIPLES.map((p, i) => (
                <Reveal
                  as="li"
                  key={p.title}
                  delay={i * 60}
                  className="py-6 border-b border-b-[color:var(--border)] last:border-b-0"
                >
                  <div className="flex gap-6 md:gap-8">
                    <span
                      className="shrink-0 leading-none select-none"
                      style={{
                        fontFamily: "var(--font-display), Georgia, serif",
                        fontSize: "2.25rem",
                        // Full opacity — at 0.55 the numeral fell under 3:1.
                        color: "var(--accent)",
                        width: "2.5rem",
                      }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div>
                      <h3
                        className="text-[1.1875rem] md:text-[1.3125rem] leading-[1.35] font-semibold"
                        style={{ color: "var(--ink)" }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="mt-2 leading-[1.7]"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
            </div>
          </div>
        </section>

        {/* ── ENABLEMENT & ADOPTION ────────────────────── */}
        <section
          id="enablement"
          className="section"
          style={{ background: "var(--surface-alt)" }}
        >
          <div className="container-page grid lg:grid-cols-12 lg:gap-x-8">
            {/* Eyebrow full width (col 1–12) so its hairline spans the whole
                section, not just the intro column. */}
            <Reveal className="lg:col-span-12">
              <SectionEyebrow label="Enablement & adoption" />
            </Reveal>

            {/* Heading cols 1–6, callout cols 7–12 — every right-hand element
                in the site starts on column 7, not 8 or 9. Proof sits beside
                the intro rather than below the four blocks: it fills the
                empty right column and front-loads the evidence. */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 lg:gap-x-8 items-start">
              <Reveal className="lg:col-start-1 lg:col-span-6">
                <SectionHeading
                  heading="The part most transformations skip"
                  intro="Most technology change fails after go-live, not before it. The system works, the training happened, and six months later people are back in the spreadsheet. Adoption is the part I am most interested in, and the part I measure."
                />
              </Reveal>

              <Reveal
                delay={60}
                className="lg:col-start-7 lg:col-span-6 lg:sticky lg:top-[96px] lg:self-start"
              >
                <div
                  className="rounded-xl p-8"
                  style={{
                    background: "var(--accent-soft)",
                    borderLeft: "2px solid var(--accent)",
                  }}
                >
                  <span className="label">In practice</span>
                  <p className="small mt-4" style={{ color: "var(--body)" }}>
                    Four enterprise platform migrations across 7 countries —
                    Excel to Monday.com with 500+ agents trained, Google
                    Workspace to Microsoft 365 with zero critical downtime,
                    BambooHR across a 100+ person workforce, and Monday.com to a
                    proprietary platform with workflows redesigned across every
                    market.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-12 grid md:grid-cols-2 gap-x-8 gap-y-8 mt-12">
              {ENABLEMENT.map((e, i) => (
                <Reveal key={e.title} delay={i * 60}>
                  <div
                    className="pt-6 h-full"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <h3 className="h4 text-[1.125rem]">{e.title}</h3>
                    <p className="mt-4 small" style={{ color: "var(--muted)" }}>
                      {e.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ── AI & AUTOMATION ──────────────────────────── */}
        <section id="ai" className="section on-ink">
          <div className="container-page grid lg:grid-cols-12 lg:gap-x-8">
            {/* Eyebrow full width so the hairline spans the whole section. */}
            <Reveal className="lg:col-span-12">
              <SectionEyebrow label="AI & automation" />
            </Reveal>
            <Reveal className="lg:col-start-1 lg:col-span-6">
              <SectionHeading
                heading="AI, specifically"
                intro="I build with AI rather than talk about it, and I am precise about what that means. Here is the actual scope."
              />
            </Reveal>

            {/* Left text cols 1–5, diagram cols 7–12 — col 6 is the grid's
                own gutter, giving the diagram room to breathe. */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 lg:gap-x-8 gap-y-8 mt-12 items-start">
              <div className="lg:col-start-1 lg:col-span-5 space-y-8">
                {AI_BLOCKS.map((b, i) => (
                  <Reveal key={b.title} delay={i * 60}>
                    <div
                      className="pt-6 hair"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      <h3 className="h4 text-[1.125rem]">{b.title}</h3>
                      <p className="mt-4 small dim">{b.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal
                delay={120}
                className="lg:col-start-7 lg:col-span-6 lg:sticky lg:top-[96px] lg:self-start"
              >
                <ConfidenceFlow />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── BUILT & SHIPPED ──────────────────────────── */}
        <section
          id="projects"
          className="section"
          style={{ background: "var(--surface)" }}
        >
          {/* Intro stays contained; the grid breaks wider. The width change is
              what creates rhythm down a long single-page site. */}
          <div className="container-page grid lg:grid-cols-12">
            <Reveal className="lg:col-start-1 lg:col-span-7">
              <SectionHead
                label="Built & shipped"
                heading="Products I have built from scratch"
                intro="Identifying the problem is half the job. When no tool exists, or the ones that do are wrong, I build. These are shipped and in use."
              />
            </Reveal>
          </div>

          <div className="container-page">
            {/* Group 1 — the headline items. Full-width and text-led, since
                these are the largest things built and no screenshots exist
                for internal enterprise systems. */}
            <Reveal>
              <div className="label mt-16">Platforms &amp; systems</div>
            </Reveal>

            <div className="flex flex-col gap-6 mt-8">
              {SYSTEMS.map((s, i) => (
                <Reveal key={s.name} delay={i * 60}>
                  {/* Two columns inside the card — at this card width a
                      single text column left ~400px of dead space on the
                      right. Left cols 1–7 (label/title/description), right
                      cols 9–12 (tags stacked, then status, then the
                      internal-only note), both top-aligned. */}
                  <div className="card p-8">
                    <div className="grid lg:grid-cols-12 lg:gap-x-12 items-start">
                      <div className="lg:col-start-1 lg:col-span-7">
                        <span className="label">{s.tag}</span>
                        <h3
                          className="mt-4 text-[1.5rem] md:text-[1.75rem] font-semibold leading-snug"
                          style={{ color: "var(--ink)" }}
                        >
                          {s.name}
                        </h3>
                        <p className="mt-4" style={{ color: "var(--body)" }}>
                          {s.description}
                        </p>
                      </div>

                      <div className="lg:col-start-9 lg:col-span-4 mt-6 lg:mt-0">
                        <div className="flex flex-col gap-2">
                          {s.tags.map((t) => (
                            <span key={t} className="chip w-fit">
                              {t}
                            </span>
                          ))}
                        </div>
                        <div
                          className="small font-medium mt-4"
                          style={{ color: "var(--ink)" }}
                        >
                          {s.status}
                        </div>
                        {s.internalNote && (
                          <div
                            className="small mt-2"
                            style={{ color: "var(--muted)" }}
                          >
                            Internal — walkthrough available on request
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Group 2 — the existing application grid, unchanged. */}
            <Reveal>
              <div className="label mt-16">Applications</div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-6 mt-8 items-stretch">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.name} delay={i * 60}>
                  <div className="card overflow-hidden flex flex-col h-full">
                    {/* One uniform strip for every card. Contain-in-a-band left
                        the phone captures marooned in dead space; a shallow
                        top-anchored crop shows the recognisable part of each UI
                        and keeps all four cards consistent. */}
                    {p.image && (
                      <div
                        className="aspect-[5/2] w-full overflow-hidden"
                        style={{
                          background: "var(--surface-alt)",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        <img
                          src={p.image}
                          alt={p.imageAlt ?? ""}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="p-8 flex flex-col flex-1">
                    <span className="label">{p.tag}</span>
                    <h3 className="h3 mt-4">{p.name}</h3>
                    <p
                      className="small mt-4 flex-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {p.stack.map((s) => (
                        <span key={s} className="chip">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-6 pt-2"
                      style={{ borderTop: "1px solid var(--border)" }}
                    >
                      {p.link ? (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="prose-link small font-medium tap-target"
                        >
                          {p.link.replace("https://", "")} ↗
                        </a>
                      ) : (
                        <span
                          className="small tap-target"
                          style={{ color: "var(--muted)" }}
                        >
                          Internal use only
                        </span>
                      )}
                    </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ───────────────────────────────── */}
        {/* Second dark section — one alone made AI feel alive and nothing else. */}
        <section id="work" className="section on-ink">
          <div className="container-page grid lg:grid-cols-12 lg:gap-x-8">
            {/* Eyebrow full width so the hairline spans the whole section. */}
            <Reveal className="lg:col-span-12">
              <SectionEyebrow label="Case study" />
            </Reveal>

            {/* Timeline sits beside the intro: it is the visual element and
                belongs at the top, not stranded underneath. Heading cols 1–6,
                timeline cols 7–12 — every right-hand element in the site
                starts on column 7, sticky since it's the shorter block. */}
            <div className="lg:col-span-12 grid lg:grid-cols-12 lg:gap-x-8 items-start">
              <Reveal className="lg:col-start-1 lg:col-span-6">
                <SectionHeading
                  heading="From spreadsheets to seven countries"
                  intro="Two countries to seven, and a systems function built from nothing."
                />
              </Reveal>

              <Reveal
                delay={60}
                className="lg:col-start-7 lg:col-span-6 lg:sticky lg:top-[96px] lg:self-start"
              >
                <div className="flex flex-col gap-4">
                  <div
                    className="mono text-[0.8125rem] px-4 py-2 rounded-lg dim"
                    style={{
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    2023 · 2 countries · spreadsheets
                  </div>
                  <div
                    aria-hidden="true"
                    className="w-px h-6 ml-6"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  />
                  <div
                    className="mono text-[0.8125rem] px-4 py-2 rounded-lg"
                    style={{
                      background: "transparent",
                      border: "1px solid var(--accent-on-ink)",
                      color: "var(--accent-on-ink)",
                    }}
                  >
                    2026 · 7 countries · full enterprise stack
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-12 grid lg:grid-cols-12 lg:gap-x-8 gap-y-8 mt-12">
              <Reveal className="lg:col-start-1 lg:col-span-6">
                <div>
                  <h3 className="h4 text-[1.125rem]">Where it started</h3>
                  <p className="small mt-4 dim">
                    Study Now operated across Nigeria and the UK, running core
                    operations entirely on spreadsheets — approximately 200
                    annual enrolments, fragmented manual workflows, and no
                    digital infrastructure to support growth into new markets.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={60} className="lg:col-start-7 lg:col-span-6">
                <div>
                  <h3 className="h4 text-[1.125rem]">Where it is now</h3>
                  <p className="small mt-4 dim">
                    Seven countries, nine offices, 100+ employees, 500+ global
                    recruitment agents, 300,000+ student records, 1,500+ annual
                    enrolments — running on a fully integrated enterprise stack
                    that scaled through every stage of expansion without the
                    systems ever becoming the constraint.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-12">
              <div
                className="mt-12 pt-8 hair"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <h3 className="h4 text-[1.125rem] mb-6">
                  What I built at Study Now
                </h3>
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {CASE_BUILT.map((item) => (
                    <li key={item} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-2 w-1 h-1 rounded-full shrink-0"
                        style={{ background: "var(--accent-on-ink)" }}
                      />
                      <span className="text-[0.9375rem] leading-[1.55] dim">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── TOOLS ────────────────────────────────────── */}
        <section
          className="section-tight"
          style={{ background: "var(--surface-alt)" }}
        >
          <div className="container-page">
            <Reveal>
              <SectionHead
                label="Tools & stack"
                heading="What I work with"
              />
            </Reveal>

            {/* auto-rows-fr equalises column heights so no group is left with
                one orphaned chip row. */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-x-8 gap-y-8 mt-12">
              {TOOL_GROUPS.map((g, i) => (
                <Reveal key={g.group} delay={i * 60} className="h-full">
                  <div className="h-full">
                    <div
                      className="label pb-4 mb-4"
                      style={{ borderBottom: "1px solid var(--border)" }}
                    >
                      {g.group}
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── WRITING ──────────────────────────────────── */}
        <section
          id="writing"
          className="section"
          style={{ background: "var(--surface)" }}
        >
          <div className="container-page grid lg:grid-cols-12">
            {/* Intro cols 3–10, centred above the cards rather than stranded left. */}
            <Reveal className="lg:col-start-3 lg:col-span-8">
              <div className="text-center">
                <div className="section-head inline-block text-left">
                  <div className="eyebrow">
                    <span className="label">Writing</span>
                  </div>
                </div>
                <h2 className="h2">Thinking in public</h2>
                <p className="lead mt-6" style={{ color: "var(--muted)" }}>
                  Operations, technology, and the messy reality of building
                  things that work.
                </p>
              </div>
            </Reveal>

            {/* Cards cols 1–12, full width. */}
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-6 mt-12 items-stretch">
              {POSTS.map((p, i) => (
                // h-full on the wrapper so the card's own h-full has a height
                // to fill — otherwise the three cards stagger.
                <Reveal key={p.title} delay={i * 60} className="h-full">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-8 h-full flex flex-col"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="label">{p.tag}</span>
                      <span
                        className="mono text-[0.75rem]"
                        style={{ color: "var(--muted)" }}
                      >
                        {p.date}
                      </span>
                    </div>
                    <h3
                      className="text-[1.0625rem] font-semibold leading-snug mt-4"
                      style={{ color: "var(--ink)" }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="small mt-4 flex-1"
                      style={{ color: "var(--muted)" }}
                    >
                      {p.excerpt}
                    </p>
                    <span
                      className="small font-medium mt-6"
                      style={{ color: "var(--link)" }}
                    >
                      Read ↗
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="lg:col-span-12">
              <div className="text-center mt-8">
                <a
                  href="https://zealenigma.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose-link small font-medium tap-target"
                >
                  All writing on Substack ↗
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CONTACT ──────────────────────────────────── */}
        <section
          id="contact"
          className="section"
          style={{ background: "var(--surface-alt)" }}
        >
          {/* Centred and narrow — a quiet close, space on both sides. Cols 4–9. */}
          <div className="container-page grid lg:grid-cols-12">
            <div className="lg:col-start-4 lg:col-span-6 text-center">
              <Reveal>
                <div className="section-head inline-block text-left">
                  <div className="eyebrow">
                    <span className="label">Contact</span>
                  </div>
                </div>
                <h2 className="h2">Get in touch</h2>
              </Reveal>

              <Reveal delay={60}>
                <p className="lead mt-6" style={{ color: "var(--muted)" }}>
                  If you are hiring for operations, delivery or transformation
                  leadership, or you have an operational problem you want a view
                  on, I would be glad to talk.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
                  <a
                    href="mailto:azeezbasit700@gmail.com"
                    className="btn btn-primary"
                  >
                    Send an email
                  </a>
                  <a
                    href="https://linkedin.com/in/basitadekunle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    LinkedIn
                  </a>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <p className="small mt-8" style={{ color: "var(--muted)" }}>
                  <a
                    href={CV_FILE}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    Download my CV
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://calendly.com/azeezbasit700/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="prose-link"
                  >
                    Book a time
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── FOOTER ───────────────────────────────────── */}
        <footer
          className="py-10"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="container-page flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="small" style={{ color: "var(--muted)" }}>
              © {new Date().getFullYear()} Basit Adekunle Azeez
            </span>
            <div className="flex flex-wrap items-center gap-x-6 -my-2">
              <a
                href="mailto:azeezbasit700@gmail.com"
                className="small tap-target"
                style={{ color: "var(--muted)" }}
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/basitadekunle"
                target="_blank"
                rel="noopener noreferrer"
                className="small tap-target"
                style={{ color: "var(--muted)" }}
              >
                LinkedIn
              </a>
              <a
                href="https://zealenigma.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="small tap-target"
                style={{ color: "var(--muted)" }}
              >
                Substack
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
