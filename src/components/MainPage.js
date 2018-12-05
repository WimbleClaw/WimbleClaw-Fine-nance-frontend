import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";

import FriendsFeed from "./FriendsFeed";
import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import SpendingPage from "./SpendingPage";
import ObjectivePage from "./ObjectivePage";
import CreateObjectiveForm from "./CreateObjectiveForm";
import HomePage from "./HomePage";

const usersURL = "http://localhost:3000/api/v1/users";
const spendingsURL = "http://localhost:3000/api/v1/spendings";

export default class MainPage extends React.Component {
  state = {
    users: [],
    loggedIn: 1,
    currentUser: {},
    followees: []
  };
  // transfered from inputTableRow:
  spendingPatchRequest = spending => {
    return fetch(`${spendingsURL}/${spending.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(spending)
    }).then(resp => resp.json());
  };

  updateSpending = (value, spendingArg, item) => {
    let spending = { ...spendingArg };
    spending[item] += parseInt(value);
    this.spendingPatchRequest(spending);
    this.updateSpendingOnPage(item, value);
  };

  updateSpendingOnPage = (parameter, value) => {
    let user = JSON.stringify(this.state.currentUser);
    user = JSON.parse(user);
    // user.spending[parameter]= value
    user.spending[parameter] =
      parseInt(user.spending[parameter]) + parseInt(value);
    this.setState({ currentUser: user });
  };

  //

  fetchUsers = () => {
    return fetch(`${usersURL}/`).then(resp => resp.json());
  };

  fetchSpendings = () => {
    return fetch(`${spendingsURL}/`).then(resp => resp.json());
  };

  componentDidMount() {
    this.fetchUsers()
      .then(users => this.setState({ users }))
      .then(e => this.currentUser())
      .then(() => this.findAllFollowees());

    this.fetchSpendings().then(spendings => this.setState({ spendings }));
  }

  currentUser = () => {
    let currentUserObject = this.state.users.find(
      user => user.id === this.state.loggedIn
    );
    this.setState({ currentUser: currentUserObject });
    return currentUserObject;
  };

  findAllFollowees = () => {
    if (this.state.currentUser.followees.length > 0) {
      let followeeIds = this.state.currentUser.followees.map(f => f.id);
      let followeeObjects = this.state.users.filter(u =>
        followeeIds.includes(u.id)
      );
      this.setState({ followees: followeeObjects });
    } else {
      console.log("none");
    }
  };

  signUpClick = () => {
    console.log("click");
  };

  loginClick = () => {
    console.log("click");
  };

  addClick = (event, object) => {
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

  objectiveAddClick = (event, object) => {
    console.log("obj click o", object);

    console.log("obj click e", event);
    let user = this.state.currentUser;
    user = JSON.stringify(user);
    user = JSON.parse(user);

    console.log(user.objectives);

    // user.spending[object.toLowerCase()] =
    //     parseInt(user.spending[object.toLowerCase()]) + parseInt(event);

    // this.setState({
    //     currentUser: user
    // });

    // this.patchSpending(user.spending);
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={props =>
                this.state.loggedIn ? (
                  <Redirect to={"/spending"} />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            {/* otherwise    */}

            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column width={12}>
                  <Switch>
                    <Route
                      exact
                      path="/spending"
                      component={props => (
                        <SpendingPage
                          {...props}
                          currentUser={this.state.currentUser}
                          handleClick={this.addClick}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/friends"
                      component={props => (
                        <FriendsFeed
                          {...props}
                          friends={this.state.followees}
                          userList={this.state.users}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/objectives/create"
                      component={props => (
                        <CreateObjectiveForm
                          {...props}
                          currentUser={this.state.currentUser}
                        />
                      )}
                    />
                    <Route
                      exact
                      path="/objectives/:id"
                      // component={() => <ObjectivePage users={this.state.users}
                      component={props => (
                        <ObjectivePage
                          {...props}
                          users={this.state.users}
                          handleClick={this.objectiveAddClick}
                        />
                      )}
                    />{" "}
                    } />
                    <Route
                      path="/:error"
                      component={props => <div>page not found</div>}
                    />
                  </Switch>
                </Grid.Column>

                <Grid.Column width={4}>
                  <SideBar
                    objectives={this.state.currentUser.objectives}
                    currentUser={this.state.currentUser}
                    friends={this.state.followees}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
