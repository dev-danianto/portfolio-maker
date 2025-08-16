import React from 'react';

const CvView = ({ data }) => {
  return (
    <div className="cv-view">
      <header>
        <h1>{data.name}</h1>
        <p>{data.contact}</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>{data.about}</p>
      </section>
      <section>
        <h2>Skills</h2>
        <p>{data.skills}</p>
      </section>
      <section>
        <h2>Projects</h2>
        {data.projects.map((project, index) => (
          <div key={index} className="cv-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="cv-item">
            <h3>{edu.school}</h3>
            <p>{edu.degree}, {edu.years}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CvView;
