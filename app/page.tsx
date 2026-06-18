"use client";
import { useState, useEffect, useRef } from "react";

/* ── COLOURS ──────────────────────────────────────────── */
const BG   = "#030712";
const CARD = "#0d1a2d";
const BORDER = "#1e3a5f";
const BLUE  = "#3b82f6";
const CYAN  = "#60a5fa";

/* ── NAV LINKS ───────────────────────────────────────── */
const NAV_LINKS = [
  { label: "About",        href: "#about" },
  { label: "Services",     href: "#services" },
  { label: "Case Study",   href: "#work" },
  { label: "Built & Shipped", href: "#projects" },
  { label: "Writing",      href: "#writing" },
  { label: "Contact",      href: "#contact" },
];

/* ── STATS ───────────────────────────────────────────── */
const STATS = [
  { end: 6,      suffix: "x",  label: "increase in operational throughput — 200 to 1,216 annual enrolments" },
  { end: 400,    suffix: "k+", prefix: "£", label: "annual technology budget co-managed" },
  { end: 300,    suffix: ",000+", label: "student records across the platform" },
  { end: 4,      suffix: "",   label: "major enterprise platform migrations delivered" },
];

/* ── SERVICES ────────────────────────────────────────── */
const SERVICES = [
  {
    icon: "🔍",
    title: "Operations Assessment & Roadmap",
    description: "A structured diagnostic of how your business currently operates — where friction is, where work falls through the cracks, and where the highest-leverage opportunities for improvement are. You leave with a prioritised transformation roadmap and clear implementation sequence.",
    details: "1–2 weeks  |  Written assessment and roadmap",
    price: "From £1,500",
  },
  {
    icon: "🗺️",
    title: "Process Mapping & Redesign",
    description: "End-to-end mapping of your critical business processes — how work actually flows, where handoffs break down, and what a redesigned process should look like. Includes documentation, ownership definition, and an implementation plan your team can execute.",
    details: "2–3 weeks per process area",
    price: "From £2,500",
  },
  {
    icon: "⚙️",
    title: "Workflow & Tooling Implementation",
    description: "Design and deployment of the digital infrastructure that makes your redesigned processes run: tool selection and configuration, workflow automation using AI and no-code platforms, system integrations, and the training and adoption support that ensures your team uses what we build.",
    details: "3–6 weeks depending on scope",
    price: "From £3,000",
  },
  {
    icon: "🚀",
    title: "Digital Transformation Programme",
    description: "For organisations undergoing broader change — new markets, rapid growth, post-acquisition integration, or a shift from manual to digital-first operations. I work alongside your leadership team to define the roadmap, manage implementation across functions, and measure outcomes at every stage.",
    details: "Fractional or project-based",
    price: "Priced on scope",
  },
];

/* ── CREDENTIALS ─────────────────────────────────────── */
const CREDS = [
  { abbr: "MBA",  label: "MBA", sub: "Quantic School of Business & Technology" },
  { abbr: "PMP",  label: "PMP", sub: "Project Management Professional - Project Management Institute" },
  { abbr: "ITIL", label: "ITIL 4 Foundation", sub: "AXELOS / PeopleCert" },
  { abbr: "CSM",  label: "Certified ScrumMaster (CSM)", sub: "Scrum Alliance" },
  { abbr: "AI",   label: "AI for Business", sub: "Wharton School, University of Pennsylvania" },
  { abbr: "LSS",  label: "Lean Six Sigma", sub: "Applied experience in process optimisation" },
];

