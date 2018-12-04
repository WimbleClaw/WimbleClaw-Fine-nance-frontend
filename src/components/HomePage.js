import React from "react";
import { Segment, Header } from 'semantic-ui-react'

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


  currentUser = () => {
    return this.state.users.find(user => user.id === this.state.loggedIn);
  };

  render() {
    console.log(this.props.currentUser)
    return (
      <div>
        <Segment style={ { marginTop: '5em' } }>
          <Header as='h1' color='purple'> Welcome to Fine-nance </Header>
          <Header as='h4' color='grey'>The personal finance tracking app</Header>
        </Segment>
       <Segment style={ { marginTop: '5em' } }> 
        {/* Divided in Grid is used for the splitting line between the sidebar and main page */ }
        <div className="ui buttons">
        <a href='/signup'>
          <button className="ui purple basic button" onClick={ this.signUpClick }>
            Sign up
          </button>
          </a>
        </div>
        
        <div className="ui buttons">
          <a href='/login'>
          <button className="ui purple basic button" onClick={ this.loginClick }>
            Login
          </button>
          </a>
        </div>
        {/* <SpendingPage /> */ }
        </Segment>
      </div>
    )
  }
}
