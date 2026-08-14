import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Instagram, VolumeX, Volume2, FileDown, ArrowDown } from "lucide-react";
import heroReel from "@/assets/hero-reel.mp4";
import avatar from "@/assets/vaishak-avatar.png";
import { BRAND, EMAIL, GITHUB, INSTAGRAM, LINKEDIN, NAME, TITLE } from "./data";

export function Preloader({ onDone }: { onDone: () => void }) {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const a = setTimeout(() => setGone(true), 1900);
    const b = setTimeout(onDone, 2600);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-brand transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        gone ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="animate-drop tight-head text-4xl text-white sm:text-6xl md:text-7xl">
        {BRAND.replace(".designs", "")}
        <span className="text-ink">.designs</span>
      </h1>
    </div>
  );
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between rounded-full border border-white/10 bg-ink/70 px-5 py-3 backdrop-blur-xl sm:px-7">
        <a href="#home" className="tight-head text-lg text-white sm:text-xl">
          vaishak<span className="text-brand">.designs</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${EMAIL}?subject=Hiring%20Inquiry%20%E2%80%93%20Portfolio`}
          className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-ink"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

export function SocialRail() {
  const items = [
    { Icon: Github, href: GITHUB },
    { Icon: Linkedin, href: LINKEDIN },
    { Icon: Instagram, href: INSTAGRAM },
  ];
  return (
    <div className="fixed left-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-6 mix-blend-difference lg:flex">
      {items.map(({ Icon, href }, i) => (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-white/50 transition-all hover:scale-110 hover:text-white"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [muted, setMuted] = useState(true);
  const userMutedRef = useRef(false);

  // Keep autoplay muted. Sound starts only after the user clicks Unmute.
  useEffect(() => {
    const el = sectionRef.current;
    const v = videoRef.current;

    if (!el || !v) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (!entry.isIntersecting) {
          v.muted = true;
          setMuted(true);
        } else {
          v.muted = userMutedRef.current;
          setMuted(userMutedRef.current);
          void v.play().catch(() => {});
        }
      },
      { threshold: 0.35 },
    );

    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover opacity-70"
        src={heroReel}
        autoPlay
        loop
        playsInline
        muted
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/40 to-ink" />

      <div className="relative mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-5 pb-20 pt-32 sm:px-8">
        <h1
          data-aos="fade-up"
          className="tight-head max-w-4xl text-4xl text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I'm {NAME},<span className="block text-white/60">{TITLE}</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="mt-6 max-w-xl text-base font-medium text-white/80 sm:text-lg"
        >
          I build digital products, AI systems and automation that turn business ideas into working
          products.
        </p>
        <div data-aos="fade-up" data-aos-delay="300" className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}?subject=Project%20Inquiry`}
            className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <FileDown className="size-4" /> Work With Me
          </a>
        </div>

        <div className="mt-14 flex items-center justify-center">
          <ArrowDown className="animate-wiggle size-6 text-white/60" />
        </div>
      </div>

      <button
        onClick={async () => {
          const v = videoRef.current;
          if (!v) return;

          if (muted) {
            try {
              v.muted = false;
              await v.play();

              userMutedRef.current = false;
              setMuted(false);
            } catch (error) {
              console.error("Could not unmute video:", error);
              v.muted = true;
              userMutedRef.current = true;
              setMuted(true);
            }
          } else {
            v.muted = true;
            userMutedRef.current = true;
            setMuted(true);
          }
        }}
        className="absolute bottom-24 right-5 z-10 flex flex-col items-center gap-2 sm:right-10"
      >
        <span className="flex size-16 items-center justify-center rounded-full border border-white/30 backdrop-blur transition-transform hover:scale-110">
          {muted ? (
            <VolumeX className="size-5 text-white" />
          ) : (
            <Volume2 className="size-5 text-white" />
          )}
        </span>
        <span className="eyebrow text-white/70">{muted ? "Unmute Reel" : "Mute Reel"}</span>
      </button>
    </section>
  );
}
export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand pb-40 pt-24 text-ink">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div data-aos="fade-right" className="relative mx-auto w-full max-w-sm">
          <div className="mx-auto h-16 w-2 rounded-b bg-ink" />
          <div className="rotate-[-3deg] rounded-[2rem] border-[10px] border-ink bg-ink p-1 shadow-2xl">
            <img
              src={avatar}
              alt={`${NAME} — ${TITLE}`}
              className="w-full rounded-[1.4rem] object-cover"
            />
          </div>
        </div>

        <div data-aos="fade-left">
          <h2 className="tight-head text-5xl sm:text-6xl">Hello!</h2>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-white">
            Hi, my name is <span className="text-ink">VAISHAK</span>, an AI &amp; automation product
            developer based in India and working worldwide, turning business ideas into working
            products with AI systems, automation and thoughtful product design.
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            {["AI Systems", "Automation", "Product Design"].map((t) => (
              <div key={t} className="text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-ink/10 text-2xl">
                  {t === "AI Systems" ? "🧠" : t === "Automation" ? "⚙️" : "🎨"}
                </div>
                <p className="eyebrow mt-3 text-ink/70">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold text-white">
            <span className="pill border-white/40">India · Worldwide</span>
            <span className="pill border-white/40">English</span>
            <span className="pill border-white/40">Available 2025 — Present</span>
          </div>
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 h-24 w-full text-ink"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,60 C240,110 480,10 720,45 C960,80 1200,20 1440,55 L1440,100 L0,100 Z"
        />
      </svg>
    </section>
  );
}
