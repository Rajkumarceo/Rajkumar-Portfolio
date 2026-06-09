import React from 'react';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow fade-up">The Personal Edit</p>
        <h1 className="hero-title fade-up delay-1">Elegance <em>Redefined</em></h1>
        <p className="hero-subtitle fade-up delay-2">Crafting timeless digital experiences and preserving brand heritage
          through exquisite design and flawless execution.</p>
        <div className="hero-cta fade-up delay-3">
          <a href="#collections" className="btn-primary">Explore Works <span>&rarr;</span></a>
        </div>
      </div>
      <div className="hero-image-wrapper fade-up delay-4">
        <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
          alt="Artificial Intelligence Neural Network" className="hero-image" />
      </div>
    </section>
  );
}
