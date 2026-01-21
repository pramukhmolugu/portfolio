import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Pramukh Chandra Molugu - Data Analyst / BI Developer</title>
        <meta name="description" content="Data Analyst / BI Developer with 8+ years of experience in SQL, Power BI, Tableau, ThoughtSpot, and ETL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] via-[#0a0e1a] to-[#1a1f35] text-white">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }

          .floating-icon {
            animation: float 6s ease-in-out infinite;
            opacity: 0.6;
            transition: opacity 0.3s ease;
          }

          .floating-icon:hover {
            opacity: 1;
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          .floating-icon:nth-child(1) { animation-delay: 0s; }
          .floating-icon:nth-child(2) { animation-delay: 0.5s; }
          .floating-icon:nth-child(3) { animation-delay: 1s; }
          .floating-icon:nth-child(4) { animation-delay: 1.5s; }
          .floating-icon:nth-child(5) { animation-delay: 2s; }
          .floating-icon:nth-child(6) { animation-delay: 2.5s; }
          .floating-icon:nth-child(7) { animation-delay: 3s; }
          .floating-icon:nth-child(8) { animation-delay: 3.5s; }

          .card-hover {
            transition: all 0.3s ease;
            border: 1px solid rgba(59, 130, 246, 0.3);
          }

          .card-hover:hover {
            transform: translateY(-5px);
            border-color: rgba(59, 130, 246, 0.6);
            box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
          }

          .skill-tag {
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.4);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            transition: all 0.3s ease;
          }

          .skill-tag:hover {
            background: rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.6);
            transform: translateY(-2px);
          }

          .btn-primary {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            padding: 12px 32px;
            border-radius: 25px;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            color: white;
            font-size: 14px;
          }

          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          }

          .nav-link {
            transition: color 0.3s ease;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
          }

          .nav-link:hover {
            color: #3b82f6;
          }

          .timeline-line {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, transparent, #3b82f6, transparent);
          }
        `}</style>

        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0e1a]/90 backdrop-blur-md shadow-lg' : ''}`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-400">Pramukh Molugu</div>
            <div className="flex gap-8">
              <span className="nav-link" onClick={() => scrollToSection('experience')}>Experience</span>
              <span className="nav-link" onClick={() => scrollToSection('projects')}>Projects</span>
              <span className="nav-link" onClick={() => scrollToSection('about')}>About</span>
              <span className="nav-link" onClick={() => scrollToSection('contact')}>Contact</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
          {/* Floating Tech Icons - Data Analytics themed */}
          <div className="absolute inset-0 pointer-events-none">
            {/* SQL Icon */}
            <div className="floating-icon absolute top-20 left-10" style={{animationDelay: '0s'}}>
              <svg width="60" height="60" viewBox="0 0 128 128" fill="#3b82f6">
                <path d="M64 0C28.656 0 0 14.328 0 32v64c0 17.672 28.656 32 64 32s64-14.328 64-32V32C128 14.328 99.344 0 64 0zm0 112c-26.51 0-48-7.164-48-16s21.49-16 48-16 48 7.164 48 16-21.49 16-48 16zm48-32c0 8.836-21.49 16-48 16s-48-7.164-48-16V64.48c11.797 7.344 31.312 11.52 48 11.52s36.203-4.176 48-11.52V80zm0-32c0 8.836-21.49 16-48 16s-48-7.164-48-16V32.48c11.797 7.344 31.312 11.52 48 11.52s36.203-4.176 48-11.52V48z"/>
              </svg>
            </div>
            
            {/* Python Icon */}
            <div className="floating-icon absolute top-32 right-20" style={{animationDelay: '0.5s'}}>
              <svg width="65" height="65" viewBox="0 0 128 128" fill="#3b82f6">
                <path d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"/>
              </svg>
            </div>

            {/* Power BI / Chart Icon */}
            <div className="floating-icon absolute bottom-40 left-24" style={{animationDelay: '1s'}}>
              <svg width="55" height="55" viewBox="0 0 128 128" fill="#3b82f6">
                <rect x="16" y="64" width="24" height="48" rx="4"/>
                <rect x="52" y="32" width="24" height="80" rx="4"/>
                <rect x="88" y="48" width="24" height="64" rx="4"/>
              </svg>
            </div>

            {/* Tableau Icon */}
            <div className="floating-icon absolute top-40 right-32" style={{animationDelay: '1.5s'}}>
              <svg width="50" height="50" viewBox="0 0 128 128" fill="#3b82f6">
                <rect x="56" y="8" width="16" height="112"/>
                <rect x="8" y="56" width="112" height="16"/>
                <rect x="32" y="32" width="16" height="64"/>
                <rect x="80" y="32" width="16" height="64"/>
                <rect x="32" y="32" width="64" height="16"/>
                <rect x="32" y="80" width="64" height="16"/>
              </svg>
            </div>

            {/* AWS Icon */}
            <div className="floating-icon absolute bottom-24 right-16" style={{animationDelay: '2s'}}>
              <svg width="70" height="70" viewBox="0 0 128 128" fill="#3b82f6">
                <path d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679-7.004V82.478l-16.297 1.108zm34.276 0l-15.073.765v15.759l15.073 6.362V83.586zm17.138-6.12l-11.4 4.896 10.559 4.514 12.241-4.514-11.4-4.896zm-17.138 6.12l-.382 22.034 16.679-7.004V82.478l-16.297 1.108zm34.276 0l-15.073.765v15.759l15.073 6.362V83.586zM56.609 61.909l11.4-4.897-10.559-4.514-12.241 4.514 11.4 4.897zm-17.138-6.121l.382-22.034-16.679 7.004v16.138l16.297-1.108zm34.276 0l15.073-.765V39.264l-15.073-6.362v22.886z"/>
              </svg>
            </div>

            {/* ETL/Data Pipeline Icon */}
            <div className="floating-icon absolute top-1/2 left-16" style={{animationDelay: '2.5s'}}>
              <svg width="65" height="65" viewBox="0 0 128 128" fill="#3b82f6">
                <circle cx="20" cy="64" r="12"/>
                <circle cx="108" cy="64" r="12"/>
                <rect x="32" y="60" width="64" height="8"/>
                <polygon points="88,52 96,64 88,76"/>
              </svg>
            </div>

            {/* Excel Icon */}
            <div className="floating-icon absolute bottom-32 left-1/3" style={{animationDelay: '3s'}}>
              <svg width="60" height="60" viewBox="0 0 128 128" fill="#3b82f6">
                <path d="M97.442 23.795H30.558C27.488 23.795 25 26.283 25 29.353v69.294c0 3.07 2.488 5.558 5.558 5.558h66.884c3.07 0 5.558-2.488 5.558-5.558V29.353c0-3.07-2.488-5.558-5.558-5.558zm-1.116 68.41H31.674V35.795h64.652v56.41z"/>
                <path d="M45.233 85.842h8.372l5.023-13.907 5.256 13.907h8.372L61.674 64 72.256 42.158h-8.372l-5.256 13.907-5.023-13.907h-8.372L56.326 64z"/>
              </svg>
            </div>

            {/* Cloud/Analytics Icon */}
            <div className="floating-icon absolute top-1/3 right-1/4" style={{animationDelay: '3.5s'}}>
              <svg width="55" height="55" viewBox="0 0 128 128" fill="#3b82f6">
                <path d="M97.5 45.5c-1.4-15.2-14.2-27.1-29.8-27.1-11.9 0-22.3 7-27.1 17-1.3-.3-2.6-.4-4-.4-10.2 0-18.5 8.3-18.5 18.5 0 .7 0 1.4.1 2.1C10.8 57.8 5 65.4 5 74.5 5 86.9 15.1 97 27.5 97h63c12.4 0 22.5-10.1 22.5-22.5 0-11.5-8.7-21-19.9-22.4.3-2.1.4-4.3.4-6.6z"/>
              </svg>
            </div>
          </div>

          <div className="text-center z-10 max-w-4xl px-6">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Pramukh Chandra Molugu
            </h1>
            <p className="text-2xl text-gray-300 mb-2">
              Data Analyst / BI Developer
            </p>
            <p className="text-lg text-blue-400 mb-4">
              SQL • Power BI • Tableau • ThoughtSpot • ETL
            </p>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              8+ years building executive dashboards, automated reporting pipelines,<br />
              and scalable datasets across telecom, healthcare, and manufacturing domains.
            </p>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('experience')}
            >
              View My Work
            </button>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="experience" className="py-32 bg-[#0a0e1a]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16">Work Experience</h2>
            
            <div className="space-y-8 relative pl-8">
              <div className="timeline-line"></div>
              
              {/* Data Engineer / Analyst - Comcast */}
              <div className="card-hover bg-[#1a1f35]/50 backdrop-blur-sm p-8 rounded-2xl relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Data Engineer / Analyst (Contract)</h3>
                    <p className="text-blue-400 text-sm">Comcast Corporation — Philadelphia, PA</p>
                  </div>
                  <span className="text-gray-400 text-sm">May 2025 - Present</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Partnered with product, marketing, and operations to define KPIs and answer telecom OSS/BSS business questions using multi-source data (CRM, BPM, billing, network)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Built and maintained executive dashboards in ThoughtSpot/Power BI/Tableau, publishing 12 KPI dashboards with daily/weekly refreshes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Automated extracts and validations via SQL + AWS S3 + Rundeck + JSON/YAML configs, reducing manual reporting effort by 30–40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Developed Python scripts to automate data extraction, validation, and KPI reporting workflows, improving reporting reliability and data quality</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">ThoughtSpot</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">Rundeck</span>
                  <span className="skill-tag">JSON</span>
                  <span className="skill-tag">YAML</span>
                  <span className="skill-tag">Trino/Presto</span>
                </div>
              </div>

              {/* Data Analyst / SQL Developer - Skygen */}
              <div className="card-hover bg-[#1a1f35]/50 backdrop-blur-sm p-8 rounded-2xl relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Data Analyst / SQL Developer</h3>
                    <p className="text-blue-400 text-sm">Skygen USA LLC — Menomonee Falls, WI</p>
                  </div>
                  <span className="text-gray-400 text-sm">Jan 2022 - Mar 2025</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Developed and scheduled SSRS reports (matrix, drill-down, cascaded, multi-value, subreports) using parameters/expressions, delivering 40 production reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Built complex T-SQL stored procedures and integrated business rules using SSIS ETL, reducing runtime by 40–60% on heavy reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Resolved reporting enhancement tickets using Azure/Service Desk, completing 25 tickets/month with strong QA and dataset validation</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">SSRS</span>
                  <span className="skill-tag">SSIS</span>
                  <span className="skill-tag">T-SQL</span>
                  <span className="skill-tag">SQL Server</span>
                  <span className="skill-tag">Azure</span>
                  <span className="skill-tag">Excel</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">Power BI</span>
                </div>
              </div>

              {/* Business Intelligence Developer - EMR */}
              <div className="card-hover bg-[#1a1f35]/50 backdrop-blur-sm p-8 rounded-2xl relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Business Intelligence Developer</h3>
                    <p className="text-blue-400 text-sm">EMR Metal Recycling — Camden, NJ</p>
                  </div>
                  <span className="text-gray-400 text-sm">Jul 2020 - Dec 2021</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Designed enterprise warehouse/reporting solutions using T-SQL, SSIS, SSRS, Tableau, and Azure reporting across 20–30 business functions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Built scalable ETL/data movement pipelines using SSIS/replication/Data Factory, supporting 15 recurring feeds and improving reporting availability by 20–30%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Improved database/report performance through monitoring and SQL best practices, reducing recurring incidents by 25–35%</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">T-SQL</span>
                  <span className="skill-tag">SSIS</span>
                  <span className="skill-tag">SSRS</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">Azure Data Factory</span>
                  <span className="skill-tag">SQL Server</span>
                </div>
              </div>

              {/* Data Analyst - Adaequare */}
              <div className="card-hover bg-[#1a1f35]/50 backdrop-blur-sm p-8 rounded-2xl relative">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Data Analyst</h3>
                    <p className="text-blue-400 text-sm">Adaequare — Hyderabad, India</p>
                  </div>
                  <span className="text-gray-400 text-sm">Jul 2015 - Dec 2018</span>
                </div>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Built ETL and reporting for healthcare claims/eligibility datasets, improving data integrity by 35% through validation rules and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Developed Tableau/SSRS dashboards and optimized SQL performance, reducing report runtime by 50%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3">•</span>
                    <span>Delivered ad-hoc extracts and stakeholder analysis using SQL/Excel/Power BI, handling 5–10 requests/week during peak demand</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Tableau</span>
                  <span className="skill-tag">SSRS</span>
                  <span className="skill-tag">Excel</span>
                  <span className="skill-tag">Power BI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="py-32 bg-[#1a1f35]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-4xl font-bold">Featured Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ThoughtSpot Export Pipeline */}
              <div className="card-hover bg-[#0a0e1a]/50 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">ThoughtSpot Automated Export Pipeline</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Built a Rundeck-driven export pipeline using JSON/YAML configs and AWS S3 delivery, enabling automated KPI extracts with validation-ready outputs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag">Rundeck</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">JSON</span>
                  <span className="skill-tag">YAML</span>
                </div>
              </div>

              {/* Telecom Analytics */}
              <div className="card-hover bg-[#0a0e1a]/50 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">Telecom Order & Toast Trend Analytics</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Developed trend dashboards and reporting using Trino/Oracle SQL + Power BI/ThoughtSpot to track impacted orders/toasts/accounts by day for anomaly detection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Power BI</span>
                  <span className="skill-tag">ThoughtSpot</span>
                  <span className="skill-tag">Trino/Presto</span>
                </div>
              </div>

              {/* SSRS Modernization */}
              <div className="card-hover bg-[#0a0e1a]/50 backdrop-blur-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-3">SSRS Reporting Modernization</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Created and optimized SSRS operational reporting with parameters/subreports and performance tuning using execution plans and indexing for healthcare operations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="skill-tag">SSRS</span>
                  <span className="skill-tag">SSIS</span>
                  <span className="skill-tag">T-SQL</span>
                  <span className="skill-tag">SQL Server</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-32 bg-[#0a0e1a]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16">About Me</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    I'm a Data Analyst / BI Developer with 8+ years of experience turning complex datasets into reliable dashboards, automated reporting, and decision-ready insights. I've worked across telecom, healthcare, and manufacturing domains, supporting stakeholders with KPI monitoring, performance optimization, and data quality improvements.
                  </p>
                  <p>
                    I enjoy solving messy data problems, improving reporting efficiency, and building scalable reporting frameworks that teams can trust. I'm especially interested in analytics engineering, executive reporting, and automation-driven BI solutions.
                  </p>
                  <p>
                    Outside work, I focus on continuous learning, exploring new data tools, and improving my end-to-end engineering + analytics skillset.
                  </p>
                </div>
              </div>

              <div className="card-hover bg-[#1a1f35]/50 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend / BI Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag">Power BI</span>
                      <span className="skill-tag">Tableau</span>
                      <span className="skill-tag">ThoughtSpot</span>
                      <span className="skill-tag">SSRS</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Backend / Data</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag">SQL (T-SQL)</span>
                      <span className="skill-tag">Oracle</span>
                      <span className="skill-tag">Trino/Presto</span>
                      <span className="skill-tag">SSIS</span>
                      <span className="skill-tag">Data Modeling</span>
                      <span className="skill-tag">ETL</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Cloud / Platforms</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag">AWS S3</span>
                      <span className="skill-tag">Databricks</span>
                      <span className="skill-tag">Azure Data Factory</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Programming & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">Git</span>
                      <span className="skill-tag">Excel</span>
                      <span className="skill-tag">JSON</span>
                      <span className="skill-tag">YAML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white text-gray-900">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:pramukhmolugu@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  pramukhmolugu@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Downingtown, PA</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex justify-center gap-6">
                <a href="https://linkedin.com/in/pramukhm/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0a0e1a] py-6 text-center text-gray-400 text-sm">
          <p>© 2025 Pramukh Chandra Molugu. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
