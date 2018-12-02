import React from 'react'
import FriendFeedCard from './FriendFeedCard'
import { Grid } from 'semantic-ui-react'
export default class HomePage extends React.Component {

render() {
    return <div>
      { this.props.friends? this.props.friends.map(f =>
        <Grid columns={ 3 } divided>
            <FriendFeedCard key={f.id} friend={f}/> 
         </Grid>)
         :
          "You have no friends. Go figure."}
    </div>
}
}