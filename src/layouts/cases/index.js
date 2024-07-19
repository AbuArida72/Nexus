// src/DisputePage.js
import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import "./dispute.css";
import MDTypography from "components/MDTypography";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [isProceedEnabled, setIsProceedEnabled] = useState(false);
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

  const handleCheck = () => {
    // Simulate phone number validation
    if (phoneNumber) {
      setNationalId("2000854684");
      setIsProceedEnabled(true);
    } else {
      alert("Please enter a mobile phone number.");
    }
  };

  return (
    <DashboardLayout>
      <MDBox className="container">
        <MDBox className="auth-section">
          <h1>User Authentication</h1>
          <MDBox className="auth-form">
            <label htmlFor="phoneNumber" className="form-label">
              Enter Mobile Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button className="check-btn" onClick={handleCheck}>
              Check
            </button>
            <MDBox className="auth-form">
              <label htmlFor="nationalId" className="form-label">
                National ID:
              </label>
              <input
                type="text"
                id="phoneNumber"
                className="form-control"
                value={nationalId}
                disabled
              />
              <MDBox mt={3} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth disabled={!isProceedEnabled}>
                  Proceed
                </MDButton>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={100}>
          <Card>
            <MDBox p={3} textAlign="center">
              <MDTypography variant="h2" color="Red">
                Dispute Request
              </MDTypography>
              <MDBox mt={3}>
                <MDTypography variant="h7" color="Red">
                  Name : Lara Larvana
                </MDTypography>
              </MDBox>
              <MDBox mt={3} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={() => handleDisputeTypeChange("beneficiary")}
                >
                  Beneficiary account not credited
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={() => handleDisputeTypeChange("misdirected")}
                >
                  Misdirected payment
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1}>
                <MDButton
                  variant="gradient"
                  color="info"
                  fullWidth
                  onClick={() => handleDisputeTypeChange("alias")}
                >
                  Alias mobile number is used by the wrong customer
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1}>
                <label htmlFor="disputeSelect" className="form-label">
                  Select Dispute
                </label>
                <select
                  id="disputeSelect"
                  className="form-control"
                  onChange={handleDisputeChange}
                  value={selectedDispute}
                  disabled={isDropdownDisabled}
                  style={{ width: "100%" }}
                >
                  <option value="">-- Select Dispute --</option>
                  {disputeOptions.map((option, index) => (
                    <option key={index} value={option.MESSAGE_ID}>
                      {option.MESSAGE_ID} - {option.RESULT_DESCRIPTION}
                    </option>
                  ))}
                </select>
              </MDBox>
              <MDBox mt={3} mb={1}>
                <MDButton variant="gradient" color="info" fullWidth onClick={handleSubmit}>
                  Submit
                </MDButton>
              </MDBox>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
};

export default DisputePage;
