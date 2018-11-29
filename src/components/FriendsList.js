import React from 'react'
import { Segment, Button, Card } from 'semantic-ui-react'





export default class FriendsList extends React.Component{


render(){
return (
    <Card>
        <Card.Content>
            <Card.Header>Friends you follow</Card.Header>
        </Card.Content>
        <Card.Content>
            <Feed>
                <Feed.Event>
                    <Feed.Label image='/images/avatar/small/jenny.jpg' />
                    <Feed.Content>
                        <Feed.Summary>
                            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image='/images/avatar/small/molly.png' />
                    <Feed.Content>

                        <Feed.Summary>
                            You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                    <Feed.Label image='/images/avatar/small/elliot.jpg' />
                    <Feed.Content>

                        <Feed.Summary>
                            You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
                    </Feed.Content>
                </Feed.Event>
            </Feed>
        </Card.Content>
    </Card>
)}
}