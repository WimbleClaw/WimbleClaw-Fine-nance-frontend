import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class MainPage extends React.Component {

    render() {
            // this will be interpolating data of the objective
            // Dont forget to change :id to `props.objective.id`
        return <Link to={`/objectives/:id`}>
        <Card fluid
                image='https://www.biznuspayroll.co.uk/wp-content/uploads/2015/10/Holiday.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
        </Link>
        

    }
}