import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSteps, skillGroups } from "./data";

export function Skills() {
  return (
    <section id="skills" className="relative bg-ink py-24 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="text-center">
          <span data-aos="fade-up" className="pill border-white/20 text-white/70">
            Technical Stack
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl uppercase sm:text-6xl">
            My Skillset
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mx-auto mt-5 max-w-xl text-white/55">
            A comprehensive overview of the AI systems, automation platforms, and product tools I
            build with every day.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <div
              key={g.title}
              data-aos="fade-up"
              data-aos-delay={gi * 80}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-7"
            >
              <h3 className="tight-head border-b border-white/10 pb-4 text-lg uppercase">{g.title}</h3>
              <div className="mt-5 space-y-5">
                {g.items.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-white/90">{s.label}</span>
                      <span className="text-xs font-bold text-brand">{s.value}%</span>
                    </div>
                    <div className="mt-2 h-[3px] w-full rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.value}%` }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-deep to-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  index,
  progress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index * 0.16;
  const rotate = useTransform(progress, [start, start + 0.4], [index % 2 ? 8 : -8, index % 2 ? -3 : 4]);
  const y = useTransform(progress, [start, start + 0.5], [90, -30]);
  const active = index === 0 || index === 3;

  return (
    <motion.div
      style={{ rotate, y }}
      className={`relative w-full max-w-sm rounded-[2rem] p-2 shadow-2xl ${
        active ? "bg-brand shadow-brand/40" : "bg-black/5"
      }`}
    >
      <div
        className={`rounded-[1.6rem] p-7 ${
          active ? "bg-brand text-white" : "bg-white text-ink"
        }`}
      >
        <span className="mx-auto mb-4 block size-3 rounded-full bg-black/20" />
        <p className={`hand text-2xl ${active ? "text-white/70" : "text-ink/40"}`}>{step.n}</p>
        <h3 className="tight-head mt-1 text-2xl">{step.title}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${active ? "text-white/85" : "text-ink/70"}`}>
          {step.body}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="grid-bg relative bg-white py-28 text-ink">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 sm:px-8 lg:grid-cols-2">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span data-aos="fade-up" className="pill border-ink/15 text-ink/70">
            My Process
          </span>
          <h2 data-aos="fade-up" data-aos-delay="100" className="tight-head mt-6 text-4xl sm:text-6xl">
            Here's how I turn ideas into real-world products
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="mt-6 max-w-md text-ink/60">
            I follow a structured, creative, and highly technical approach to turn ideas into AI
            products and automation that actually run in production.
          </p>
          <p className="hand mt-10 text-3xl text-ink/40">Ready to ship!</p>
        </div>

        <div className="flex flex-col items-center gap-16 lg:items-end">
          {processSteps.map((s, i) => (
            <div key={s.n} className={i % 2 ? "lg:self-start" : "lg:self-end"}>
              <ProcessCard step={s} index={i} progress={scrollYProgress} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
