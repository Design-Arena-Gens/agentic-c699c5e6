import { ArrowRight, CheckCircle2, ShieldCheck, Sparkle, Users2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Unified Operations",
    description:
      "Bring scheduling, dispatch, and client oversight together with live dashboards that highlight what needs your attention next.",
    icon: "scheduling",
  },
  {
    title: "Human-Centered Automation",
    description:
      "Automate the repetitive busywork while keeping approvals collaborative through chat-style nudges and contextual tasks.",
    icon: "automation",
  },
  {
    title: "Insightful Reporting",
    description:
      "Transform raw activity into beautifully simple reports, budget forecasts, and performance stories your teams can act on.",
    icon: "analytics",
  },
];

const workflows = [
  {
    title: "Capture",
    description:
      "Collect time, tasks, and field updates from any device with guided forms and offline sync.",
  },
  {
    title: "Coordinate",
    description:
      "Assign work with drag-and-drop clarity, align internal teams, and loop in clients when milestones are ready.",
  },
  {
    title: "Deliver",
    description:
      "Approve deliverables faster with smart checklists, audit-ready trails, and proactive alerts.",
  },
];

const testimonials = [
  {
    quote:
      "NEXIFY gave us a single source of truth. Our field teams finally feel seen, and clients love the transparency.",
    name: "Meera Sharma",
    role: "Operations Director, Horizon Projects",
  },
  {
    quote:
      "The handcrafted workflow feels bespoke to our agency. We ship work faster without losing the human touch.",
    name: "Aditya Patel",
    role: "Founder, Vertex Field Services",
  },
];

const badges = [
  "Field & Office Harmony",
  "Context-Aware Tasks",
  "Client Spaces",
  "Real-Time Insights",
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "scheduling":
      return (
        <Users2 className="h-5 w-5 text-mint-600 transition-transform duration-300 group-hover:scale-110" />
      );
    case "automation":
      return (
        <Sparkle className="h-5 w-5 text-mint-600 transition-transform duration-300 group-hover:scale-110" />
      );
    case "analytics":
      return (
        <ShieldCheck className="h-5 w-5 text-mint-600 transition-transform duration-300 group-hover:scale-110" />
      );
    default:
      return null;
  }
}

