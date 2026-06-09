import React from 'react';

export default function Collections() {
  return (
    <section className="collections" id="collections">
      <div className="container">
        {/* LLM MODELS SECTION */}
        <div className="collections-header fade-up" style={{ marginBottom: '2rem' }}>
          <p className="section-label">03 / Advanced AI</p>
          <h2 className="section-title">LLM <em>Models</em></h2>
        </div>
        <div className="projects-grid" style={{ marginBottom: '6rem' }}>
          <a href="https://www.linkedin.com/posts/rajkumarr-founder-titanobovapvt_im-excited-to-share-a-project-ive-been-ugcPost-7436312160785534976-EbRw/"
            target="_blank" rel="noopener noreferrer" className="project-card fade-up">
            <div className="project-image">
              <img src="/assets/ai_innovation_1780981446961.png" alt="Confidential AI Project" />
            </div>
            <div className="project-info">
              <p className="project-category">Digital Platform</p>
              <h3 className="project-name">Confidential AI Project</h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/posts/rajkumarr-founder-titanobovapvt_computervision-humanmachineinteraction-softwareengineering-ugcPost-7462781814814896131-XA1C/"
            target="_blank" rel="noopener noreferrer" className="project-card fade-up delay-1">
            <div className="project-image">
              <img src="/assets/hmi_architecture_1780981434111.png" alt="Interactive AI Systems" />
            </div>
            <div className="project-info">
              <p className="project-category">Software Engineering</p>
              <h3 className="project-name">Interactive Architecture</h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/posts/rajkumarr-founder-titanobovapvt_machinelearning-opencv-poseestimation-ugcPost-7459231021578993664-Juh2/"
            target="_blank" rel="noopener noreferrer" className="project-card fade-up">
            <div className="project-image">
              <img src="/assets/pose_tracing_1780981421157.png" alt="Real-time Pose Estimation" />
            </div>
            <div className="project-info">
              <p className="project-category">Machine Learning</p>
              <h3 className="project-name">Pose Tracing Logic</h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/posts/rajkumarr-founder-titanobovapvt_artificialintelligence-llm-computervision-ugcPost-7459622699657531392-oZbK/"
            target="_blank" rel="noopener noreferrer" className="project-card fade-up delay-1">
            <div className="project-image">
              <img src="/assets/llm_music_gesture_1780981409334.png" alt="LLM Vision Integration" />
            </div>
            <div className="project-info">
              <p className="project-category">AI & Language Models</p>
              <h3 className="project-name">LLM Music Control</h3>
            </div>
          </a>
          <a href="https://www.linkedin.com/posts/rajkumarr-founder-titanobovapvt_computervision-humanmachineinteraction-reactjs-ugcPost-7462488578690949120-JEBf/"
            target="_blank" rel="noopener noreferrer" className="project-card fade-up">
            <div className="project-image">
              <img src="/assets/hmi_react_ui_1780981396433.png" alt="Human-Machine Interaction Suite" />
            </div>
            <div className="project-info">
              <p className="project-category">Computer Vision & HMI</p>
              <h3 className="project-name">HMI Suite</h3>
            </div>
          </a>
        </div>

        {/* WEBSITES SECTION */}
        <div className="collections-header fade-up" style={{ marginBottom: '2rem' }}>
          <p className="section-label">04 / Digital Platforms</p>
          <h2 className="section-title">Websites <em>& Products</em></h2>
        </div>
        <div className="projects-grid">
          <a href="https://gayathri-traders-e-commerce-website.vercel.app" target="_blank" rel="noopener noreferrer"
            className="project-card fade-up">
            <div className="project-image">
              <img src="/assets/gayathri_dry_fruits_1780981382272.png" alt="Gayathri Traders" />
            </div>
            <div className="project-info">
              <p className="project-category">E-Commerce Platform</p>
              <h3 className="project-name">Gayathri Traders</h3>
            </div>
          </a>
          <a href="https://preethi-boutique.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="project-card fade-up delay-1">
            <div className="project-image">
              <img src="/assets/preethi_boutique_1780981883788.png" alt="Preethi Boutique" />
            </div>
            <div className="project-info">
              <p className="project-category">Premium Fashion</p>
              <h3 className="project-name">Preethi Boutique</h3>
            </div>
          </a>
          <a href="https://elevate-enhance-your-attitude.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="project-card fade-up">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800&auto=format&fit=crop"
                alt="Men's Fashion & Attitude" />
            </div>
            <div className="project-info">
              <p className="project-category">Lifestyle & Attitude</p>
              <h3 className="project-name">ELEVATE Attitude</h3>
            </div>
          </a>
          <a href="https://rp-perfumes.vercel.app/" target="_blank" rel="noopener noreferrer"
            className="project-card fade-up delay-1">
            <div className="project-image" style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop"
                alt="RP Perfumes Luxury Men's Collection" style={{ filter: 'brightness(0.8)' }} />
              <div
                style={{
                  position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', 
                  color: '#ffffff', fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 700, 
                  textShadow: '0 4px 15px rgba(0,0,0,0.8)', letterSpacing: '0.15em', pointerEvents: 'none', 
                  zIndex: 10, mixBlendMode: 'overlay'
                }}>
                RP
              </div>
            </div>
            <div className="project-info">
              <p className="project-category">Luxury E-Commerce</p>
              <h3 className="project-name">RP Perfumes</h3>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
