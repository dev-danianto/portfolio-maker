import React from 'react';

const Education = ({ education }) => {
  return (
    <section>
      <h2>Education</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
              <span>{edu.years}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
