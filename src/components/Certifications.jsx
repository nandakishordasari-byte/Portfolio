import React from 'react';
import { Award, Cpu } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Certified Professional',
      issuer: 'Skilldizire',
      year: '2025',
      desc: 'Completed a Python internship focused on core programming concepts and hands-on application development.',
      icon: <Award size={24} className="text-cyan" />,
      pdf: `${import.meta.env.BASE_URL}Skilldzire.pdf`
    },
    {
      title: 'Advanced Computer Architecture',
      issuer: 'NPTEL (Elite)',
      year: '2026',
      desc: 'Successfully completed the NPTEL Elite Certification in Advanced Computer Architecture with an overall score of 80.',
      icon: <Cpu size={24} className="text-blue" />,
      pdf: `${import.meta.env.BASE_URL}ACA_NPTEL_Certificate.pdf`
    }
  ];

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass-card cert-card">
              <div className="cert-header">
                <div className="cert-icon-box">
                  {cert.icon}
                </div>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-year">{cert.year}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              
              <p className="cert-desc">{cert.desc}</p>

              {cert.pdf && (
                <div className="cert-actions" style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'inline-flex', width: 'auto' }}
                  >
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
