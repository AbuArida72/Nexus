import React from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";

const CallLogTable = () => {
  // Hardcoded transcript data
  const transcript = [
    {
      speaker: "Customer",
      message: "Hello, I need to open a dispute on my recent transaction."
    },
    {
      speaker: "Agent",
      message:
        "Sure, I can help with that. Can you please provide me with the transaction details?"
    },
    {
      speaker: "Customer",
      message: "Yes, the transaction was on July 15th, for $250 at ABC Store."
    },
    {
      speaker: "Agent",
      message: "Thank you for the information. Let me pull up the details for you."
    },
    {
      speaker: "Customer",
      message: "I also have a concern about a charge from June 10th."
    },
    {
      speaker: "Agent",
      message:
        "I will look into that as well. Please give me a moment."
    },
    {
      speaker: "Customer",
      message: "Sure, I'll wait."
    },
    {
      speaker: "Agent",
      message:
        "I have opened a dispute for the transaction on July 15th and noted your concern about the charge from June 10th. You will receive an update shortly."
    },
    {
      speaker: "Customer",
      message: "Thank you for your help!"
    },
    {
      speaker: "Agent",
      message: "You're welcome. Have a great day!"
    }
  ];

  return (
    <MDBox>
      <MDTypography variant="h6" fontWeight="bold" mb={2}>
        Call log
      </MDTypography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Speaker</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transcript.map((entry, index) => (
              <TableRow key={index}>
                <TableCell>{entry.speaker}</TableCell>
                <TableCell>{entry.message}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MDBox>
  );
};

export default CallLogTable;
