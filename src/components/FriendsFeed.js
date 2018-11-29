import React from 'react'
import FriendFeedCard from './FriendFeedCard'

export default class HomePage extends React.Component {

render() {
    return <div>
        {/* This is where we will be mapping all of the users friends activities */}
        <FriendFeedCard />
        <FriendFeedCard />
    </div>
}
}