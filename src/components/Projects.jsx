import React from 'react';
import { Check, Users, Activity, CheckSquare, Terminal } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Intern Management System (IMS)',
      year: '2026',
      tech: ['Python', 'React', 'HTML', 'CSS'],
      desc: 'An intern/student management system designed to organize student profiles, skills, projects, and placement-readiness information.',
      features: [
        'Student Management',
        'Skill Management',
        'Project Tracking',
        'Placement Readiness',
        'Data Management',
      ],
      github: 'https://github.com/nandakishordasari-byte',
      // We will render a custom dashboard UI mockup using JSX
      mockupType: 'ims'
    },
    {
      title: 'Web-Sentinel AI Agents for Automated Web Testing',
      year: '2025',
      tech: ['Python', 'FastAPI', 'HTML', 'CSS'],
      desc: 'An AI-powered system that automatically tests websites by simulating user actions, detecting bugs, validating functionality, and generating test reports to improve software quality while reducing manual testing effort.',
      features: [
        'AI Automation',
        'Automated Web Testing',
        'User Simulation',
        'Bug Detection',
        'Functionality Validation',
        'Test Report Generation',
      ],
      github: 'https://github.com/nandakishordasari-byte',
      // We will render a custom automated terminal mockup using JSX
      mockupType: 'sentinel'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Portfolio Showpieces</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card project-card">
              
              {/* Project Card Mockup Banner */}
              <div className="project-banner">
                {proj.mockupType === 'ims' ? (
                  /* IMS Dashboard Mockup */
                  <div className="mockup-ims">
                    <div className="mockup-header">
                      <span className="mockup-dot red"></span>
                      <span className="mockup-dot yellow"></span>
                      <span className="mockup-dot green"></span>
                      <span className="mockup-title">IMS Admin Dashboard v1.2</span>
                    </div>
                    <div className="mockup-body ims-layout">
                      <div className="ims-sidebar">
                        <div className="sidebar-item active"><Users size={12} /><span>Interns</span></div>
                        <div className="sidebar-item"><Activity size={12} /><span>Readiness</span></div>
                        <div className="sidebar-item"><CheckSquare size={12} /><span>Projects</span></div>
                      </div>
                      <div className="ims-main">
                        <div className="ims-stats">
                          <div className="ims-stat-box">
                            <span className="stat-num">48</span>
                            <span className="stat-lbl">Active Interns</span>
                          </div>
                          <div className="ims-stat-box">
                            <span className="stat-num">92%</span>
                            <span className="stat-lbl">Ready Rate</span>
                          </div>
                        </div>
                        <div className="ims-table">
                          <div className="table-header">
                            <span>Name</span><span>Ready</span><span>Score</span>
                          </div>
                          <div className="table-row">
                            <span>S. Kumar</span><span className="pill pill-green">Yes</span><span>88/100</span>
                          </div>
                          <div className="table-row">
                            <span>A. Patel</span><span className="pill pill-yellow">Progress</span><span>72/100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Web-Sentinel Automated Terminal Mockup */
                  <div className="mockup-sentinel">
                    <div className="mockup-header">
                      <span className="mockup-dot red"></span>
                      <span className="mockup-dot yellow"></span>
                      <span className="mockup-dot green"></span>
                      <div className="mockup-title-wrapper-sentinel">
                        <Terminal size={12} className="text-cyan" />
                        <span className="mockup-title text-cyan">sentinel-agent --run</span>
                      </div>
                    </div>
                    <div className="mockup-body sentinel-layout">
                      <div className="terminal-line text-muted">$ python main.py --target="https://app.test"</div>
                      <div className="terminal-line text-cyan">[INFO] Initializing Web-Sentinel AI Agent Core...</div>
                      <div className="terminal-line text-green">[OK] Loaded Web driver module successfully.</div>
                      <div className="terminal-line">[AI] Analyzing UI tree: Identified 12 buttons, 4 input forms.</div>
                      <div className="terminal-line text-yellow">[WARN] Found unhandled exception in /api/auth handler.</div>
                      <div className="terminal-line text-green">[OK] Test Run Completed: 11 Passed | 1 Failed | 2 Warnings.</div>
                      <div className="terminal-line text-cyan">[REPORT] Exported dashboard report to HTML successfully!</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Card Text Content */}
              <div className="project-details">
                <div className="project-title-row">
                  <h3 className="project-name">{proj.title}</h3>
                  <span className="project-year">{proj.year}</span>
                </div>

                <p className="project-desc">{proj.desc}</p>

                {/* Features List */}
                <div className="project-features-container">
                  <span className="features-header">Key Modules / Features:</span>
                  <ul className="project-features-list">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="feature-item">
                        <Check size={14} className="feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="project-tech-badges">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="badge-tech">{t}</span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm project-btn"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
