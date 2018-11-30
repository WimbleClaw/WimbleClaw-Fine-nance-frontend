import React from 'react'
import { Card, Header, Segment } from 'semantic-ui-react'
import FriendCard from './FriendCard'
import { Link } from 'react-router-dom'

export default class FriendsList extends React.Component{
render(){
return (
    
    <Segment style={ { overflow: 'auto', maxHeight: 200 } }>
        <Card fluid>
           
                <Card.Content>
                <Link to={ `/friends` }>
                    <Header>Friends you follow</Header>
                </Link>
                </Card.Content>
         
            <Card.Content>
                {/* Here we will be mapping all Followers */}
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
                <FriendCard></FriendCard>
            </Card.Content>
        </Card>
    </Segment> 
)}
}