import React from 'react';

export default function Header() {
  return (
    <header className="glass-header">
      <div className="header-container">
        <div className="brand">
          <a href="#" className="logo">
            <span className="logo-text">Rajkumar</span>
            <span className="logo-subtext">Backend & AI Engineer</span>
          </a>
        </div>
        <nav className="desktop-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#collections" className="nav-link">Projects</a>
          <a href="#mentorship" className="nav-link">Mentorship</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <button className="mobile-menu-btn" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
