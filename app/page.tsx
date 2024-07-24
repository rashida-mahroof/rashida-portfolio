import Image from "next/image";
import Header from "./components/header/page";
import AboutSection from "./components/about/page";
import SkillsSection from "./components/skills/page";
import ExperienceEducationSection from "./components/education/page";
import Portfolio from "./components/portfolio/page";
import Contact from "./components/contact/page";
import BlogList from "./components/blogs/page";
// import ParticleBackground from "../app/components/particle_bg";
// import { Suspense } from 'react';
// import dynamic from "next/dynamic";
// // Dynamically import ParticleBackground with SSR disabled
// const ParticleBackground = dynamic(() => import("../app/components/particle_bg"), { 
//   ssr: false,
//  });

export default function Home() {
  return (
    <>
    {/* <ParticleBackground /> */}
    <main className="relative z-10">
      <Header />
      <AboutSection />
      <SkillsSection />
      <ExperienceEducationSection />
      <Portfolio />
      <Contact />
      {/* <BlogList /> */}
    </main>
  </>
  );
}