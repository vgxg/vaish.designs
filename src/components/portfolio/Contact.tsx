import { useState } from "react";
import { ArrowRight, Instagram, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import {
  certifications,
  softSkills,
  EMAIL,
  PHONE,
  PHONE_HREF,
  GITHUB,
  INSTAGRAM,
  LINKEDIN,
} from "./data";

export function Certifications() {
  return (
    <section className="bg-brand pb-16 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <h2 data-aos="fade-up" className="tight-head text-4xl text-ink sm:text-6xl">
            Certifications
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="mx-auto mt-4 max-w-md font-semibold">
            Industry-recognized certifications that validate my technical expertise.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <div
              key={c.title}
              data-aos="fade-up"
              data-aos-delay={i * 70}
              className="flex items-center gap-4 rounded-2xl bg-ink/15 p-5 transition-transform hover:-translate-y-1"
            >
              <span className="text-2xl">{c.icon}</span>
              <div>
                <h3 className="font-bold leading-tight">{c.title}</h3>
                <p className="eyebrow mt-1 text-white/70">{c.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <svg className="mt-16 h-24 w-full text-white" viewBox="0 0 1440 100" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,55 C240,15 480,95 720,50 C960,10 1200,85 1440,45 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}

export function SoftSkills() {
  return (
    <section className="bg-white py-24 text-ink">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <span data-aos="fade-up" className="pill border-ink/15 text-ink/70">
            Core Competencies
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl uppercase sm:text-6xl">
            Professional Soft Skills
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-5 max-w-lg text-ink/60">
            Essential traits that make me an effective builder, partner, and communicator.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((s, i) => (
            <div
              key={s.title}
              data-aos="fade-up"
              data-aos-delay={i * 60}
              className="rounded-[1.75rem] border border-ink/10 bg-ink/[0.02] p-7 text-center transition-shadow hover:shadow-xl"
            >
              <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-ink/5 text-2xl">
                {s.icon}
              </span>
              <h3 className="tight-head mt-5 text-base uppercase">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-ink pt-20">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <h2 key={k} className="tight-head whitespace-nowrap pr-10 text-[18vw] leading-none text-white">
            CONTACT — LET'S BUILD —&nbsp;
          </h2>
        ))}
      </div>

      <div className="mx-auto mt-20 max-w-[1400px] px-5 sm:px-8">
        <div data-aos="fade-up" className="rounded-[2rem] bg-brand p-8 text-white sm:p-14">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="eyebrow">Reach Me</span>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              <Instagram className="size-4" /> DM on Instagram
            </a>
          </div>

          <form
            className="mt-12 grid gap-10 lg:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!agreed) {
                toast.error("Please give permission to be contacted.");
                return;
              }
              toast.success("Thanks! Your message is on its way.");
              (e.target as HTMLFormElement).reset();
              setAgreed(false);
            }}
          >
            <div className="space-y-8">
              {["First Name", "Last Name", "Email"].map((label) => (
                <input
                  key={label}
                  required
                  type={label === "Email" ? "email" : "text"}
                  placeholder={label}
                  className="w-full border-b border-white/40 bg-transparent pb-3 text-lg placeholder:text-white/85 focus:border-white focus:outline-none"
                />
              ))}
              <label className="flex items-start gap-3 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 size-4 accent-white"
                />
                I give permission to contact me at this email address.
              </label>
            </div>

            <div className="flex flex-col">
              <textarea
                required
                placeholder="Type your message here"
                rows={6}
                className="w-full resize-none border-b border-white/40 bg-transparent pb-3 text-lg placeholder:text-white/85 focus:border-white focus:outline-none"
              />
              <p className="mt-6 text-xs text-white/80">
                Your message will be sent directly to my inbox. I typically respond within 24-48
                hours.
              </p>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
                <p className="text-xs text-white/80">
                  For urgent inquiries, reach me at
                  <br />
                  <a href={`mailto:${EMAIL}`} className="underline">
                    {EMAIL}
                  </a>
                  <br />
                  <a href={PHONE_HREF} className="underline">
                    {PHONE}
                  </a>
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-105"
                >
                  Send Message <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink pt-20 text-white">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 font-mono text-xs text-white/60 sm:px-8 lg:grid-cols-3">
        <div>
          AI &amp; Automation Product Developer
          <br />
          AI Systems · Automation · Product Design
          <br />
          India · Worldwide
        </div>
        <div className="lg:text-center">
          English
          <br />
          <a href="#projects" className="underline">
            View Work
          </a>
        </div>
        <div className="lg:text-right">
          Available for opportunities
          <br />
          2025 — Present
        </div>
      </div>

      <h2 className="tight-head mt-16 px-5 text-center text-[12.5vw] leading-none tracking-[-0.05em] text-white sm:px-8">
        vaishak<span className="text-brand">.designs</span>
      </h2>

      <div className="mx-auto mt-16 flex max-w-[1400px] flex-wrap items-center justify-between gap-6 border-t border-white/10 px-5 py-8 font-mono text-xs text-white/50 sm:px-8">
        <span>© 2026 Vaishak · vaishak.designs</span>
        <a href={`mailto:${EMAIL}`} className="underline">
          {EMAIL}
        </a>
        <a href={PHONE_HREF} className="underline">
          {PHONE}
        </a>
        <div className="flex items-center gap-5">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="hover:text-white">
            <Github className="size-4" />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="hover:text-white">
            <Linkedin className="size-4" />
          </a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-white">
            <Instagram className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
