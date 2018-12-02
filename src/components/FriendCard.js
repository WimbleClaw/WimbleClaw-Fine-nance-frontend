import React from 'react'
import {Feed, Icon } from 'semantic-ui-react'

const FriendCard = (props) =>
    <Feed>
        <Feed.Event>
            <Icon name='user' /> 
            <Feed.Content>
                <Feed.Summary>
                    { props.friend.name }
            </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
    </Feed>

export default FriendCard