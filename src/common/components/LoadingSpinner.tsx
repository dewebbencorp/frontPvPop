import React from 'react';
import '../../theme/LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
    return (
      <div className="loader-container">
        <span className="loader"></span>
      </div>
    );
  };
  
  export default LoadingSpinner;