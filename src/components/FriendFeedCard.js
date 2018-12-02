import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import PieChart from 'react-minimal-pie-chart'

export default class FriendFeedCard extends React.Component {



    render() {
        const { friend } = this.props
        console.log(friend.objectives)
        const remainderPercentage=(current, fullSum)=>
                Math.round(100-(current/fullSum)*100)
        return this.props.friend.objectives.map(objective=>
        <Card fluid>
            < PieChart
                lineWidth='10'
                size='small'
                ratio="1"
                style={ { "height": "100px" } }
                data={
                    [
                        { title: 'One', value: remainderPercentage(objective.current_amount, objective.total_amount), color: '#E38627' },
                        { title: 'Two', value: 100 - remainderPercentage(objective.current_amount, objective.total_amount), color: '#888888' }
                    ]
                } />
            <Card.Content>
                    <Card.Header><Icon name='user' />{ friend.name }</Card.Header>
                <Card.Meta>
                    <span className='date'></span>
                </Card.Meta>
                <Card.Description>{ friend.name } is {remainderPercentage(objective.current_amount, objective.total_amount)} % away from their {objective.name} objective. </Card.Description>
            </Card.Content>
                    
  
        </Card>)
    }
}