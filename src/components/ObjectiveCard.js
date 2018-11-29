import React from 'react'
import { Card } from 'semantic-ui-react'



export default class MainPage extends React.Component {

    render() {

        return <Card fluid
                image='https://www.biznuspayroll.co.uk/wp-content/uploads/2015/10/Holiday.jpg'
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
            />
        

    }
}