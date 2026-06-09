import React from 'react';

export default function Mentorship() {
  return (
    <section className="mentorship" id="mentorship">
      <div className="container">
        <div className="collections-header fade-up">
          <p className="section-label">04 / Mentorship</p>
          <h2 className="section-title">Empowering <em>Developers</em></h2>
          <p className="body-text" style={{ maxWidth: '600px', margin: '0 auto' }}>
            As a dedicated technical trainer, I empower developers and students with industry-relevant skills and best practices.
          </p>
        </div>
        <div className="projects-grid">
          <div className="project-card fade-up">
            <div className="project-info"
              style={{ padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', height: '100%' }}>
              <h3 className="project-name" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Modern Frontend</h3>
              <p className="body-text">React.js, Next.js, and TypeScript. Building highly dynamic, scalable, and interactive user interfaces with state-of-the-art architectures.</p>
            </div>
          </div>
          <div className="project-card fade-up delay-1">
            <div className="project-info"
              style={{ padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', height: '100%' }}>
              <h3 className="project-name" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Backend & APIs</h3>
              <p className="body-text">Node.js, Express, and PHP. Architecting robust server-side logic, secure authentication flows, and high-performance RESTful APIs.</p>
            </div>
          </div>
          <div className="project-card fade-up">
            <div className="project-info"
              style={{ padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', height: '100%' }}>
              <h3 className="project-name" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Core Engineering</h3>
              <p className="body-text">Python, C/C++, and Java. Mastering complex algorithms, data structures, AI integrations, and performance-critical systems.</p>
            </div>
          </div>
          <div className="project-card fade-up delay-1">
            <div className="project-info"
              style={{ padding: '2rem', background: 'rgba(255,255,255,0.5)', borderRadius: '12px', height: '100%' }}>
              <h3 className="project-name" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Data & Cloud</h3>
              <p className="body-text">SQL, MongoDB, and Cloud Architectures. Designing optimized database schemas, scalable pipelines, and secure cloud deployments.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
