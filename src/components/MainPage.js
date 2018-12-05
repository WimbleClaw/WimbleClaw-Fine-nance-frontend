import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Grid } from "semantic-ui-react";
import BodyBackgroundColor from 'react-body-backgroundcolor'

import FriendsFeed from './FriendsFeed'
import Login from "./Login";
import Signup from "./Signup";
import SideBar from "./SideBar";
import SpendingPage from "./SpendingPage";
import ObjectivePage from './ObjectivePage'
import CreateObjectiveForm from "./CreateObjectiveForm";
import HomePage from "./HomePage"
import CreateSpendingsForm from './CreateSpendingsForm'

const usersURL = "http://localhost:3000/api/v1/users";


export default class MainPage extends React.Component {
    state = {
        users: [],
        loggedIn: null,
        currentUser: null,
        followees: []
    }



    createUser = object => {
        return fetch(usersURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(resp => resp.json())
        
    };

    patchUser = object => {
        return fetch(`${usersURL}/${object.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        }).then(resp => resp.json()).then(resp=>console.log(resp));
    };


    updateSpendingOnPage = (parameter, value) => {
        let user = JSON.stringify(this.state.currentUser)
        user = JSON.parse(user)
        user.spending[parameter] = parseInt(user.spending[parameter]) + parseInt(value)
        this.setState({ currentUser: user })
    }




    handleLogin = (email, password) => {
        let foundUser = this.state.users
            .find(user => user.email.toLowerCase() === email.toLowerCase()
                && user.password === password)
        if (foundUser) {
            this.setState({ loggedIn: foundUser.id })
            this.setState({ currentUser: foundUser })
            this.findAllFollowees()
            return true
        } else {
            alert("Incorrect details. Please try again.")
            return false;
        }
     }
    

    fetchUsers = () => {
        return fetch(`${usersURL}/`).then(resp => resp.json())
    };
    
    fetchAndSetUsers = () => {
        return this.fetchUsers()
            .then(users => this.setState({ users }))
        }
            

    currentUser = () => {
        let currentUserObject = this.state.users.find(user => user.id === this.state.loggedIn)
        this.setState({ currentUser: currentUserObject })
        return currentUserObject
    }

    findAllFollowees = () => {
        if (this.state.currentUser && this.state.currentUser.followees.length > 0) {
            let followeeIds = this.state.currentUser.followees.map(f => f.id)
            let followeeObjects = this.state.users.filter(u => followeeIds.includes(u.id))
            this.setState({ followees: followeeObjects })
        } else { console.log('no followees for the user or other error') }
    }
    
    clearUser=()=>
        this.setState({ currentUser: ''})

    addFriendOnPage=(friend)=>{
        let user = {...this.state.currentUser}
        let followees = [...this.state.followees]

        
        if(followees.includes(friend))
        {alert("Friend already added.") 
                            return false}

        else{
            followees.push(friend)
            user.followees.push(friend)
            this.setState({ 
                currentUser: user, 
                followees:followees
            })

         return true
        }
    }

    componentDidMount=()=>{
        if (localStorage.user) {
            let user = JSON.parse(localStorage.user)
            this.fetchAndSetUsers().then( () => {
            let found = this.state.users.find(u=> 
                user.email===u.email && user.password===u.password)
                console.log('USER:',found)
                this.setState({currentUser: found})
            })
        }
    }


    addObjectiveToCurrentUser = (objective) => {
        let user = { ...this.state.currentUser }
        user.objectives.push(objective)
        this.setState({ currentUser: user })
        return this.state.currentUser.objectives[this.state.currentUser.objectives.length - 1]
    }


    addClick = (event, object) => {
        console.log(object,event)
        let value=parseInt(event)
        let stat=object.toLowerCase()
        let user = this.state.currentUser;
        user = JSON.stringify(user);
        user = JSON.parse(user);
        user[stat]+=value
        console.log('user', user)
        this.setState({
            currentUser: user
        });
        console.log('currentUser', this.state.currentUser)
        this.patchUser(user)
       
    };





    render() {
        return (
            <BrowserRouter>
                <div>
                    { !this.state.currentUser ?
                        <BodyBackgroundColor backgroundColor='#BDBDBD'>
                            <Switch>
                                
                                <Route exact path='/'
                                    component={ (props) => this.state.loggedIn ? <Redirect to={ '/spending' } /> : <HomePage /> }
                                />

                                <Route exact path='/login' component={ props => <Login { ...props } handleLogin={ this.handleLogin } fetchAndSetUsers={this.fetchAndSetUsers} /> } />

                                <Route exact path='/signup' component={ props => <Signup { ...props } createUser={ this.createUser } handleSignup={ this.handleSignup } users={this.state.users}/> } />

                                
                                <Route path='/:error' component={ props => <Redirect to='/' /> } />

                            </Switch>
                        </BodyBackgroundColor>
                         :
                        <Switch>

                            <Route exact path='/'
                                component={ (props) => this.state.currentUser ? <Redirect to={ '/spending' } /> : <HomePage { ...props } /> }
                            />

                            <Grid columns={ 2 } divided>
                                <Grid.Row>
                                    <Grid.Column width={ 12 }>
                                        <Switch>
                                            <Route exact path='/login' component={ props => <Login { ...props } handleLogin={ this.handleLogin } fetchAndSetUsers={ this.fetchAndSetUsers } /> } />


                                            <Route exact path='/spending'
                                                component={ props => <SpendingPage
                                                    { ...props }
                                                    currentUser={ this.state.currentUser }
                                                    handleClick={ this.addClick }
                                                /> }
                                            />

                                            <Route exact path='/friends'
                                                component={ props => <FriendsFeed { ...props }
                                                    friends={ this.state.followees } userList={ this.state.users } /> }
                                            />

                                            <Route exact path='/objectives/create' component={ props => <CreateObjectiveForm { ...props }
                                                currentUser={ this.state.currentUser } addObjectiveToCurrentUser={ this.addObjectiveToCurrentUser } /> } />

                                            <Route exact path='/objectives/:id'
                                                component={ props => <ObjectivePage { ...props } users={ this.state.users } /> }
                                            /> }

                                            />
                                            <Route path='/:error' component={ props => <div>404 :) page not found</div> } />

                                        </Switch>
                                    </Grid.Column>

                                    <Grid.Column width={ 4 }>
                                        <SideBar
                                            clearUser={ this.clearUser }
                                            objectives={ this.state.currentUser.objectives }
                                            addObjectiveToCurrentUser={ this.addObjectiveToCurrentUser }
                                            currentUser={ this.state.currentUser }
                                            friends={ this.state.followees }
                                            addFriendOnPage={ this.addFriendOnPage }
                                            users={this.state.users}
                                            
                                            />
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Switch>
                    }
                </div>

            </BrowserRouter>
        )
    }
}
