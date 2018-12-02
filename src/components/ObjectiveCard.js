import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class MainPage extends React.Component {

    render() {
        const {objective} = this.props
        const description = `£${objective.current_amount} out of £${objective.total_amount} collected`
        return <Link to={ 
            {
            pathname: `/objectives/${objective.id}`,
            state: { objective }
        }
            }
        >
        <Card fluid
                image={objective.image? objective.image : null}
                header={objective.name}
                description={description}
            />
            </Link>
    
        

    }
}