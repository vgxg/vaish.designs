import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "@/components/ui/sonner";
import { About, Hero, Nav, Preloader, SocialRail } from "@/components/portfolio/Intro";
import { Process, Skills } from "@/components/portfolio/SkillsProcess";
import { Activities, Creative, Experience, Projects } from "@/components/portfolio/Work";
import { Certifications, Contact, Footer, SoftSkills } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vaishak — AI & Automation Product Developer" },
      {
        name: "description",
        content:
          "Vaishak (vaishak.designs) builds digital products, AI systems and automation that turn business ideas into working products. India · Worldwide.",
      },
      { property: "og:title", content: "Vaishak — AI & Automation Product Developer" },
      {
        property: "og:description",
        content:
          "AI systems, automation and product design that turn business ideas into working products.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic", offset: 80 });
  }, []);

  useEffect(() => {
    if (loaded) AOS.refresh();
  }, [loaded]);

  return (
    <div className="bg-ink">
      <Preloader onDone={() => setLoaded(true)} />
      <Nav />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Creative />
        <Experience />
        <Activities />
        <Certifications />
        <SoftSkills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
