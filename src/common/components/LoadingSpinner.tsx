import React from 'react';
import '../../theme/LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loader-container">
      
      <div className="logo-oval">
        <span className="logo-main">My</span>
        <span className="logo-friend">Friend</span>
        <span className="logo-subtext">Drug's • Mart • Deli</span>
        {/* <div className="logo-tag">
          <span>MR</span>
        </div> */}
      </div>
      <span className="loader"></span>
    </div>
    
  );
};

export default LoadingSpinner;
