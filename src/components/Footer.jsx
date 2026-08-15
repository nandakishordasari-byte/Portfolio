import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        {/* Brand Block */}
        <div className="footer-brand">
          <h2 className="footer-logo">
            DASARI NANDA KISHOR<span className="logo-dot">.</span>
          </h2>
          <span className="footer-title">Data Analyst</span>
          <p className="footer-tagline">"Turning Data Into Meaningful Insights"</p>
        </div>

        {/* Links / Scroll Top Action */}
        <div className="footer-middle">
          <div className="footer-socials">
            <a 
              href="https://www.linkedin.com/in/dasari-nanda-kishor-2ab9a2377" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/nandakishordasari-byte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:nandakishordasari81@gmail.com" 
              className="social-icon-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button onClick={handleScrollToTop} className="scroll-top-btn" aria-label="Scroll to top">
            <ArrowUp size={16} />
            <span>Scroll Top</span>
          </button>
        </div>

        {/* Copyright Disclaimer */}
        <div className="footer-bottom">
          <p>© 2026 Dasari Nanda Kishor. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
