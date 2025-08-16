import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section>
      <h2>Projects</h2>
      <div className="timeline">
        {projects.map((project, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
