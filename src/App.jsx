import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import AnalyticsMindset from './components/AnalyticsMindset';
import GithubSection from './components/Github';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // triggers when the section is central in the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* Ambient background styling lights */}
      <div className="ambient-glow glow-top-right"></div>
      <div className="ambient-glow glow-mid-left"></div>
      <div className="ambient-glow glow-bottom-right"></div>

      {/* Structured Single Page Layout */}
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <AnalyticsMindset />
      <GithubSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
