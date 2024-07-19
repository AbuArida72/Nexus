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
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Images
import team1 from "assets/images/team-1.png";
import team3 from "assets/images/team-3.png";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [rows, setRows] = useState([
    {
      author: { image: team4, name: "Ibrahim Abu Laban", email: "079 9 24 2452" },
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
  ]);

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

  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
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
      author: <Author {...row.author} />,
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
            <MenuItem onClick={() => handleMenuClose("Resolved")}>Resolve</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Declined")}>Decline</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Resigned")}>Resign</MenuItem>
            <MenuItem onClick={() => handleMenuClose("Replied")}>Reply</MenuItem>
          </Menu>
        </>
      ),
    })),
  };
}
