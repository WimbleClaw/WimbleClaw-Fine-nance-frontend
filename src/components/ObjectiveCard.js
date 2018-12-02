import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class MainPage extends React.Component {

    render() {
        const {objective} = this.props
        const description = `${objective.current_amount} out of ${objective.total_amount} collected`
        console.log('this is the objective:',this.props.objective)
            // this will be interpolating data of the objective
            // Dont forget to change :id to `props.objective.id`
        return <Link to={`/objectives/${objective.id}`}>
        <Card fluid
                image={objective.image? objective.image : null}
                header={objective.name}
                description={description}
            />
        </Link>
        

    }
}