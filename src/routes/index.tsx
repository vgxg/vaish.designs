import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Preloader, Nav, SocialRail, Hero, About } from "@/components/portfolio/Intro";

import { Skills, Process } from "@/components/portfolio/SkillsProcess";

import { Projects, Creative, Experience, Activities } from "@/components/portfolio/Work";

import { Certifications, SoftSkills, Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
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
        </>
      )}
    </>
  );
}
