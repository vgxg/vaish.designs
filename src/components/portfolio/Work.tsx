import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { activities, creative, experience, projects, GITHUB, INSTAGRAM } from "./data";

export function Projects() {
  return (
    <section id="projects" className="grid-bg relative bg-ink py-28 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <span data-aos="fade-up" className="pill border-white/20 text-white/70">
          Featured Projects
        </span>
        <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl sm:text-6xl">
          Work that speaks
          <br />
          for itself
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-md text-white/55">
          A selection of products that showcase my work across AI systems, automation, and modern
          product engineering.
        </p>

        <div className="mt-16 space-y-8">
          {projects.map((p) => (
            <article
              key={p.n}
              data-aos="fade-up"
              className={`rounded-[2rem] border p-8 transition-colors sm:p-10 ${
                p.flagship
                  ? "border-brand/40 bg-gradient-to-br from-brand/10 to-transparent"
                  : "border-white/10 bg-white/[0.03] hover:border-white/25"
              }`}
            >
              {p.flagship && (
                <span className="eyebrow rounded-full border border-brand/50 px-3 py-1 text-brand">
                  🚀 Flagship Project
                </span>
              )}
              <div className="mt-5 flex items-baseline gap-4">
                <span className="hand text-3xl text-white/25">{p.n}</span>
                <h3 className="tight-head text-2xl sm:text-3xl">{p.title}</h3>
              </div>
              <p className="mt-4 max-w-3xl leading-relaxed text-white/60">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 px-3 py-1 text-xs font-semibold text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      "primary" in l && l.primary
                        ? "bg-brand text-white hover:bg-brand-deep"
                        : "muted" in l && l.muted
                          ? "border border-white/10 text-white/35"
                          : "border border-white/20 text-white hover:bg-white/10"
                    }`}
                  >
                    <ArrowUpRight className="size-4" /> {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            data-aos="fade-up"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 font-semibold transition-colors hover:bg-white hover:text-ink"
          >
            <Github className="size-5" /> Explore All My Repositories <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Creative() {
  return (
    <section className="relative bg-ink pb-28 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <span data-aos="fade-up" className="pill border-white/20 text-white/70">
          Beyond Delivery
        </span>
        <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl sm:text-6xl">
          Systems, Agents &amp; Product Craft
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-lg text-white/55">
          Beyond building, I design the systems that keep businesses running — quietly, reliably,
          and without extra headcount.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {creative.map((c, i) => (
            <a
              key={c.title}
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-brand/50"
            >
              <div className="flex items-start justify-between">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-white/8 text-xl">
                  {c.icon}
                </span>
                <span className="eyebrow rounded-full border border-white/12 px-3 py-1 text-white/50">
                  {c.stat}
                </span>
              </div>
              <h3 className="tight-head mt-7 text-xl">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{c.body}</p>
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="eyebrow text-white/60">{c.cta}</span>
                <ArrowRight className="size-4 text-white/50 transition-transform group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="relative bg-ink">
      <svg className="h-24 w-full text-brand" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,45 C240,5 480,95 720,55 C960,15 1200,90 1440,50 L1440,100 L0,100 Z" />
      </svg>
      <div className="bg-brand pb-10 pt-6 text-white">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="text-center">
            <h2 data-aos="fade-up" className="tight-head text-4xl uppercase text-ink sm:text-6xl">
              Work Experience
            </h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mx-auto mt-5 max-w-lg font-semibold">
              Real client work where I applied product thinking, AI, and automation to ship things
              that make money or save time.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {experience.map((e, i) => (
              <div
                key={e.role}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-[2rem] bg-ink/90 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="eyebrow text-white/50">{e.period}</span>
                  <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase">
                    {e.kind}
                  </span>
                </div>
                <h3 className="tight-head mt-5 text-2xl">{e.role}</h3>
                <p className="eyebrow mt-2 text-white/70">{e.org}</p>
                <p className="eyebrow mt-6 text-white/45">Skills Gained:</p>
                <ul className="mt-2 space-y-1 text-sm text-white/80">
                  {e.skills.map((s) => (
                    <li key={s}>• {s}</li>
                  ))}
                </ul>
                <p className="eyebrow mt-6 border-t border-white/10 pt-5 text-white/45">
                  Technologies:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {e.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand/20 px-3 py-1 font-mono text-xs text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <svg className="h-24 w-full rotate-180 text-brand" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,45 C240,5 480,95 720,55 C960,15 1200,90 1440,50 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}

export function Activities() {
  return (
    <section className="grid-bg relative bg-ink py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <span data-aos="fade-up" className="pill border-white/20 text-white/70">
            Activities
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl uppercase sm:text-6xl">
            Community &amp; Engagement
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-5 max-w-lg text-white/55">
            Sharing what I build, mentoring makers, and speaking about AI that survives real users.
          </p>
        </div>

        <div className="relative mt-16">
          <span className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand to-transparent lg:block" />
          <div className="space-y-10">
            {activities.map((a, i) => (
              <div
                key={a.title}
                data-aos={i % 2 ? "fade-left" : "fade-right"}
                className={`relative lg:w-1/2 ${i % 2 ? "lg:ml-auto lg:pl-14" : "lg:pr-14 lg:text-right"}`}
              >
                <span
                  className={`absolute top-10 hidden size-3 rounded-full bg-brand shadow-[0_0_16px_4px] shadow-brand/50 lg:block ${
                    i % 2 ? "-left-1.5" : "-right-1.5"
                  }`}
                />
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
                  <span className="rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase text-brand">
                    {a.tag}
                  </span>
                  <h3 className="tight-head mt-4 text-xl">{a.title}</h3>
                  <p className="eyebrow mt-2 text-brand">{a.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
