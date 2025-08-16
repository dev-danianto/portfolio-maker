import React, { useState } from 'react';
import LandingPage from './LandingPage';
import PortfolioPage from './PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToPortfolio = () => {
    setCurrentPage('portfolio');
  };

  return (
    <div className="App">
      {currentPage === 'landing' ? (
        <LandingPage onGetStarted={navigateToPortfolio} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
}

export default App;
