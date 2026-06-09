import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Collections from './components/Collections';
import Mentorship from './components/Mentorship';
import Testimonials from './components/Testimonials';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Ported from legacy script.js
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-up');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-soft-white text-obsidian antialiased">
      <div className="fixed-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>
      
      <div className="page-wrapper">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Collections />
          <Mentorship />
          <Testimonials />
          <Philosophy />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
