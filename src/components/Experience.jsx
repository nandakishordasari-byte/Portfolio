import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Data Analyst Intern',
      company: 'Algonex IT Solutions',
      duration: 'June 2026 – Present',
      tech: ['Python', 'SQL', 'Power BI'],
      desc: 'Motivated and detail-oriented graduate developing practical experience as a Data Analyst. Working with Python, SQL, and Power BI to analyze data, create reports, and support analytical problem-solving.',
    },
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                {/* Visual marker bullet */}
                <div className="timeline-marker"></div>
                
                {/* Timeline Box */}
                <div className="timeline-content">
                  <div className="glass-card experience-card">
                    <div className="exp-card-header">
                      <div className="exp-role-title">
                        <Briefcase size={18} className="text-cyan" />
                        <h3>{exp.role}</h3>
                      </div>
                      <div className="exp-duration">
                        <Calendar size={14} className="text-muted" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    <h4 className="exp-company">{exp.company}</h4>
                    
                    <p className="exp-desc">{exp.desc}</p>

                    <div className="exp-tech-tags">
                      <span className="tech-tags-label">Technologies:</span>
                      <div className="tech-tags-list">
                        {exp.tech.map((t, tIdx) => (
                          <span key={tIdx} className="badge-tech">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
