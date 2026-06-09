import React from 'react';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials" style={{ backgroundColor: 'var(--c-sandal-pink)', padding: '6rem 0' }}>
      <div className="container text-center fade-up">
        <p className="section-label" style={{ color: 'var(--c-obsidian)' }}>05 / Reviews</p>
        <h2 className="section-title">What Others <em>Say</em></h2>
        <div style={{ display: 'flex', gap: '2rem', overflowX: 'auto', padding: '2rem 0', scrollSnapType: 'x mandatory' }}>
          <div
            style={{ minWidth: '300px', flex: 1, background: 'rgba(255,255,255,0.4)', padding: '2rem', borderRadius: '12px', scrollSnapAlign: 'center', textAlign: 'left' }}>
            <p className="body-text" style={{ fontStyle: 'italic' }}>"Rajkumar's technical expertise and mentorship
              transformed our startup. His ability to design scalable systems while understanding business needs is
              exceptional."</p>
          </div>
          <div
            style={{ minWidth: '300px', flex: 1, background: 'rgba(255,255,255,0.4)', padding: '2rem', borderRadius: '12px', scrollSnapAlign: 'center', textAlign: 'left' }}>
            <p className="body-text" style={{ fontStyle: 'italic' }}>"Learning backend development from Rajkumar was
              game-changing. His real-world experience and clear explanations made complex concepts accessible."</p>
          </div>
          <div
            style={{ minWidth: '300px', flex: 1, background: 'rgba(255,255,255,0.4)', padding: '2rem', borderRadius: '12px', scrollSnapAlign: 'center', textAlign: 'left' }}>
            <p className="body-text" style={{ fontStyle: 'italic' }}>"Rajkumar's consulting transformed our entire tech stack.
              His recommendations led to 40% performance improvement and reduced costs significantly."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
