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

  addClick = (event, object) => {
    // user input for when value has been added to a category
    // console.log(event, object);
    // console.log(
    //   parseInt(this.state.currentUser.spending[object.toLowerCase()]) +
    //     parseInt(event)
    // );

    let user = this.state.currentUser;
    user = JSON.stringify(user);
    user = JSON.parse(user);

    user.spending[object.toLowerCase()] =
      parseInt(user.spending[object.toLowerCase()]) + parseInt(event);

    this.setState({
      currentUser: user
    });

    this.patchSpending(user.spending);
  };

  patchSpending = spending => {
    console.log(spending);
    return fetch(`${spendingsURL}/${spending.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(spending)
    })
      .then(resp => resp.json())
      .then(result => console.log("result", result));
  };

  currentUser = () => {
    return this.state.users.find(user => user.id === this.state.loggedIn);
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
                handleClick={this.addClick}
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
