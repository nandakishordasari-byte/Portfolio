import React from 'react';
import { ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { Github } from './BrandIcons';

const GithubSection = () => {
  return (
    <section id="github" className="section github-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Open Source</span>
          <h2 className="section-title">Explore My Work</h2>
        </div>

        <div className="glass-card github-card-cta">
          <div className="github-logo-large">
            <Github size={48} className="text-cyan animate-pulse" />
          </div>
          
          <h3 className="github-cta-title">Check Out My Repositories</h3>
          
          <p className="github-cta-text">
            Explore my projects, coding experiments, and development work on GitHub. 
            I share Python scripts, SQL projects, dashboard code, and data visualizations.
          </p>

          <a
            href="https://github.com/nandakishordasari-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary github-visit-btn"
          >
            <Github size={18} />
            <span>Visit GitHub</span>
            <ExternalLink size={14} style={{ opacity: 0.8 }} />
          </a>

          {/* Graphical decorations to make it look technical and premium */}
          <div className="github-card-decoration left">
            <GitBranch size={16} />
            <span>main branch</span>
          </div>
          <div className="github-card-decoration right">
            <Terminal size={16} />
            <span>nanda-byte $</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubSection;
