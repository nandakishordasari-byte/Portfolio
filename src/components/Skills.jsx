import React, { useState } from 'react';
import { Code2, BarChart3, Database as DbIcon, Construction, CheckCircle } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: null },
    { id: 'programming', name: 'Programming', icon: <Code2 size={16} /> },
    { id: 'analytics', name: 'Data Analytics', icon: <BarChart3 size={16} /> },
    { id: 'database', name: 'Database', icon: <DbIcon size={16} /> },
    { id: 'tools', name: 'Tools & Others', icon: <Construction size={16} /> },
  ];

  const skillsData = [
    // Programming
    {
      name: 'Python',
      category: 'programming',
      level: 85,
      desc: 'Data cleaning, scripting, libraries (Pandas, NumPy).',
    },
    {
      name: 'SQL',
      category: 'programming',
      level: 80,
      desc: 'Query writing, complex joins, subqueries, indexing.',
    },
    {
      name: 'HTML',
      category: 'programming',
      level: 80,
      desc: 'Semantic structure of web layouts.',
    },
    {
      name: 'CSS',
      category: 'programming',
      level: 75,
      desc: 'Modern layout styles, responsive variables, custom animations.',
    },
    // Data Analytics
    {
      name: 'Power BI',
      category: 'analytics',
      level: 85,
      desc: 'Dashboard design, modeling, DAX expressions, reporting.',
    },
    {
      name: 'Microsoft Excel',
      category: 'analytics',
      level: 90,
      desc: 'Pivot tables, VLOOKUP, formulas, data summaries.',
    },
    {
      name: 'Data Analysis',
      category: 'analytics',
      level: 80,
      desc: 'Identifying trends, descriptive statistics, EDA.',
    },
    {
      name: 'Data Visualization',
      category: 'analytics',
      level: 85,
      desc: 'Developing visual narratives, custom charts and reports.',
    },
    {
      name: 'Reporting',
      category: 'analytics',
      level: 80,
      desc: 'Translating numbers into actionable business insights.',
    },
    // Database
    {
      name: 'MySQL',
      category: 'database',
      level: 75,
      desc: 'Relational design, database management, query optimization.',
    },
    // Development & Tools
    {
      name: 'Git',
      category: 'tools',
      level: 70,
      desc: 'Version control system, branch and merge operations.',
    },
    {
      name: 'GitHub',
      category: 'tools',
      level: 75,
      desc: 'Code repository management and pull request pipelines.',
    },
    {
      name: 'VS Code',
      category: 'tools',
      level: 85,
      desc: 'Main IDE, debugging setups, extension packages.',
    },
    {
      name: 'Antigravity',
      category: 'tools',
      level: 80,
      desc: 'Agentic workflows, workspace automation, pair programming.',
    },
    {
      name: 'Microsoft Word',
      category: 'tools',
      level: 80,
      desc: 'Professional document editing and report design.',
    },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'programming':
        return <Code2 className="skill-icon text-cyan" size={18} />;
      case 'analytics':
        return <BarChart3 className="skill-icon text-blue" size={18} />;
      case 'database':
        return <DbIcon className="skill-icon text-purple" size={18} />;
      case 'tools':
        return <Construction className="skill-icon text-yellow" size={18} />;
      default:
        return <CheckCircle className="skill-icon" size={18} />;
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">My Stack</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>

        {/* Categories Tab Navigation */}
        <div className="skills-tabs">
          {skillCategories.map((tab) => (
            <button
              key={tab.id}
              className={`skills-tab-btn ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="glass-card skill-card-interactive">
              <div className="skill-card-top">
                <div className="skill-icon-outer">
                  {getCategoryIcon(skill.category)}
                </div>
                <h3 className="skill-name-text">{skill.name}</h3>
              </div>
              <p className="skill-description-text">{skill.desc}</p>
              
              {/* Skill proficiency indicator */}
              <div className="skill-level-container">
                <div className="skill-level-labels">
                  <span className="skill-level-title">Proficiency</span>
                  <span className="skill-level-value">{skill.level}%</span>
                </div>
                <div className="skill-level-bar-bg">
                  <div 
                    className={`skill-level-bar-fill fill-${skill.category}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