function DeviceShowcase() {
  return (
    <div className="relative mx-auto mt-10 max-w-xl rounded-[var(--radius-lg)] bg-white/70 p-5 shadow-[var(--shadow-soft)] backdrop-blur">
      <div className="absolute -left-12 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full bg-mint-200/40 blur-3xl sm:block" />
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-mint-400/20 blur-3xl" />
      <div className="flex flex-col gap-4 rounded-[var(--radius-md)] border border-mint-100 bg-gradient-to-br from-white via-white to-mint-100/40 p-6">
        <div className="flex items-center justify-between rounded-3xl border border-mint-200/70 bg-mint-50/60 px-4 py-2 text-xs font-medium text-mint-600">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-mint-500" />
            Live Workforce Overview
          </span>
          <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-mint-600">
            Syncing
          </span>
        </div>

        <div className="grid gap-3 rounded-[26px] bg-white/90 p-4 shadow-inner shadow-mint-100/40">
          <div className="flex items-start justify-between rounded-2xl border border-mint-100/70 bg-mint-50/60 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-mint-200/40">
            <div>
              <p className="text-sm font-medium text-mint-700">Daily Standup</p>
              <p className="text-xs text-slate-600">
                Field ops, logistics, and finance aligned in one channel.
              </p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-mint-500" />
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl border border-mint-100/70 bg-white/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-mint-200/50">
            <div>
              <p className="text-sm font-medium text-slate-800">
                Client Handoff • Mirae Estates
              </p>
              <p className="text-xs text-slate-500">
                12 documents reviewed · Feedback captured
              </p>
            </div>
            <span className="rounded-full bg-mint-100 px-3 py-1 text-[11px] font-semibold text-mint-600">
              2h ahead
            </span>
          </div>
          <div className="rounded-2xl border border-mint-100/70 bg-white/95 p-4 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-mint-200/60">
            <p className="text-xs uppercase tracking-[0.2em] text-mint-500">Pulse</p>
            <div className="mt-2 flex items-end gap-2">
              <div className="flex-1">
                <div className="h-24 rounded-2xl bg-gradient-to-t from-mint-200 to-mint-400" />
              </div>
              <div className="flex-1">
                <div className="h-16 rounded-2xl bg-gradient-to-t from-mint-200 to-mint-500" />
              </div>
              <div className="flex-1">
                <div className="h-20 rounded-2xl bg-gradient-to-t from-mint-200 to-mint-300" />
              </div>
              <div className="flex-1">
                <div className="h-28 rounded-2xl bg-gradient-to-t from-mint-200 to-mint-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full flex-col gap-4 rounded-[22px] border border-mint-100/70 bg-white/90 p-4 shadow-lg shadow-mint-100/50 sm:flex-row">
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-mint-600">
            Mobile Pulse
          </p>
          <div className="rounded-2xl border border-mint-100/60 bg-mint-50/70 p-4">
            <p className="text-sm font-semibold text-slate-700">
              Workforce at a Glance
            </p>
            <div className="mt-4 flex gap-3">
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white/80 p-3">
                <span className="text-2xl font-semibold text-mint-600">48</span>
                <span className="text-[11px] text-slate-500">On Route</span>
              </div>
              <div className="flex flex-1 flex-col items-center rounded-2xl bg-white/80 p-3">
                <span className="text-2xl font-semibold text-mint-600">12</span>
                <span className="text-[11px] text-slate-500">Pending Review</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2 rounded-[20px] border border-mint-100/70 bg-white/80 p-4">
          <p className="flex items-center gap-2 text-xs font-medium text-slate-600">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-mint-500" />{" "}
            Smart Nudges
          </p>
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl border border-mint-100/60 bg-mint-50/90 p-3 text-xs text-slate-600">
              Riya completed audit notes for Lotus Tower. Share summary with client?
              <div className="mt-2 flex gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-mint-500">
                <button className="rounded-full bg-white px-3 py-1.5 shadow-sm transition-colors hover:bg-mint-100">
                  Approve
                </button>
                <button className="rounded-full border border-mint-200 px-3 py-1.5 transition-colors hover:bg-mint-100">
                  Edit Note
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-mint-100/60 bg-white/90 p-3 text-xs text-slate-600">
              Client feedback captured for Stellar Villas. 4 action items created.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-mint-200/60 blur-3xl" />
        <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-mint-300/40 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-white/60 blur-3xl" />
      </div>
      <header className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-8 sm:px-10">
        <nav className="flex items-center justify-between rounded-full border border-mint-100 bg-white/80 px-6 py-3 shadow-[0_20px_45px_rgba(23,73,63,0.08)] backdrop-blur">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-mint-200/80 shadow-sm shadow-mint-200/60">
              <Image
                src="/logo.svg"
                alt="NEXIFY mark"
                width={20}
                height={20}
                className="opacity-80"
              />
            </div>
            <span className="font-display text-lg tracking-tight text-deep-forest">
              NEXIFY
            </span>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a className="transition-colors hover:text-mint-600" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-mint-600" href="#features">
              Platform
            </a>
            <a className="transition-colors hover:text-mint-600" href="#workflow">
              Workflow
            </a>
            <a className="transition-colors hover:text-mint-600" href="#contact">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-deep-forest px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-mint-600"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </nav>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-16 pt-14 sm:px-10 sm:pt-20">
        <section className="relative overflow-hidden rounded-[var(--radius-lg)] border border-mint-100 bg-white/80 px-6 py-12 shadow-[var(--shadow-soft)] backdrop-blur sm:px-12 sm:py-16">
          <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-full bg-mint-200/40 blur-2xl md:block" />
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center gap-6">
              <div className="inline-flex items-center gap-2 self-start rounded-full border border-mint-200 bg-mint-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-mint-600">
                Handcrafted by IT SOUQ LLP
              </div>
              <h1 className="font-display text-4xl tracking-tight text-ink sm:text-5xl lg:text-6xl">
                The handcrafted way to orchestrate people, clients, and progress.
              </h1>
              <p className="max-w-xl text-lg text-slate-600 sm:text-xl">
                Simplify management. Empower your workforce. NEXIFY brings clarity to
                every handoff so teams work like a living, breathing organism.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-deep-forest px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:bg-mint-600"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-mint-200 bg-white/70 px-6 py-3 text-sm font-semibold text-mint-700 transition-all hover:-translate-y-0.5 hover:border-mint-400 hover:bg-mint-100/80"
                >
                  Explore the platform
                </a>
              </div>
              <div className="flex flex-wrap gap-3 pt-2 text-xs font-medium text-slate-500 sm:gap-4">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-mint-100 bg-mint-50 px-3 py-1 transition-colors hover:border-mint-300 hover:bg-mint-100/80"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <DeviceShowcase />
          </div>
        </section>

        <section
          id="about"
          className="mt-16 grid gap-10 rounded-[var(--radius-lg)] border border-mint-100 bg-white/70 p-10 shadow-[var(--shadow-soft)] lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              About NEXIFY
            </h2>
            <p className="text-lg text-slate-600">
              NEXIFY was designed from the ground up to close the gap between field
              and office contexts. Developed by IT SOUQ LLP, it blends handcrafted
              design with purposeful automation so teams can move fluidly while
              clients feel continuously informed.
            </p>
            <p className="text-base text-slate-600">
              What started as an internal toolkit to harmonize distributed crews has
              grown into a platform trusted for orchestrating daily operations. We
              believe progress should feel human—every interface is intentionally
              crafted with organic curves, soft light, and micro-interactions that
              build trust.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3 rounded-[22px] border border-mint-100 bg-mint-50/80 px-4 py-3 text-sm text-slate-600 shadow-sm">
                <Sparkle className="h-4 w-4 text-mint-600" />
                Thoughtful design language
              </div>
              <div className="flex items-center gap-3 rounded-[22px] border border-mint-100 bg-white/90 px-4 py-3 text-sm text-slate-600 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-mint-600" />
                Audit-ready transparency
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[var(--radius-md)] border border-mint-100 bg-gradient-to-br from-mint-50 to-white/90 p-8 shadow-inner shadow-mint-200/40">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint-600">
                Impact
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-4xl font-semibold text-deep-forest">32%</p>
                  <p className="text-sm text-slate-600">
                    Faster project handoffs across hybrid teams.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-semibold text-deep-forest">4.8/5</p>
                  <p className="text-sm text-slate-600">
                    Client satisfaction once NEXIFY spaces go live.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[22px] border border-mint-200 bg-white/80 p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-600">
                “Developed by IT SOUQ LLP, NEXIFY bridges the gap between field and
                office with intuitive rituals that make every day operations feel
                calm, deliberate, and collaborative.”
              </p>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mt-16 rounded-[var(--radius-lg)] border border-mint-100 bg-white/70 p-10 shadow-[var(--shadow-soft)]"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint-600">
                The Platform
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                A studio for people-first operations
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-600">
              Every module is woven together through shared context—meaning updates
              ripple automatically where they matter most without forcing teams into
              rigid processes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="group flex h-full flex-col gap-4 rounded-[26px] border border-mint-100 bg-white/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-mint-300 hover:bg-mint-50/80 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-mint-200 bg-mint-50/80">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3 className="text-lg font-semibold text-deep-forest">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="workflow"
          className="mt-16 grid gap-10 rounded-[var(--radius-lg)] border border-mint-100 bg-white/70 p-10 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex flex-col gap-5">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint-600">
              Flow of Work
            </p>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Shape your own rhythm, keep teams aligned
            </h2>
            <p className="text-base text-slate-600">
              NEXIFY adapts to your rituals—coordinating teams across locations while
              surfacing the next best action through subtle cues, not noisy alerts.
            </p>
            <div className="space-y-4">
              {workflows.map((step, index) => (
                <div
                  key={step.title}
                  className="group flex gap-4 rounded-[24px] border border-mint-100 bg-white/80 p-4 transition-all duration-500 hover:-translate-y-1 hover:border-mint-300 hover:bg-mint-50/70"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-mint-100 text-sm font-semibold text-mint-600 shadow-inner shadow-mint-200/60">
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-deep-forest">
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 rounded-[var(--radius-md)] border border-mint-100 bg-gradient-to-br from-mint-50/90 to-white/60 p-8 shadow-inner shadow-mint-200/50">
            <div className="rounded-[22px] border border-mint-100 bg-white/90 p-6 shadow-md shadow-mint-100/50">
              <p className="text-xs uppercase tracking-[0.3em] text-mint-500">
                Field Snapshot
              </p>
              <div className="mt-4 grid gap-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-mint-50/70 px-4 py-3">
                  <span className="font-medium text-slate-700">
                    Site visits completed
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-mint-600">
                    +18%
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                  <span className="font-medium text-slate-700">Approvals pending</span>
                  <span className="text-xs text-slate-500">4 awaiting review</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3">
                  <span className="font-medium text-slate-700">
                    Client delight score
                  </span>
                  <span className="text-xs text-mint-600">97 / 100</span>
                </div>
              </div>
            </div>
            <div className="rounded-[22px] border border-mint-100 bg-white/85 p-6 shadow-md shadow-mint-100/40">
              <p className="text-xs uppercase tracking-[0.3em] text-mint-500">
                Collaboration Loop
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Link field updates to discussion threads, client visibility, and
                automated billing cues—without switching tabs or losing momentum.
              </p>
              <div className="mt-5 flex flex-col gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-2 rounded-full border border-mint-100 bg-mint-50/70 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-mint-500" />
                  Adaptive permissions by project role
                </div>
                <div className="flex items-center gap-2 rounded-full border border-mint-100 bg-white px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-mint-500" />
                  Beautiful client-ready summaries
                </div>
                <div className="flex items-center gap-2 rounded-full border border-mint-100 bg-white px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-mint-500" />
                  Notification tone that respects focus
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[var(--radius-lg)] border border-mint-100 bg-white/70 p-10 shadow-[var(--shadow-soft)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-mint-600">
                Stories
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Teams who feel lighter with NEXIFY
              </h2>
            </div>
            <p className="max-w-xl text-base text-slate-600">
              From field services to consultancies, organizations use NEXIFY to
              cultivate transparency and momentum that clients can feel.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="group flex h-full flex-col justify-between gap-6 rounded-[26px] border border-mint-100 bg-white/90 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-mint-300 hover:bg-mint-50/80 hover:shadow-[var(--shadow-soft)]"
              >
                <p className="text-base text-slate-600">{testimonial.quote}</p>
                <footer>
                  <p className="text-sm font-semibold text-deep-forest">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mt-16 overflow-hidden rounded-[var(--radius-lg)] border border-mint-100 bg-gradient-to-br from-deep-forest via-deep-forest to-mint-600/90 p-8 text-white shadow-[var(--shadow-soft)] sm:p-12"
        >
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                Ready for lift-off
              </p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                Let’s craft a workspace that feels beautifully human.
              </h2>
              <p className="max-w-lg text-base text-white/80">
                We set up tailor-made spaces in weeks, guiding teams through a calm
                onboarding experience. Share your context and we’ll orchestrate the
                rest.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-white/80">
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2">
                  Guided migration
                </span>
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2">
                  Hybrid-friendly rituals
                </span>
                <span className="rounded-full border border-white/40 bg-white/10 px-4 py-2">
                  Dedicated partner squad
                </span>
              </div>
            </div>
            <form className="grid gap-4 rounded-[var(--radius-md)] border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Name
                <input
                  type="text"
                  placeholder="Sahana Rao"
                  className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-mint-100/80 focus:outline-none focus:ring-2 focus:ring-mint-100/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                Work email
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-mint-100/80 focus:outline-none focus:ring-2 focus:ring-mint-100/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-white/80">
                What would you like to streamline?
                <textarea
                  rows={3}
                  placeholder="Tell us about your teams, clients, and operations goals."
                  className="rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-mint-100/80 focus:outline-none focus:ring-2 focus:ring-mint-100/40"
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-deep-forest transition-all hover:-translate-y-0.5 hover:bg-mint-100"
              >
                Book an intro session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
          <div className="pointer-events-none absolute -bottom-10 -right-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        </section>
      </main>

      <footer className="relative z-10 border-t border-mint-100 bg-white/70 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-mint-200/80 shadow-sm shadow-mint-200/60">
              <Image
                src="/logo.svg"
                alt="NEXIFY mark"
                width={20}
                height={20}
                className="opacity-80"
              />
            </div>
            <div>
              <p className="font-display text-lg tracking-tight text-deep-forest">
                NEXIFY
              </p>
              <p className="text-xs text-slate-500">
                Crafted with care by IT SOUQ LLP
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 sm:text-sm">
            <span>© {new Date().getFullYear()} IT SOUQ LLP. All rights reserved.</span>
            <a href="#contact" className="hover:text-mint-600">
              Start the conversation
            </a>
            <a href="#about" className="hover:text-mint-600">
              Platform ethos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
