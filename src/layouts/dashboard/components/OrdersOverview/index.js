//disputes categories sidebar in dashboard

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Disputes Categories
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="200JD, Transfer to Friend"
          dateTime="current month"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="300JD, Transfer to Self"
          dateTime="current month"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="500JD, Invoice Payment"
          dateTime="current month"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="400JD, eWallets"
          dateTime="current month"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="600JD, Loan Payment"
          dateTime="current month"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
