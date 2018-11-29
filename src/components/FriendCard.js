import React from 'react'
import {Feed } from 'semantic-ui-react'

const FriendCard = () =>
    <Feed>
        <Feed.Event>
            <Feed.Label image='/images/avatar/small/jenny.jpg' />
            <Feed.Content>
                <Feed.Summary>
                    Friend 1
            </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
    </Feed>

export default FriendCard