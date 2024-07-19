// src/DisputePage.js
import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const disputeOptions = [
  // ... same as before
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
    <DashboardLayout>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <MDBox p={3} textAlign="center">
              <h1>Dispute Management System</h1>
              <MDBox mt={3}>
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
