export const portfolioCss = `
/* src/styles/PortfolioPage.css */

.portfolio-page {
  display: flex;
  font-family: sans-serif;
  min-height: 100vh;
}

.form-container {
  width: 40%;
  padding: 2rem;
  background-color: #f8f8f8;
  border-right: 1px solid #ddd;
  overflow-y: auto;
}

.portfolio-preview {
  width: 60%;
  padding: 2rem;
  overflow-y: auto;
}

/* Form Styles */
.form-container h3 {
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.form-container form {
  display: flex;
  flex-direction: column;
}

.form-container label {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.form-container input[type="text"],
.form-container textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 0.5rem;
  font-size: 1rem;
}

.form-container button {
  background-color: #000;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.form-container button:hover {
  background-color: #333;
}

.form-container .remove-project-btn {
  background-color: #e74c3c;
}

.form-container .remove-project-btn:hover {
  background-color: #c0392b;
}

/* Portfolio Preview Styles */
.portfolio-preview header {
  text-align: center;
  margin-bottom: 3rem;
}

.portfolio-preview h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.portfolio-preview p {
  font-size: 1.2rem;
  color: #666;
}

.portfolio-preview section {
  margin-bottom: 3rem;
}

.portfolio-preview h2 {
  font-size: 2rem;
  border-bottom: 2px solid #000;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.portfolio-preview h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* CV View Styles */
.cv-view {
  font-family: 'Times New Roman', Times, serif; /* A standard, serif font */
  line-height: 1.5;
}

.cv-view h1 {
  font-size: 2em;
  text-align: center;
  margin-bottom: 0;
}

.cv-view header p {
  text-align: center;
  margin-top: 0;
  font-size: 1em;
}

.cv-view h2 {
  font-size: 1.5em;
  border-bottom: 1px solid #000;
  padding-bottom: 2px;
  margin-top: 1.5em;
}

.cv-view h3 {
  font-size: 1.2em;
  margin-bottom: 0.2em;
}

.cv-view .cv-item {
  margin-bottom: 1em;
}
`;
