import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Interests from './components/sections/Interests';
import Projects from './components/sections/Projects';
import SectionWrapper from './components/layout/SectionWrapper';
import Skills from './components/sections/Skills';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-surface via-white to-slate-100 py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <Navbar />

        <div className="rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-soft backdrop-blur-xl">
          <Hero />
        </div>

        <SectionWrapper title="Professional summary" id="summary">
          <About />
        </SectionWrapper>

        <SectionWrapper title="Skills" id="skills">
          <Skills />
        </SectionWrapper>

        <SectionWrapper title="Experience" id="experience">
          <Experience />
        </SectionWrapper>

        <SectionWrapper title="Projects" id="projects">
          <Projects />
        </SectionWrapper>

        <SectionWrapper title="Interests" id="interests">
          <Interests />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default App;
