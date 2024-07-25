import React from 'react';
import './App.css';

const CardComponent = ({ title, value }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="p-3 blue-gradient-box">
        <h1>{title}</h1>
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default CardComponent;
