//dashboard data page

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/team-1.png";
import logoAtlassian from "assets/images/team-2.jpg";
import logoSlack from "assets/images/team-1.png";
import logoSpotify from "assets/images/team-4.jpg";
import logoJira from "assets/images/team-4.jpg";
import logoInvesion from "assets/images/team-1.png";
import team1 from "assets/images/team-1.png";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.png";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "beneficiary", accessor: "companies", width: "45%", align: "left" },
      { Header: "Banks", accessor: "members", width: "10%", align: "left" },
      { Header: "Value", accessor: "budget", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company image={logoXD} name="Ibrahim Abdelkhaleq" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Jordan Kuwait Bank"],
              [team2, "Arab Bank"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            300JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoAtlassian} name="Mohammad Abu Arida" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Arab Bank"],
              [team4, "Housing Bank"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            100JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Abdelrahman Alsadder" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Jordan Kuwait Bank"],
              [team3, "Safwa Bank"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            500JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Khalil Samara" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Housing Bank"]])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            700JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoJira} name="Ibrahim Abu Laban" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Housing Bank"]])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            1000JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={50} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Abdulrahman Atassi" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Jordan Kuwait Bank"],
              [team4, "Housing Bank"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            50JD
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
    ],
  };
}
