import React, { useState, useRef } from "react";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import MDTypography from "components/MDTypography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./dispute.css";

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
  const [aliasText, setAliasText] = useState("");
  const [isDisputeSectionVisible, setIsDisputeSectionVisible] = useState(false);

  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const disputeSectionRef = useRef(null);

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
      console.log("Alias Text:", aliasText);
      alert(
        `Dispute submitted:\nDispute ID: ${selectedDispute}\nDispute Type: ${disputeType}\nAlias Text: ${aliasText}`
      );
    } else {
      setErrorMessage("Please select a dispute and dispute type.");
      setErrorModalOpen(true);
    }
  };

  const handleCheck = () => {
    // Simulate phone number validation
    if (phoneNumber) {
      setNationalId("2000854684");
      setIsProceedEnabled(true);
    } else {
      setErrorMessage("Please enter a mobile phone number.");
      setErrorModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setErrorModalOpen(false);
    setErrorMessage("");
  };

  const handleProceed = () => {
    setIsDisputeSectionVisible(true);
    setTimeout(() => {
      if (disputeSectionRef.current) {
        disputeSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay to ensure the section is visible before scrolling
  };

  return (
    <DashboardLayout>
      <MDBox className="container">
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <MDBox p={3} textAlign="center">
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
                      id="nationalId"
                      className="form-control"
                      value={nationalId}
                      disabled
                    />
                    <MDBox mt={3} mb={1}>
                      <MDButton
                        variant="gradient"
                        color="info"
                        fullWidth
                        disabled={!isProceedEnabled}
                        onClick={handleProceed}
                      >
                        Proceed
                      </MDButton>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      {isDisputeSectionVisible && (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Card>
              <MDBox p={3} textAlign="center" ref={disputeSectionRef}>
                <MDTypography variant="h2" color="Red">
                  Dispute Request
                </MDTypography>
                <MDBox mt={3}>
                  <MDTypography variant="h7" color="Red">
                    Name: Lara Larvana
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
                <MDBox mt={3} mb={1} display="flex" alignItems="center">
                  <MDButton
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={() => handleDisputeTypeChange("alias")}
                  >
                    Alias mobile number is used by the wrong customer
                  </MDButton>
                  {disputeType === "alias" && (
                    <input
                      type="text"
                      placeholder="Enter alias text"
                      value={aliasText}
                      onChange={(e) => setAliasText(e.target.value)}
                      className="form-control"
                      style={{ marginLeft: "10px" }}
                    />
                  )}
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
      )}
      <Modal
        open={errorModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title">Error</h2>
          <p id="modal-modal-description">{errorMessage}</p>
          <MDBox mt={3} mb={1}>
            <MDButton variant="gradient" color="info" fullWidth onClick={handleCloseModal}>
              Close
            </MDButton>
          </MDBox>
        </Box>
      </Modal>
    </DashboardLayout>
  );
};

export default DisputePage;
