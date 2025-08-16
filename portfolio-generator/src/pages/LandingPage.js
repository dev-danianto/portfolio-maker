import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="http://portfolio.danianto.xyz" target="_blank" rel="noopener noreferrer">Contact Dev</a></li>
        </ul>
      </nav>
      <section id="home">
        <h1>Welcome to the Portfolio Generator</h1>
        <p>Create your professional portfolio in minutes.</p>
        <button onClick={onGetStarted} className="get-started-btn">Get Started</button>
      </section>
      <section id="about">
        <h2>About</h2>
        <p>This application helps you create a clean, modern, and professional portfolio. It also provides an ATS-friendly CV maker to help you land your dream job.</p>
      </section>
    </div>
  );
};

export default LandingPage;
