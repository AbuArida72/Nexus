// src/DisputePage.js
import React from "react";
import "./dispute.css";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const DisputePage = () => {
  return (
    <MDBox className="container">
      <h1>Dispute Management System</h1>
      {/* <MDBox className="user-info">
      <p><strong>Name:</strong> Lara Larvana</p>
      <p><strong>National ID:</strong> 2008546780</p>
      <p><strong>Mobile number:</strong> 123456</p>
      </MDBox> */}
      <MDBox className="dispute-type-buttons">
        <button className={ `dispute-btn ${disputeType === 'beneficiary' ? 'btn-active' : '' }`} onClick={() => handleDisputeTypeChange( 'beneficiary' )}>
          Beneficiary account not credited
        </button>
        <button className={`dispute-btn ${disputeType === 'misdirected' ? 'btn-active' : ''}`} onClick={() => handleDisputeTypeChange('misdirected')}>
          Misdirected payment
        </button>
        <button className={`dispute-btn ${disputeType === 'alias' ? 'btn-active' : ''}`} onClick={() => handleDisputeTypeChange('alias')}>
          Alias mobile number is used by the wrong customer
        </button>
      </MDBox>
      <MDBox className="form-section">
        <label htmlFor="disputeSelect" className="form-label">Select Dispute</label>
        <select
          id="disputeSelect"
          className="form-control"
          onChange={handleDisputeChange}
          value={selectedDispute}
          disabled={isDropdownDisabled}
        >
          <option value="">-- Select Dispute --</option>
          {disputeOptions.map((option, index) => (
            <option key={index} value={option.MESSAGE_ID}>
              {option.MESSAGE_ID} - {option.RESULT_DESCRIPTION}
            </option>
          ))}
        </select>
      </MDBox>
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </MDBox>
  );
};

export default DisputePage;
