import React from "react";
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";

import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import SpendingPage from "./SpendingPage";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */}
        
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={12}>
              <SpendingPage />
            </Grid.Column>
            <Grid.Column width={4}>
              <SideBar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
