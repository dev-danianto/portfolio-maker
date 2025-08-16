import React, { useState } from 'react';

const DataForm = ({ onDataChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    about: '',
    profilePicture: null,
    projects: [{ title: '', description: '' }],
    education: [{ school: '', degree: '', years: '' }],
    skills: '',
    contact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newFormData = { ...formData, profilePicture: reader.result };
        setFormData(newFormData);
        onDataChange(newFormData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProjectChange = (index, e) => {
    const { name, value } = e.target;
    const projects = [...formData.projects];
    projects[index][name] = value;
    const newFormData = { ...formData, projects };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const addProject = () => {
    const newFormData = {
      ...formData,
      projects: [...formData.projects, { title: '', description: '' }]
    };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const removeProject = (index) => {
    const projects = [...formData.projects];
    projects.splice(index, 1);
    const newFormData = { ...formData, projects };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const education = [...formData.education];
    education[index][name] = value;
    const newFormData = { ...formData, education };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const addEducation = () => {
    const newFormData = {
      ...formData,
      education: [...formData.education, { school: '', degree: '', years: '' }]
    };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  const removeEducation = (index) => {
    const education = [...formData.education];
    education.splice(index, 1);
    const newFormData = { ...formData, education };
    setFormData(newFormData);
    onDataChange(newFormData);
  };

  return (
    <div className="form-container">
      <h3>Enter Your Information</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
          About Me:
          <textarea name="about" value={formData.about} onChange={handleChange} />
        </label>
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>

        <h4>Projects</h4>
        {formData.projects.map((project, index) => (
          <div key={index}>
            <label>
              Project Title:
              <input
                type="text"
                name="title"
                value={project.title}
                onChange={(e) => handleProjectChange(index, e)}
              />
            </label>
            <label>
              Project Description:
              <textarea
                name="description"
                value={project.description}
                onChange={(e) => handleProjectChange(index, e)}
              />
            </label>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="remove-project-btn"
            >
              Remove Project
            </button>
          </div>
        ))}
        <button type="button" onClick={addProject}>
          Add Project
        </button>

        <h4>Education</h4>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <label>
              School:
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </label>
            <label>
              Degree:
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </label>
            <label>
              Years:
              <input
                type="text"
                name="years"
                value={edu.years}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </label>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="remove-project-btn"
            >
              Remove Education
            </button>
          </div>
        ))}
        <button type="button" onClick={addEducation}>
          Add Education
        </button>

        <label>
          Skills (comma separated):
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
        </label>
        <label>
          Contact:
          <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
        </label>
      </form>
    </div>
  );
};

export default DataForm;
