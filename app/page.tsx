"use client";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    name: "Deposit Tracker",
    tag: "Internal Tool · Study Now",
    tagColor: "bg-[#1F3864]/10 text-[#1F3864]",
    description:
      "Built to solve a real gap in visibility: where are student deposits sitting, across which institutions, and at what stage? A React/Vite and Supabase application tracking deposits across UK and international institutions, surfacing verified regional totals for the operations team.",
    stack: ["React", "Vite", "Supabase", "TypeScript"],
    link: null,
    linkLabel: null,
    icon: "📊",
  },
  {
    name: "Employee Voting App",
    tag: "Internal Tool · Study Now",
    tagColor: "bg-[#1F3864]/10 text-[#1F3864]",
    description:
      "The HR team needed a governed, fair way to run Employee of the Month across two geographies. Built a React and Supabase application with separate Nigeria and Global voting tracks, role-based access control, and an admin portal the HR team configures monthly without developer involvement.",
    stack: ["React", "Supabase", "RBAC", "Admin Portal"],
    link: null,
    linkLabel: null,
    icon: "🗳️",
  },
  {
    name: "Shuqs",
    tag: "Personal Project · Live",
    tagColor: "bg-green-50 text-green-700",
    description:
      "A full progressive web app built for personal use — 3-screen onboarding, multi-select batch actions, Supabase authentication with cross-device sync, and push notification wiring. React Native parity built alongside the web version. Named after the person who inspired it.",
    stack: ["React", "PWA", "Supabase", "React Native", "Push Notifications"],
    link: "https://shuqs.vercel.app",
    linkLabel: "shuqs.vercel.app",
    icon: "✨",
  },
  {
    name: "Isiro",
    tag: "Personal Project · Live",
    tagColor: "bg-green-50 text-green-700",
    description:
      "A personal finance PWA built around the Dabasir allocation principle from George Clason's writing — a structured approach to how money is divided across obligations, savings, and goals. Built on React/Vite and Supabase, deployed on Vercel. The most recent ship.",
    stack: ["React", "Vite", "Supabase", "Vercel", "PWA"],
    link: "https://isiro-sigma.vercel.app",
    linkLabel: "isiro-sigma.vercel.app",
    icon: "💰",
  },
];

const SERVICES = [
  {
    icon: "🔍",
    title: "Operations Assessment & Roadmap",
    description:
      "A structured diagnostic of how your business currently operates — where friction is, where work falls through the cracks, and where the highest-leverage opportunities for improvement are. You leave with a prioritised transformation roadmap and clear implementation sequence.",
    details: "1–2 weeks  |  Written assessment and roadmap",
    price: "From £1,500",
  },
  {
    icon: "🗺️",
    title: "Process Mapping & Redesign",
    description:
      "End-to-end mapping of your critical business processes — how work actually flows, where handoffs break down, and what a redesigned process should look like. Includes documentation, ownership definition, and an implementation plan your team can execute.",
    details: "2–3 weeks per process area",
    price: "From £2,500",
  },
  {
    icon: "⚙️",
    title: "Workflow & Tooling Implementation",
    description:
      "Design and deployment of the digital infrastructure that makes your redesigned processes run: tool selection and configuration, workflow automation using AI and no-code platforms, system integrations, and the training and adoption support that ensures your team uses what we build.",
    details: "3–6 weeks depending on scope",
    price: "From £3,000",
  },
  {
    icon: "🚀",
    title: "Digital Transformation Programme",
    description:
      "For organisations undergoing broader change — new markets, rapid growth, post-acquisition integration, or a shift from manual to digital-first operations. I work alongside your leadership team to define the roadmap, manage implementation across functions, and measure outcomes at every stage.",
    details: "Fractional or project-based",
    price: "Priced on scope",
  },
];

