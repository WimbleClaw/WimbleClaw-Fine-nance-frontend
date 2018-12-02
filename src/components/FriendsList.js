import React from 'react'
import { Card, Header, Segment } from 'semantic-ui-react'
import FriendCard from './FriendCard'
import { Link } from 'react-router-dom'

export default class FriendsList extends React.Component{
render(){
return (
    <Link to={ `/friends` }>
    <Segment style={ { overflow: 'auto', maxHeight: 200 } }>
        <Card fluid>
            
                <Card.Content>
                
                    <Header>Friends you follow</Header>
                
                </Card.Content>
         
            <Card.Content>
                {this.props.friends? 
                this.props.friends.map(f=>
                    <FriendCard
                        friend={f}
                        />) : "No friends followed yet"
                }
            </Card.Content>
            
        </Card>
    </Segment> 
    </Link>
)}
}