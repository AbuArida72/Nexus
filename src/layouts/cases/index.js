// src/DisputePage.js
import React, { useState } from "react";
import "./dispute.css";

import MDBox from "components/MDBox";

const disputeOptions = [
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9284820",
    TRANS_ID: "FRALJO21AXXX9284820",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO21",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9285240",
    TRANS_ID: "FRALJO21AXXX9285240",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO22",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9285410",
    TRANS_ID: "FRALJO21AXXX9285410",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO23",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9285582",
    TRANS_ID: "FRALJO21AXXX9285582",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO24",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9285750",
    TRANS_ID: "FRALJO21AXXX9285750",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO25",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
  {
    MSG_TYPE: "pacs.008.001.08",
    MESSAGE_ID: "FRALJO21AXXX9285923",
    TRANS_ID: "FRALJO21AXXX9285923",
    AMOUNT: "60.00",
    VALUE_DATE: "2024-07-17",
    SENDER_BIC: "FRALJO23",
    RECEIVER_BIC: "FRALJO26",
    CURR_CODE: "JOD",
    RESULT_DESCRIPTION: "Success",
  },
];

const DisputePage = () => {
  const [selectedDispute, setSelectedDispute] = useState("");
  const [disputeType, setDisputeType] = useState("");
  const [isDropdownDisabled, setIsDropdownDisabled] = useState(true);

  const handleDisputeChange = (event) => {
    setSelectedDispute(event.target.value);
  };

  const handleDisputeTypeChange = (type) => {
    setDisputeType(type);
    if (type === "beneficiary" || type === "misdirected") {
      setIsDropdownDisabled(false);
    } else {
      setIsDropdownDisabled(true);
      setSelectedDispute("");
    }
  };

  const handleSubmit = () => {
    if (disputeType === "alias" || (selectedDispute && disputeType)) {
      console.log("Selected Dispute:", selectedDispute);
      console.log("Dispute Type:", disputeType);
      alert(`Dispute submitted:\nDispute ID: ${selectedDispute}\nDispute Type: ${disputeType}`);
    } else {
      alert("Please select a dispute and dispute type.");
    }
  };

  return (
    <MDBox className="container">
      <h1>Dispute Management System</h1>
      <MDBox className="user-info">
        <p>
          <strong>Name:</strong> Lara Larvana
        </p>
        <p>
          <strong>National ID:</strong> 2008546780
        </p>
        <p>
          <strong>Mobile number:</strong> 123456
        </p>
      </MDBox>
      <MDBox className="dispute-type-buttons">
        <button
          className={`dispute-btn ${disputeType === "beneficiary" ? "btn-active" : ""}`}
          onClick={() => handleDisputeTypeChange("beneficiary")}
        >
          Beneficiary account not credited
        </button>
        <button
          className={`dispute-btn ${disputeType === "misdirected" ? "btn-active" : ""}`}
          onClick={() => handleDisputeTypeChange("misdirected")}
        >
          Misdirected payment
        </button>
        <button
          className={`dispute-btn ${disputeType === "alias" ? "btn-active" : ""}`}
          onClick={() => handleDisputeTypeChange("alias")}
        >
          Alias mobile number is used by the wrong customer
        </button>
      </MDBox>
      <MDBox className="form-section">
        <label htmlFor="disputeSelect" className="form-label">
          Select Dispute
        </label>
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
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </MDBox>
  );
};

export default DisputePage;
