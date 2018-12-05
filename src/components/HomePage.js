import React from "react";

const usersURL = "http://localhost:3000/api/v1/users";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class MainPage extends React.Component {
  
  state = {
    users: []
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

  signUpClick = () => {
    console.log("click");
  };

  loginClick = () => {
    console.log("click");
  };

  currentUser = () => {
    return this.state.users.find(user => user.id === this.state.loggedIn);
  };

  render() {
    return (
      <div>
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */ }
        <div class="ui buttons">
          <button class="ui purple basic button" onClick={ this.signUpClick }>
            Sign up
          </button>
        </div>
        <div class="ui buttons">
          <button class="ui purple basic button" onClick={ this.loginClick }>
            Login
          </button>
        </div>
        {/* <SpendingPage /> */ }
      </div>
    )
  }
}
