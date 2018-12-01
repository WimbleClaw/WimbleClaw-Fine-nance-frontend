import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import PieChart from 'react-minimal-pie-chart'

export default class FriendFeedCard extends React.Component{



    render(){
   const { friend } = this.props
return <Card fluid>
    < PieChart
        lineWidth='10'
        size='small'
        ratio="1"
        style={ { "height": "100px" } }
        data={
            [
                { title: 'One', value: 5, color: '#E38627' },
                { title: 'Two', value: 25, color: '#888888' }
            ]
        } />
    <Card.Content>
        <Card.Header>{ friend.name  }</Card.Header>
        <Card.Meta>
            <span className='date'></span>
        </Card.Meta>
        <Card.Description>{ friend.name }is XX % away from his objective! </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <a>
            <Icon name='user' />
            Investor
      </a>
    </Card.Content>
</Card>
    }
    }