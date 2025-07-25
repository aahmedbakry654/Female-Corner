import React from 'react';
import './Looding.css';

function Loading() {
  return (
    <div className="loading-container">
      <img
        src="/photo/photo1.jpg"
        alt="Loading"
        className="loading-image"
      />
      <h2>Loading...</h2>
    </div>
  );
}

export default Loading;