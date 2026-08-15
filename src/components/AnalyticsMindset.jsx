import React, { useState } from 'react';
import { Database, Filter, Cpu, TrendingUp, PieChart, CheckSquare } from 'lucide-react';

const AnalyticsMindset = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      num: '01',
      title: 'Collect Data',
      desc: 'Gathering raw datasets from databases, SQL servers, spreadsheets, or APIs.',
      icon: <Database size={24} />,
    },
    {
      num: '02',
      title: 'Clean Data',
      desc: 'Filtering noise, handling nulls, formatting columns, and verifying data integrity.',
      icon: <Filter size={24} />,
    },
    {
      num: '03',
      title: 'Analyze Data',
      desc: 'Applying statistical filters, aggregating key metrics, and querying with SQL/Python.',
      icon: <Cpu size={24} />,
    },
    {
      num: '04',
      title: 'Identify Trends',
      desc: 'Extracting historical patterns, calculating correlations, and locating anomalies.',
      icon: <TrendingUp size={24} />,
    },
    {
      num: '05',
      title: 'Visualize Insights',
      desc: 'Building responsive Power BI dashboards and narrative data visualizations.',
      icon: <PieChart size={24} />,
    },
    {
      num: '06',
      title: 'Support Decisions',
      desc: 'Translating visualizations into clear summaries for stakeholders to drive strategy.',
      icon: <CheckSquare size={24} />,
    },
  ];

  return (
    <section id="mindset" className="section mindset-section">
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Methodology</span>
          <h2 className="section-title">How I Approach Data</h2>
        </div>

        <div className="mindset-container">
          
          {/* Animated Data-Flow Path behind cards */}
          <div className="data-flow-svg-container">
            <svg className="data-flow-svg" viewBox="0 0 900 300" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cyan-blue-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#4facfe" />
                </linearGradient>
              </defs>
              <path
                d="M 150 100 Q 300 50 450 100 T 750 100 Q 750 200 450 200 T 150 200"
                className="data-flow-path-bg"
              />
              <path
                d="M 150 100 Q 300 50 450 100 T 750 100 Q 750 200 450 200 T 150 200"
                className="data-flow-path-active"
              />
            </svg>
          </div>

          {/* Six-step Grid */}
          <div className="mindset-grid">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`glass-card mindset-card step-${step.num} ${activeStep === idx ? 'hovered' : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="mindset-card-header">
                  <span className="mindset-num">{step.num}</span>
                  <div className="mindset-icon-box">
                    {step.icon}
                  </div>
                </div>

                <h3 className="mindset-card-title">{step.title}</h3>
                
                <p className="mindset-card-desc">{step.desc}</p>

                {/* Subtle indicator dot at bottom */}
                <div className="mindset-indicator-dot"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AnalyticsMindset;
