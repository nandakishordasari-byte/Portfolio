import React from 'react';
import { Mail, Database, FileSpreadsheet, BarChart2, Cpu } from 'lucide-react';
import { Linkedin, Github } from './BrandIcons';
import profilePhoto from '../assets/hero.png';

const Hero = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="section hero-section">
      <div className="container hero-container">
        
        {/* Left Side: Text Content */}
        <div className="hero-content">
          <span className="hero-greeting">HELLO, I'M</span>
          <h1 className="hero-name">DASARI NANDA KISHOR</h1>
          <div className="hero-title-wrapper">
            <span className="hero-title-badge">DATA ANALYST</span>
          </div>
          <h2 className="hero-headline">Turning Data Into Meaningful Insights</h2>
          <p className="hero-description">
            Enthusiastic Data Analyst with a strong foundation in Python, SQL, Excel, and Power BI. 
            Passionate about analyzing data, identifying trends, and creating insightful reports to 
            support data-driven decision-making.
          </p>

          <div className="hero-cta-buttons">
            <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
              View My Projects
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a 
              href="https://www.linkedin.com/in/dasari-nanda-kishor-2ab9a2377" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/nandakishordasari-byte" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-link"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:nandakishordasari81@gmail.com" 
              className="social-icon-link"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Photo and Interactive Elements */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            <div className="glowing-border-avatar">
              <img 
                src={profilePhoto} 
                alt="Dasari Nanda Kishor" 
                className="hero-avatar-image" 
              />
            </div>

            {/* Floating Tech Elements */}
            <div className="floating-element float-icon pos-python" title="Python">
              <span>Python</span>
            </div>
            <div className="floating-element-medium float-icon pos-sql" title="SQL">
              <Database size={16} />
              <span>SQL</span>
            </div>
            <div className="floating-element float-icon pos-powerbi" title="Power BI">
              <BarChart2 size={16} />
              <span>Power BI</span>
            </div>
            <div className="floating-element-medium float-icon pos-excel" title="Excel">
              <FileSpreadsheet size={16} />
              <span>Excel</span>
            </div>
            <div className="floating-element float-icon pos-chart" title="Charts">
              <BarChart2 size={16} />
            </div>
            <div className="floating-element-medium float-icon pos-database" title="Database">
              <Cpu size={16} />
            </div>

            {/* Professional Info Badge */}
            <div className="hero-badge-floating">
              <span className="badge-bullet"></span>
              <span className="badge-text">Data Analyst | Python | SQL | Power BI</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