const TOOLS = [
  "Microsoft 365", "Power BI", "Element451", "BambooHR", "Monday.com",
  "GSP (Proprietary Platform)", "Claude AI", "Zapier", "n8n", "Webhooks & APIs",
  "JavaScript", "Node.js", "React", "Next.js 14", "Supabase",
  "Vercel", "Miro", "Visio", "Airtable",
];

const STATS = [
  { value: "6x", label: "increase in operational throughput — 200 to 1,216 annual enrolments" },
  { value: "£400k+", label: "annual technology budget co-managed" },
  { value: "300,000+", label: "student records across the platform" },
  { value: "4", label: "major enterprise platform migrations delivered" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1F3864] shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-white font-bold text-lg tracking-tight">
            Basit Adekunle Azeez
          </a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/azeezbasit700/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1F3864] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors"
            >
              Book a Call
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a3057] px-6 pb-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-blue-100 hover:text-white text-sm font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://calendly.com/azeezbasit700/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#1F3864] px-4 py-2 rounded-lg text-sm font-semibold text-center"
              onClick={() => setMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-[#1F3864] via-[#2E5596] to-[#3A6BC4]">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-white/10 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full mb-6 tracking-wider uppercase">
              Operations & Digital Transformation Consultant
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              I help growing businesses build the operations that match their ambitions.
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              I work with organisations to map, redesign, and implement the
              processes, workflows, and tools that let them scale without chaos.
              AI and automation are instruments — better operations is the goal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/azeezbasit700/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1F3864] px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-colors text-center shadow-lg"
              >
                Book a free discovery call
              </a>
              <a
                href="#services"
                className="border border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-colors text-center"
              >
                See how I work
              </a>
            </div>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                <div className="text-blue-200 text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">About</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1F3864] mt-2 mb-6">
                The operational wall every growing business hits.
              </h2>
              <div className="space-y-4 text-[#595959] leading-relaxed">
                <p>
                  Most growing businesses hit the same wall. The way you operated
                  in two markets does not scale to six. The tools that worked when
                  everyone sat together break down across time zones. The processes
                  that felt fine at 20 people become the constraint at 70.
                </p>
                <p>
                  I help organisations build the digital infrastructure, systems,
                  and operating model that can actually grow with them — so
                  expansion creates momentum rather than chaos.
                </p>
                <p>
                  My background is not a conventional operations path. I trained as
                  an architect — spending five years on a BTech in Architecture in
                  Nigeria, then relocating to Germany for a Masters in Architectural
                  and Cultural Heritage at Hochschule Anhalt in Dessau. Architecture
                  teaches you a specific way of thinking: how systems fit together,
                  how constraints shape what is possible, how to translate abstract
                  requirements into something concrete and buildable. That
                  instinct has never left me.
                </p>
                <p>
                  The pivot into operations came at Getir, where I joined the
                  founding team supporting their rapid expansion into the German
                  market — building processes, training teams, and designing the
                  operational infrastructure from scratch at pace. From there I
                  moved to Development Hub Consulting, leading the operational and
                  systems setup for a marketplace platform launch. Both roles
                  confirmed the same thing: the most valuable skill in a growing
                  organisation is the ability to take a chaotic, undefined situation
                  and turn it into something that works reliably at scale.
                </p>
                <p>
                  I joined Study Now when it operated across two countries on
                  spreadsheets. Over three years I built the entire technology and
                  business systems function from scratch: four major enterprise
                  platform migrations, a proprietary admissions platform taken from
                  business requirements to production, a Microsoft 365 environment
                  replacing Google Suite, BambooHR for a 70+ person workforce, and
                  an AI-powered lead qualification ecosystem processing 50,000+
                  monthly interactions. Through all of it, the organisation expanded
                  from 2 countries to 6, from 200 annual enrolments to 1,216 —
                  without the systems ever becoming the bottleneck.
                </p>
                <p>
                  I led a team of 15 through that transformation and co-managed a
                  £400k+ annual technology budget. That is the work I now bring to
                  other organisations.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {/* Credential cards */}
              {[
                { icon: "🎓", label: "MBA", sub: "Quantic School of Business & Technology" },
                { icon: "📋", label: "PMP — Project Management Professional", sub: "Project Management Institute" },
                { icon: "🔄", label: "ITIL 4 Foundation", sub: "AXELOS / PeopleCert" },
                { icon: "⚡", label: "Certified ScrumMaster (CSM)", sub: "Scrum Alliance" },
                { icon: "🤖", label: "AI for Business", sub: "Wharton School, University of Pennsylvania" },
                { icon: "🔧", label: "Lean Six Sigma", sub: "Applied experience in process optimisation" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="font-semibold text-[#1F3864] text-sm">{c.label}</div>
                    <div className="text-[#595959] text-xs mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/basitadekunle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#2E5596] text-sm font-medium hover:text-[#1F3864] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
                <span className="text-gray-300">|</span>
                <span className="text-[#595959] text-sm">London, UK</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3864] mt-2 mb-4">
              How I work with clients
            </h2>
            <p className="text-[#595959] max-w-2xl mx-auto text-lg">
              Every engagement starts with understanding the problem clearly.
              I do not sell solutions before I understand what is actually broken.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#1F3864] mb-3">{s.title}</h3>
                <p className="text-[#595959] leading-relaxed mb-6 text-sm">{s.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{s.details}</span>
                  <span className="text-[#2E5596] font-semibold text-sm">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://calendly.com/azeezbasit700/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1F3864] text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-[#2E5596] transition-colors shadow-lg"
            >
              Start with a free discovery call
            </a>
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDY */}
      <section id="work" className="py-24 bg-[#1F3864]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-blue-300 text-sm font-semibold uppercase tracking-wider">Client Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What operational transformation looks like in practice
            </h2>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12 border border-white/20">
            {/* Timeline bar */}
            <div className="flex items-center gap-4 mb-10">
              <div className="bg-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">2023 — 2 countries · Spreadsheets</div>
              <div className="flex-1 h-0.5 bg-white/30 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-white/20" />
              </div>
              <div className="bg-white rounded-full px-4 py-2 text-[#1F3864] text-sm font-semibold">2025 — 6 countries · Full enterprise stack</div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Where it started</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Study Now operated across Nigeria and the UK, running core
                  operations entirely on spreadsheets — approximately 200 annual
                  enrolments, fragmented manual workflows, and no digital
                  infrastructure to support growth into new markets.
                </p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-3">Where it is now</h3>
                <p className="text-blue-100 leading-relaxed text-sm">
                  Six countries, nine offices, 70+ employees, 100+ global agents,
                  300,000+ student records, 1,216 annual enrolments —
                  running on a fully integrated enterprise stack that scaled
                  seamlessly through every stage of expansion without the systems
                  ever becoming the constraint.
                </p>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <h3 className="text-white font-bold text-lg mb-5">What I built across three years</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Excel to Monday.com migration — first operational platform, 100+ agents trained",
                  "Proprietary GSP admissions platform — business requirements to live production",
                  "Google Suite to Microsoft 365 — full enterprise migration, zero critical downtime",
                  "BambooHR implementation — 70+ employee workforce, full audit readiness",
                  "Monday.com to GSP migration — workflows redesigned across 6 countries",
                  "AI-powered lead ecosystem (Element451 + GSP) — 50,000+ monthly interactions",
                  "Power BI intelligence dashboards — 300,000+ records, real-time executive visibility",
                  "IT department built from scratch — recruitment, structure, operating model",
                  "£400k+ annual technology budget co-managed across all platforms",
                  "13-person Support and Data team led through full transformation",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-blue-300 mt-0.5 flex-shrink-0 text-xs">✓</span>
                    <span className="text-blue-100 text-xs leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">Tools & Stack</span>
            <h2 className="text-2xl font-bold text-[#1F3864] mt-2">
              The tools I work with
            </h2>
            <p className="text-[#595959] mt-2 text-sm">
              I choose tools that fit the problem. These are the platforms I work with most frequently.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="bg-gray-50 border border-gray-200 text-[#595959] px-4 py-2 rounded-full text-sm font-medium hover:border-[#2E5596] hover:text-[#2E5596] transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">Built & Shipped</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3864] mt-2 mb-4">
              Products I have built from scratch
            </h2>
            <p className="text-[#595959] max-w-2xl text-base leading-relaxed">
              Identifying the problem is only half the job. When no tool exists or the existing ones do not fit, I build. These are products I have designed, built, and shipped — two in active internal use at Study Now, two live personal projects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{p.icon}</div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#1F3864] mb-3">{p.name}</h3>
                <p className="text-[#595959] text-sm leading-relaxed mb-6 flex-1">{p.description}</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="bg-gray-50 border border-gray-200 text-[#595959] text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#2E5596] text-sm font-semibold hover:text-[#1F3864] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {p.linkLabel}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-gray-400 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Internal use only
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WRITING */}
      <section id="writing" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">Writing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1F3864] mt-2 mb-4">
              Thinking in public
            </h2>
            <p className="text-[#595959] max-w-2xl text-base leading-relaxed">
              Operations, technology, and the messy reality of building things
              that work. I write about what I am learning, what I have built, and
              what I think practitioners get wrong.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Why most process improvement efforts fail before they start",
                excerpt:
                  "The problem is rarely the process. It is that nobody has agreed on what good actually looks like — and no amount of mapping will fix that.",
                tag: "Operations",
              },
              {
                title: "The difference between an operating system and a tool stack",
                excerpt:
                  "Buying Monday.com does not give you an operating system. An operating system is what decides what goes into Monday.com, who owns it, and what happens when it breaks.",
                tag: "Systems Thinking",
              },
              {
                title: "On building things you were never trained to build",
                excerpt:
                  "I studied architecture. Now I build operational infrastructure. The skills are more transferable than you might think — and less transferable than I initially assumed.",
                tag: "Career",
              },
            ].map((post) => (
              <div
                key={post.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#2E5596] hover:shadow-md transition-all flex flex-col"
              >
                <span className="inline-block bg-[#1F3864]/10 text-[#1F3864] text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                  {post.tag}
                </span>
                <h3 className="text-[#1F3864] font-bold text-base leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-[#595959] text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://zealenigma.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1F3864] text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-[#2E5596] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
              </svg>
              Read on Substack
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#2E5596] text-sm font-semibold uppercase tracking-wider">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3864] mt-2 mb-6">
            Let us talk
          </h2>
          <p className="text-[#595959] text-lg leading-relaxed mb-10">
            I take on a small number of engagements at a time so I can do the
            work properly. If your operations are the constraint on your growth,
            I would like to hear about it. Start with a free 30-minute discovery
            call — no pitch, just a conversation about what is actually going on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/azeezbasit700/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F3864] text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-[#2E5596] transition-colors shadow-lg"
            >
              Book a free 30-min call
            </a>
            <a
              href="mailto:azeezbasit700@gmail.com"
              className="border-2 border-[#1F3864] text-[#1F3864] px-10 py-4 rounded-xl font-bold text-base hover:bg-[#1F3864] hover:text-white transition-colors"
            >
              Send an email
            </a>
            <a
              href="https://linkedin.com/in/basitadekunle"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#1F3864] text-[#1F3864] px-10 py-4 rounded-xl font-bold text-base hover:bg-[#1F3864] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: "📍", label: "Location", value: "London, UK" },
              { icon: "🌍", label: "Availability", value: "Remote worldwide" },
              { icon: "⏱️", label: "Response time", value: "Within 24 hours" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-[#595959] uppercase tracking-wider font-medium">{item.label}</div>
                <div className="text-[#1F3864] font-semibold mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1F3864] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Basit Adekunle Azeez. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com/in/basitadekunle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white text-sm transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:azeezbasit700@gmail.com"
              className="text-blue-300 hover:text-white text-sm transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
