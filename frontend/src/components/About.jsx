import React from 'react';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container grid-2">
        <div className="about-text fade-up">
          <p className="section-label">01 / Profile</p>
          <h2 className="section-title">Building Intelligent <em>Products</em></h2>
          <p className="body-text">I am the Founder of Titanobova Private Limited and Co-founder of Golden Dates. With
            expertise in backend development, AI engineering, and entrepreneurship, I transform ideas into intelligent
            solutions.</p>
          <p className="body-text">My mission is to bridge the gap between cutting-edge technology and practical business
            value, mentoring the next generation of developers while scaling innovative ventures.</p>
          <a href="#contact" className="link-underline">Get in touch</a>
        </div>
        <div className="about-visual fade-up delay-1">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop"
            alt="Software Engineering Workspace" className="parallax-img" />
        </div>
      </div>
    </section>
  );
}
