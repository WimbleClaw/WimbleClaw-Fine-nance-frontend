import React from 'react'
import {  Segment, Button } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

import ObjectiveCard from './ObjectiveCard'
import FriendsList from './FriendsList'
import FollowForm from './Followform'
import Login from './Login'
// This is the entire sidebar

export default class SideBar extends React.Component {

    state={
        logout: false
    }

    logout = () => {
        localStorage.clear()
        this.props.clearUser()
        // console.log('props?', this)
        // this.setState({ logout: true})
        }

    render() {
        const {logout} = this.state
        // if (logout){
        //     return <Redirect to={'/login'} />
        // }
        return <div>
            <h4>Welcome, {this.props.currentUser.name}!</h4>
            <Link to={`/`} >
                <Button fluid> Home</Button><br />
            </Link>
            <button onClick={ this.logout } >Log out!
            </button>

            <Link to={`/objectives/create`} >
                <Button className="ui purple basic button" fluid>Create a new objective! </Button>
            </Link>
            <Segment style={ { overflow: 'auto', maxHeight: 500 } }>
                { this.props.objectives ?
                    this.props.objectives.map(obj =>
                        <ObjectiveCard
                            objective={ obj } />)
                            : 
                            <div>You dont have any objectives yet</div>
                }
              </Segment> 
            <div>
                { this.props.currentUser.token && <h4> Your follow token: { this.props.currentUser.token }</h4> }
                <FollowForm users={ this.props.users } currentUser={ this.props.currentUser }
                    friends={ this.props.followees } addFriendOnPage={ this.props.addFriendOnPage} />
            </div>
            <FriendsList friends={this.props.friends}/>
        </div>
    }
}