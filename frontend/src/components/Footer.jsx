import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="logo-large">
              <span className="logo-large-text">RAJKUMAR</span>
              <span className="logo-large-subtext">BACKEND & AI ENGINEER</span>
            </h2>
            <p className="footer-desc">Building intelligent products and technical solutions that transform vision into reality.</p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <a href="#about">About</a>
            <a href="#collections">Collections</a>
            <a href="#philosophy">Philosophy</a>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Connect</h4>
            <a href="https://www.instagram.com/rajkumar_.in" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/rajkumarr-founder-titanobovapvt" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/RajKumar_x1" target="_blank" rel="noreferrer">Twitter</a>
          </div>
          <div className="footer-newsletter">
            <h4 className="footer-heading">Inquiries</h4>
            <p>Ready to transform your vision into reality? Reach out to me directly.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="rajkumar.ceo.6@gmail.com" readOnly />
              <button onClick={() => window.location.href='mailto:rajkumar.ceo.6@gmail.com'}>Email</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Rajkumar. All rights reserved.</p>
          <p>Designed with elegance.</p>
        </div>
      </div>
    </footer>
  );
}
