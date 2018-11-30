import React from "react";
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";

import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import SpendingPage from "./SpendingPage";
// import Adapter from "../Adapter";
import fetchUsers from "../Adapter";

const usersURL = "http://localhost:3000/api/v1/users";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class MainPage extends React.Component {
  state = {
    spendings: '',
    users: [],
    
  };

  fetchUsers = () => {
    return fetch(`${usersURL}/`).then(resp => resp.json());
  };

  fetchSpendings = () => {
    return fetch(`${spendingsURL}/`).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchUsers().then(users => this.setState({ users }));
    this.fetchSpendings().then(spendings => this.setState({ spendings }));
  }

  signUpClick = () => {
    console.log("click");
  };

  loginClick = () => {
    console.log("click");
  };

  render() {
    console.log(this.props.fetchUsers);
    return (
      <div>
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */}

        <div class="ui buttons">
          <button class="ui purple basic button" onClick={this.signUpClick}>
            Sign up
          </button>
        </div>
        <div class="ui buttons">
          <button class="ui purple basic button" onClick={this.loginClick}>
            Login
          </button>
        </div>
        {/* <SpendingPage /> */}
      </div>
    );
  }
}
