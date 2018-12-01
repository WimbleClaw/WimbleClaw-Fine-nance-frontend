import React from 'react'
import FriendFeedCard from './FriendFeedCard'

export default class HomePage extends React.Component {

render() {
    return <div>
      { this.props.friends? this.props.friends.map(f=> <FriendFeedCard friend={f}/>) : "You have no friends. go figure."}
        
    </div>
}
}