/* ── PROJECTS ────────────────────────────────────────── */
const PROJECTS = [
  {
    name: "Deposit Tracker",
    tag: "Internal Tool · Study Now",
    description: "Built to solve a real gap in visibility: where are student deposits sitting, across which institutions, and at what stage? A React and Supabase application tracking deposits across UK and international institutions, surfacing verified regional totals for the operations team.",
    stack: ["React", "Vite", "Supabase", "TypeScript"],
    link: null,
    icon: "📊",
  },
  {
    name: "Employee Voting App",
    tag: "Internal Tool · Study Now",
    description: "The HR team needed a governed, fair way to run Employee of the Month across two geographies. Built a React and Supabase application with separate Nigeria and Global voting tracks, role-based access control, and an admin portal the HR team configures monthly without developer involvement.",
    stack: ["React", "Supabase", "RBAC", "Admin Portal"],
    link: null,
    icon: "🗳️",
  },
  {
    name: "Shuqs",
    tag: "Personal Project · Live",
    description: "A full progressive web app built for personal use — 3-screen onboarding, multi-select batch actions, Supabase authentication with cross-device sync, and push notification wiring. React Native parity built alongside the web version.",
    stack: ["React", "PWA", "Supabase", "TypeScript"],
    link: "https://shuqs.vercel.app",
    icon: "✨",
  },
  {
    name: "Isiro",
    tag: "Personal Project · Live",
    description: "A personal finance PWA built around the Dabasir allocation principle from George Clason's writing — a structured approach to how money is divided across obligations, savings, and goals. Built on React and Supabase, deployed on Vercel.",
    stack: ["React", "Vite", "Supabase", "Vercel"],
    link: "https://isiro-sigma.vercel.app",
    icon: "💰",
  },
];

/* ── WRITING POSTS ───────────────────────────────────── */
const POSTS = [
  {
    title: "Why most process improvement efforts fail before they start",
    excerpt: "The problem is rarely the process. It is that nobody has agreed on what good actually looks like — and no amount of mapping will fix that.",
    tag: "Operations",
  },
  {
    title: "The difference between an operating system and a tool stack",
    excerpt: "Buying Monday.com does not give you an operating system. An operating system is what decides what goes into Monday.com, who owns it, and what happens when it breaks.",
    tag: "Systems Thinking",
  },
  {
    title: "On building things you were never trained to build",
    excerpt: "I studied architecture. Now I build operational infrastructure. The skills are more transferable than you might think — and less transferable than I initially assumed.",
    tag: "Career",
  },
];

/* ── COUNTER HOOK ────────────────────────────────────── */
function useCounter(end: number, duration = 1800, started = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setVal(end); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);
  return val;
}

/* ── STAT CARD ───────────────────────────────────────── */
function StatCard({ stat, started }: { stat: typeof STATS[0]; started: boolean }) {
  const val = useCounter(stat.end, 1800, started);
  return (
    <div style={{ background: CARD, border: `1px solid ${BORDER}` }}
      className="rounded-2xl p-6">
      <div className="text-3xl font-bold mb-1" style={{ color: CYAN }}>
        {stat.prefix || ""}{val}{stat.suffix}
      </div>
      <div className="text-sm leading-snug" style={{ color: "#94a3b8" }}>{stat.label}</div>
    </div>
  );
}

/* ── FADE-IN ON SCROLL ───────────────────────────────── */
function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

/* ── PARTICLES ───────────────────────────────────────── */
function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      a: Math.random() * 0.5 + 0.1,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${d.a})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />;
}

/* ── TYPEWRITER ──────────────────────────────────────── */
const FULL_TEXT = "I build the operations infrastructure that turns ambitious businesses into scalable ones.";
const BLUE_START = FULL_TEXT.indexOf("scalable ones.");

function Typewriter() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) { clearInterval(t); setDone(true); }
    }, 35);
    return () => clearInterval(t);
  }, []);
  const before = displayed.slice(0, Math.min(displayed.length, BLUE_START));
  const blue   = displayed.slice(BLUE_START);
  const inBlue = displayed.length > BLUE_START;
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8 text-white">
      {before}
      {inBlue && <span style={{ color: CYAN }}>{blue}</span>}
      {!done && <span className="animate-pulse" style={{ color: CYAN }}>|</span>}
    </h1>
  );
}

