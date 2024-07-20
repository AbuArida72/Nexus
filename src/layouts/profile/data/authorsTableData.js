/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { useState, useEffect } from "react";
import { Menu, MenuItem, IconButton, TextField, Button, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Images
import team1 from "assets/images/team-1.png";
import team3 from "assets/images/team-3.png";
import team4 from "assets/images/team-4.jpg";

const data = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([]);
  const [replyText, setReplyText] = useState("");
  const [replyRow, setReplyRow] = useState(null);

  useEffect(() => {
    // Mock data simulating API response
    const mockData = [
      {
        author: { image: team4, name: "Rashid Alnaji", email: "079 9 24 2452" },
        function: { title: "Motaz Ghassan", description: "Agent" },
        status: "Active",
        employed: "04/07/2024",
      },
      {
        author: { image: team1, name: "Abdulrahman Atassi", email: "079 9 24 2452" },
        function: { title: "Self-Report", description: "App" },
        status: "Pending",
        employed: "13/07/2024",
      },
    ];
    // Set mock data to rows
    setRows(mockData);
  }, []);

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(index);
  };

  const handleMenuClose = (option) => {
    if (option && selectedRow !== null) {
      const updatedRows = [...rows];
      updatedRows[selectedRow].status = option;
      setRows(updatedRows);
    }
    setAnchorEl(null);
    setSelectedRow(null);
  };

  const handleReplyClick = (index) => {
    setReplyRow(replyRow === index ? null : index);
  };

  const handleReplySubmit = () => {
    if (replyRow !== null) {
      const updatedRows = [...rows];
      updatedRows[replyRow].status = "Replied";
      setRows(updatedRows);
      setReplyText("");
      setReplyRow(null);
    }
  };

  const Author = ({ image, name, email, index }) => (
    <MDBox display="flex" flexDirection="column" alignItems="flex-start" lineHeight={1}>
      <MDBox display="flex" alignItems="center">
        <IconButton
          size="small"
          onClick={() => handleReplyClick(index)}
          sx={{
            transform: replyRow === index ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s",
          }}
        >
          <ArrowDropDownIcon />
        </IconButton>
        <MDAvatar src={image} name={name} size="sm" />
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption">{email}</MDTypography>
        </MDBox>
      </MDBox>
      {replyRow === index && (
        <MDBox
          mt={2}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          width="calc(100% - 48px)"
          position="relative"
          left="48px"
        >
          <TextField
            label="Reply"
            variant="outlined"
            size="small"
            fullWidth
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleReplySubmit}
            sx={{ mt: 1, color: "white !important" }}
          >
            Reply
          </Button>
        </MDBox>
      )}
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      {
        Header: () => <p>Active Cases</p>,
        accessor: "author",
        width: "45%",
        align: "left",
      },
      { Header: "Agent", accessor: "function", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Date Reported", accessor: "employed", align: "center" },
      { Header: "Summary", accessor: "action", align: "center" },
    ],

    rows: rows.map((row, index) => ({
      author: <Author {...row.author} index={index} />,
      function: <Job {...row.function} />,
      status: (
        <MDBox ml={-1}>
          <MDBadge
            badgeContent={row.status}
            color={row.status === "Active" ? "success" : "dark"}
            variant="gradient"
            size="sm"
          />
        </MDBox>
      ),
      employed: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          {row.employed}
        </MDTypography>
      ),
      action: (
        <>
          <IconButton onClick={(event) => handleMenuClick(event, index)}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(null)}>
            <MenuItem onClick={() => handleMenuClose("Assigned")}>Assign</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Resolved")}>Resolve</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Subscribed")}>Subscribed</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Declined")}>Decline</MenuItem>
          </Menu>
        </>
      ),
    })),
  };
};

export default data;
