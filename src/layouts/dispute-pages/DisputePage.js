// src/DisputePage.js
import React from 'react';
import './dispute.css';


const DisputePage = () => {
  return (
    <div className="dispute-container">
      <h1>Choose Dispute Type</h1>
      <div className="options-container">
        <button className="option-button">Beneficiary Account Not Credited</button>
        <button className="option-button">Misdirected Payment</button>
        <button className="option-button">Alias Mobile Number is Used by the Wrong Customer</button>
      </div>
    </div>
  );
};

export default DisputePage;
