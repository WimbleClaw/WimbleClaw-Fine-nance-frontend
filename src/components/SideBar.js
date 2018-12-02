import React from 'react'
import {  Segment, Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import ObjectiveCard from './ObjectiveCard'
import FriendsList from './FriendsList'

// This is the entire sidebar

export default class SideBar extends React.Component {

    render() {

        return <div>
            <h4>Welcome, User!</h4>
            THIS IS WHERE ED WILL MAKE A CRISPY SIDEBAR
            <Link to={`/`} >
                <Button fluid> Log Out</Button><br />
            </Link>
            <Link to ={`/objectives/create`} >
                <Button className="ui purple basic button" fluid>Create a new objective! </Button>
            </Link>
            <Segment style={ { overflow: 'auto', maxHeight: 500 } }>
                This is to show off the scrollability! :)
                <ObjectiveCard></ObjectiveCard>
                <ObjectiveCard></ObjectiveCard>
                <ObjectiveCard></ObjectiveCard>
              </Segment> 
              
            <FriendsList friends={this.props.friends}/>
        </div>
    }
}