// src/App.js
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const revealSection = (entries, observer) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.add('section-reveal-visible');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    sections.forEach((section) => {
      sectionObserver.observe(section);
      section.classList.add('section-reveal');
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
