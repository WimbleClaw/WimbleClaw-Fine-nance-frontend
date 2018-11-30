import React from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";

import FriendsFeed from './FriendsFeed'
import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import HomePage from "./HomePage";
import SpendingPage from "./SpendingPage";
import ObjectivePage from './ObjectivePage'
import CreateObjectiveForm from "./CreateObjectiveForm";
// import HomePage from "./HomePage";
// import Adapter from "../Adapter";
import fetchUsers from "../Adapter";

  

const usersURL = "http://localhost:3000/api/v1/users";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class MainPage extends React.Component {
  state = {
    users: [],
    loggedIn: 1
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

  currentUser() {
    return this.state.users.filter(user => user.id === this.state.loggedIn);
  }
render() {
        return (
            <div>
                <BrowserRouter>

                    <Switch>
                        {/* userLoggedin is false?  */ }
                        {/* <Route exact path='/' component={ HomePage } /> */ }
                        <Route exact path='/login' component={ Login } />
                        <Route exact path='/signup' component={ Signup } />
                        {/* otherwise    */ }

                        <Grid columns={ 2 } divided>
                            <Grid.Row>
                                <Grid.Column width={ 12 }>
                                <Switch>
                                    <Route exact path='/spending' component={ SpendingPage } />
                                    <Route exact path='/friends' component={ FriendsFeed } />
                                    <Route exact path='/objectives/create' component={ CreateObjectiveForm } />
                                    <Route path='/objectives/:id' component={ ObjectivePage } />
                                    <Route path='/:error' component={ props => <div>page not found</div> } />
                                    </Switch>
                                </Grid.Column>
                                <Grid.Column width={ 4 }>
                                    <SideBar />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }

}
