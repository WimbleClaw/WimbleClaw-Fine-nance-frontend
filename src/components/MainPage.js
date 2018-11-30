import React from "react";
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";

import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import SpendingPage from "./SpendingPage";
// import Adapter from "../Adapter";
import fetchUsers from "../Adapter";

const usersURL = "http://localhost:3000/api/v1/users";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class MainPage extends React.Component {
  state = {
    users: [],
    currentUser: "",
    loggedIn: 1
  };

  fetchUsers = () => {
    return fetch(`${usersURL}/`).then(resp => resp.json());
  };

  fetchSpendings = () => {
    return fetch(`${spendingsURL}/`).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchUsers()
      .then(users => this.setState({ users }))
      .then(resp => this.setState({ currentUser: this.currentUser() }));
  }

  signUpClick = () => {
    console.log("click");
  };

  loginClick = () => {
    console.log("click");
  };

  currentUser = () => {
    return this.state.users.filter(user => user.id === this.state.loggedIn);
  };

  render() {
    return (
      <div>
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */}
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column width={12}>
              {/* <HomePage /> */}
              <SpendingPage
                currentUser={this.state.currentUser}
                loggedIn={this.state.loggedIn}
              />
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