/* ── PAGE ────────────────────────────────────────────── */
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsStarted(true); }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <main style={{ background: BG, color: "#e2e8f0", fontFamily: "'Inter', system-ui, sans-serif" }} className="min-h-screen">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(3,7,18,0.85)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-bold text-lg" style={{ color: CYAN }}>Basit Azeez</a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium transition-colors" style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}>
                {l.label}
              </a>
            ))}
            <a href="https://calendly.com/azeezbasit700/30min" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ border: `1px solid ${BLUE}`, color: CYAN }}>
              Book a Call
            </a>
          </div>
          <button className="md:hidden" style={{ color: "#fff" }} onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: "rgba(3,7,18,0.97)" }}>
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium py-1" style={{ color: "#94a3b8" }} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <a href="https://calendly.com/azeezbasit700/30min" target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-center"
              style={{ border: `1px solid ${BLUE}`, color: CYAN }}
              onClick={() => setMenuOpen(false)}>
              Book a Call
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <Particles />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{ border: `1px solid ${BORDER}`, color: CYAN, background: "rgba(59,130,246,0.08)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: CYAN }} />
              The person who takes organisations from spreadsheets to enterprise scale
            </div>
            <Typewriter />
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94a3b8" }}>
              Most businesses outgrow their systems before they realise it. I come in before the wheels come off — mapping what exists, designing what should exist, and building the operational infrastructure that lets ambitious organisations actually scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/azeezbasit700/30min" target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-base text-center transition-all"
                style={{ background: BLUE, color: "#fff" }}>
                Book a free discovery call
              </a>
              <a href="#services" className="px-8 py-4 rounded-xl font-semibold text-base text-center transition-all"
                style={{ border: `1px solid ${BORDER}`, color: "#e2e8f0" }}>
                See how I work
              </a>
            </div>
          </div>
          {/* Stats */}
          <div ref={heroRef} className="grid grid-cols-2 gap-4">
            {STATS.map(s => <StatCard key={s.label} stat={s} started={statsStarted} />)}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24" style={{ background: "#050d1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <FadeIn>
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN, borderLeft: `3px solid ${CYAN}`, paddingLeft: "10px" }}>About</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-8 leading-tight">
                  I build the systems that let ambitious organisations actually scale.
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="space-y-5 leading-relaxed" style={{ color: "#94a3b8" }}>
                  <p>Most growing businesses hit the same wall. The way you operated in two markets does not scale to six. The tools that worked when everyone sat together break down across time zones. The processes that felt fine at 20 people become the constraint at 70.</p>
                  <p>I help organisations build the digital infrastructure, systems, and operating model that can actually grow with them — so expansion creates momentum rather than chaos.</p>
                  <p>My background is not a conventional operations path. I trained as an architect — five years on a BTech in Architecture in Nigeria, then relocating to Germany for a Masters in Architectural and Cultural Heritage at Hochschule Anhalt in Dessau. Architecture teaches you a specific way of thinking: how systems fit together, how constraints shape what is possible, how to translate abstract requirements into something concrete and buildable. That instinct has never left me.</p>
                  <p>The pivot into operations came at Getir, where I joined the founding team supporting their rapid expansion into the German market. From there I moved to Development Hub Consulting, leading the operational and systems setup for a marketplace platform launch. Both roles confirmed the same thing: the most valuable skill in a growing organisation is the ability to take a chaotic, undefined situation and turn it into something that works reliably at scale.</p>
                  <p>I joined Study Now when it operated across two countries on spreadsheets. Over three years I built the entire technology and business systems function from scratch: four major enterprise platform migrations, a proprietary admissions platform taken from business requirements to production, a Microsoft 365 environment replacing Google Suite, BambooHR for a 70+ person workforce, and an AI-powered lead qualification ecosystem processing 50,000+ monthly interactions. The organisation expanded from 2 countries to 6, from 200 annual enrolments to 1,216 — without the systems ever becoming the bottleneck. I led a team of 15 through that and co-managed a £400k+ annual technology budget.</p>
                </div>
              </FadeIn>
            </div>
            <div>
              <FadeIn delay={150}>
                {/* Headshot */}
                <div className="flex justify-center mb-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full" style={{ boxShadow: `0 0 60px 20px rgba(59,130,246,0.25)`, borderRadius: "50%" }} />
                    <div className="w-52 h-52 rounded-full overflow-hidden relative z-10" style={{ border: `2px solid ${BLUE}` }}>
                      <img src="/headshot.jpg.png" alt="Basit Azeez" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                {/* Credentials */}
                <div className="space-y-2">
                  {CREDS.map((c, i) => (
                    <FadeIn key={c.abbr} delay={i * 60}>
                      <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-bold"
                          style={{ background: "rgba(59,130,246,0.15)", color: CYAN, border: `1px solid ${BORDER}` }}>
                          {c.abbr}
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-white">{c.label}</div>
                          <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{c.sub}</div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-6">
                  <a href="https://linkedin.com/in/basitadekunle" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium transition-colors" style={{ color: CYAN }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Connect on LinkedIn
                  </a>
                  <span style={{ color: BORDER }}>|</span>
                  <span className="text-sm" style={{ color: "#64748b" }}>London, UK</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN }}>Services</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">How I work with clients</h2>
              <p className="max-w-2xl mx-auto text-lg" style={{ color: "#94a3b8" }}>
                Every engagement starts with understanding the problem clearly. I do not sell solutions before I understand what is actually broken.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.title} delay={i * 80}>
                <div className="rounded-2xl p-8 h-full transition-all" style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>{s.description}</p>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: `1px solid ${BORDER}` }}>
                    <span className="text-xs" style={{ color: "#475569" }}>{s.details}</span>
                    <span className="font-semibold text-sm" style={{ color: CYAN }}>{s.price}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="text-center mt-12">
              <a href="https://calendly.com/azeezbasit700/30min" target="_blank" rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-xl font-bold text-base transition-all"
                style={{ background: BLUE, color: "#fff" }}>
                Start with a free discovery call
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDY */}
      <section id="work" className="py-24" style={{ background: "#050d1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN }}>Case Study</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">What operational transformation looks like in practice</h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <div className="rounded-3xl p-8 md:p-12" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <div className="px-4 py-2 rounded-full text-sm font-semibold" style={{ background: "rgba(59,130,246,0.12)", color: CYAN, border: `1px solid ${BORDER}` }}>2023 — 2 countries · Spreadsheets</div>
                <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${BLUE}, transparent)` }} />
                <div className="px-4 py-2 rounded-full text-sm font-semibold text-white" style={{ background: BLUE }}>2026 — 7 countries · Full enterprise stack</div>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="font-bold text-lg text-white mb-3">Where it started</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>Study Now operated across Nigeria and the UK, running core operations entirely on spreadsheets — approximately 200 annual enrolments, fragmented manual workflows, and no digital infrastructure to support growth into new markets.</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-3">Where it is now</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>Seven countries, nine offices, 70+ employees, 500+ global recruitment agents, 300,000+ student records, 1,216 annual enrolments — running on a fully integrated enterprise stack that scaled seamlessly through every stage of expansion without the systems ever becoming the constraint.</p>
                </div>
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}` }} className="pt-8">
                <h3 className="font-bold text-lg text-white mb-5">What I built across three years</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Excel to Monday.com migration — first operational platform, 500+ agents trained",
                    "Proprietary GSP admissions platform — business requirements to live production",
                    "Google Suite to Microsoft 365 — full enterprise migration, zero critical downtime",
                    "BambooHR implementation — 70+ employee workforce, full audit readiness",
                    "Monday.com to GSP migration — workflows redesigned across 7 countries",
                    "AI-powered lead ecosystem (Element451 + GSP) — 50,000+ monthly interactions",
                    "Power BI intelligence dashboards — 300,000+ records, real-time executive visibility",
                    "IT department built from scratch — recruitment, structure, operating model",
                    "£400k+ annual technology budget co-managed across all platforms",
                    "15-person Support and Data team led through full transformation",
                  ].map(item => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: CYAN }}>✓</span>
                      <span className="text-xs leading-snug" style={{ color: "#94a3b8" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BUILT & SHIPPED */}
      <section id="projects" className="py-24" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN }}>Built &amp; Shipped</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">Products I have built from scratch</h2>
              <p className="max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                Identifying the problem is only half the job. When no tool exists or the existing ones do not fit, I build. These are products I have designed, built, and shipped.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.name} delay={i * 80}>
                <div className="rounded-2xl p-8 flex flex-col h-full transition-all" style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{p.icon}</div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(59,130,246,0.12)", color: CYAN }}>{p.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{p.name}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "#94a3b8" }}>{p.description}</p>
                  <div style={{ borderTop: `1px solid ${BORDER}` }} className="pt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.stack.map(s => (
                        <span key={s} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(59,130,246,0.08)", color: "#94a3b8", border: `1px solid ${BORDER}` }}>{s}</span>
                      ))}
                    </div>
                    {p.link
                      ? <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: CYAN }}>{p.link.replace("https://", "")}</a>
                      : <span className="text-sm" style={{ color: "#475569" }}>Internal use only</span>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="py-24" style={{ background: "#050d1a" }}>
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN }}>Writing</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-4">Thinking in public</h2>
              <p className="max-w-2xl text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                Operations, technology, and the messy reality of building things that work. I write about what I am learning, what I have built, and what I think practitioners get wrong.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {POSTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="rounded-2xl p-8 flex flex-col h-full transition-all" style={{ background: CARD, border: `1px solid ${BORDER}` }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full self-start mb-4" style={{ background: "rgba(59,130,246,0.12)", color: CYAN }}>{p.tag}</span>
                  <h3 className="font-bold text-base text-white leading-snug mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "#94a3b8" }}>{p.excerpt}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={200}>
            <div className="text-center">
              <a href="https://zealenigma.substack.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base transition-all"
                style={{ background: BLUE, color: "#fff" }}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Read on Substack
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: CYAN }}>Contact</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-3 mb-6">Let us talk</h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94a3b8" }}>
              I take on a small number of engagements at a time so I can do the work properly. If your operations are the constraint on your growth, I would like to hear about it. Start with a free 30-minute discovery call — no pitch, just a conversation about what is actually going on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="https://calendly.com/azeezbasit700/30min" target="_blank" rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl font-bold text-base transition-all"
                style={{ background: BLUE, color: "#fff" }}>
                Book a free 30-min call
              </a>
              <a href="mailto:azeezbasit700@gmail.com"
                className="px-10 py-4 rounded-xl font-bold text-base transition-all"
                style={{ border: `2px solid ${BORDER}`, color: "#e2e8f0" }}>
                Send an email
              </a>
              <a href="https://linkedin.com/in/basitadekunle" target="_blank" rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl font-bold text-base transition-all"
                style={{ border: `2px solid ${BORDER}`, color: "#e2e8f0" }}>
                LinkedIn
              </a>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: "📍", label: "Location", value: "London, UK" },
                { icon: "🌍", label: "Availability", value: "Remote worldwide" },
                { icon: "⏱️", label: "Response time", value: "Within 24 hours" },
              ].map(item => (
                <div key={item.label} className="rounded-xl p-6" style={{ background: CARD, border: `1px solid ${BORDER}` }}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-xs uppercase tracking-wider font-medium" style={{ color: "#64748b" }}>{item.label}</div>
                  <div className="font-semibold mt-1 text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8" style={{ background: "#020810", borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm" style={{ color: "#475569" }}>© {new Date().getFullYear()} Basit Adekunle Azeez. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/basitadekunle" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: "#475569" }}>LinkedIn</a>
            <a href="mailto:azeezbasit700@gmail.com" className="text-sm transition-colors" style={{ color: "#475569" }}>Email</a>
            <a href="https://zealenigma.substack.com" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors" style={{ color: "#475569" }}>Substack</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
