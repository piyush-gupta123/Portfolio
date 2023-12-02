import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Intro from "@/components/intro";
import Sectiondivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Sectiondivider />
      <About />
      <Projects />
      <Skills />
      <Education />
    </main>
  );
}
