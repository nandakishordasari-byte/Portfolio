import React from 'react';
import { Calendar, Award, Code, BarChart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Calendar size={24} className="stat-icon-color-1" />,
      value: '2026',
      label: 'Graduation Year',
      desc: 'Aditya College of Engineering',
    },
    {
      icon: <Award size={24} className="stat-icon-color-2" />,
      value: '7.2 / 10',
      label: 'B.Tech CGPA',
      desc: 'Electrical & Electronics Engineering',
    },
    {
      icon: <Code size={24} className="stat-icon-color-3" />,
      value: 'Python',
      label: 'Core Skill',
      desc: 'Data Processing & Analytics',
    },
    {
      icon: <BarChart size={24} className="stat-icon-color-4" />,
      value: 'Power BI',
      label: 'Analytics',
      desc: 'Interactive Dashboards & Reporting',
    },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Professional Background</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Bio text block */}
          <div className="about-bio">
            <h3 className="about-bio-title">DASARI NANDA KISHOR</h3>
            <p className="about-bio-text">
              I'm an enthusiastic Data Analyst and recent B.Tech graduate with a strong foundation in 
              Python, SQL, Excel, Power BI, and MySQL. I enjoy working with data, identifying meaningful 
              patterns, building analytical solutions, and presenting insights through clear reports and 
              visualizations.
            </p>
            <p className="about-bio-text">
              I am currently working as a Data Analyst Intern at <strong>Algonex IT Solutions</strong>, 
              where I am gaining practical experience with Python, SQL, and Power BI.
            </p>
            <p className="about-bio-text font-highlight">
              My goal is to build data-driven solutions that solve real-world problems and support better 
              decision-making.
            </p>
          </div>

          {/* Key metrics grid */}
          <div className="about-stats-grid">
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-card stat-card">
                <div className="stat-icon-wrapper">
                  {stat.icon}
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
