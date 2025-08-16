import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import { portfolioCss } from '../styles/cssForExport';

const ExportView = ({ data }) => {
  const portfolioHtml = ReactDOMServer.renderToStaticMarkup(
    <html>
      <head>
        <title>{data.name}'s Portfolio</title>
        <style>{portfolioCss}</style>
      </head>
      <body>
        <Header name={data.name} title={data.title} profilePicture={data.profilePicture} />
        <About about={data.about} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        <Skills skills={data.skills} />
        <Contact contact={data.contact} />
      </body>
    </html>
  );

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    }, (err) => {
      alert('Failed to copy!');
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="export-view">
      <h2>Export Your Portfolio</h2>
      <p>Copy the HTML and CSS code below to use it in your own projects.</p>

      <h3>HTML</h3>
      <textarea readOnly value={portfolioHtml} style={{ width: '100%', height: '300px' }}/>
      <button onClick={() => copyToClipboard(portfolioHtml)}>Copy HTML</button>

      <h3>CSS</h3>
      <textarea readOnly value={portfolioCss} style={{ width: '100%', height: '300px' }}/>
      <button onClick={() => copyToClipboard(portfolioCss)}>Copy CSS</button>
    </div>
  );
};

export default ExportView;
