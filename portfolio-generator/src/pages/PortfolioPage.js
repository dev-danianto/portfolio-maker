import React, { useState } from 'react';
import '../styles/PortfolioPage.css';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import DataForm from '../components/DataForm';
import CvView from '../components/CvView';
import ExportView from '../components/ExportView';

const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: 'Your Name',
    title: 'Your Title',
    about: 'A little bit about yourself.',
    profilePicture: null,
    projects: [{ title: 'Project 1', description: 'A description of your project.' }],
    education: [{ school: 'Test University', degree: 'B.S. in Computer Science', years: '2020-2024' }],
    skills: 'HTML, CSS, JavaScript',
    contact: 'your.email@example.com'
  });

  const [view, setView] = useState('portfolio'); // 'portfolio', 'cv', or 'export'

  const handleDataChange = (newData) => {
    setPortfolioData(newData);
  };

  const renderView = () => {
    if (view === 'portfolio') {
      return (
        <>
          <Header name={portfolioData.name} title={portfolioData.title} profilePicture={portfolioData.profilePicture} />
          <About about={portfolioData.about} />
          <Projects projects={portfolioData.projects} />
          <Education education={portfolioData.education} />
          <Skills skills={portfolioData.skills} />
          <Contact contact={portfolioData.contact} />
        </>
      );
    } else if (view === 'cv') {
      return <CvView data={portfolioData} />;
    } else if (view === 'export') {
      return <ExportView data={portfolioData} />;
    }
  };

  return (
    <div className="portfolio-page">
      <DataForm onDataChange={handleDataChange} />
      <div className="portfolio-preview">
        <div>
          <button onClick={() => setView('portfolio')}>Portfolio</button>
          <button onClick={() => setView('cv')}>CV</button>
          <button onClick={() => setView('export')}>Export</button>
        </div>
        {renderView()}
      </div>
    </div>
  );
};

export default PortfolioPage;
