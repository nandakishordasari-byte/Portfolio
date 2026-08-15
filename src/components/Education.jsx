import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      institution: 'Aditya College of Engineering',
      gradYear: '2026',
      grade: 'CGPA: 7.2 / 10',
      details: 'Department of Electrical & Electronics Engineering. Focused on computer architectures, numerical analysis, data structures, and algorithmic logic alongside core engineering modules.',
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Academic Profile</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-timeline-container">
          <div className="timeline">
            {educationList.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                {/* Academic Timeline marker */}
                <div className="timeline-marker"></div>

                {/* Timeline Content card */}
                <div className="timeline-content">
                  <div className="glass-card education-card">
                    <div className="edu-card-header">
                      <div className="edu-degree-title">
                        <GraduationCap size={20} className="text-cyan animate-pulse" />
                        <h3>{edu.degree}</h3>
                      </div>
                      <div className="edu-year">
                        <Calendar size={14} className="text-muted" />
                        <span>Graduated: {edu.gradYear}</span>
                      </div>
                    </div>

                    <h4 className="edu-institution">{edu.institution}</h4>

                    <div className="edu-grade-box">
                      <Award size={14} className="text-yellow" />
                      <span className="edu-grade-value">{edu.grade}</span>
                    </div>

                    <p className="edu-details">{edu.details}</p>
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

export default Education;
