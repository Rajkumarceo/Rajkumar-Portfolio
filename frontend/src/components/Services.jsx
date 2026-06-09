import React from 'react';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container grid-2">
        <div className="services-visual fade-up">
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
            alt="Software Product Dashboard and Analytics" className="parallax-img"
            style={{ borderRadius: '12px', width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
        </div>
        <div className="services-text fade-up delay-1">
          <p className="section-label">02 / Expertise</p>
          <h2 className="section-title">Technical <em>Mastery</em></h2>
          <p className="body-text"><strong>Product Development:</strong> From concept to launch, I build intelligent
            products that solve real problems. Full-stack development with AI integration and scalable architecture.
          </p>
          <ul style={{ listStyle: 'none', paddingBottom: '1.5rem' }} className="body-text">
            <li>✓ Idea Validation & Strategy</li>
            <li>✓ Full-Stack Development</li>
            <li>✓ AI/ML Integration</li>
            <li>✓ MVP to Scale</li>
          </ul>
          <p className="body-text"><strong>End-to-End Technical Consulting:</strong> Strategic technical guidance for
            startups and enterprises. Architecture design, tech stack selection, and optimization.</p>
          <a href="#contact" className="link-underline">Work with me</a>
        </div>
      </div>
    </section>
  );
}
