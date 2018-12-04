import React from 'react'
import {  Form, Button } from 'semantic-ui-react'

export default class FollowForm extends React.Component {



    render() {
        return(
            <Form >
                
                <Form.Input label="Paste the token here to follow a friend:" type="text" onChange={ event => this.handleFollow(event.target.value) } />
                <Button className="ui purple basic button" onClick={ this.handleSubmit }>Done</Button>
            </Form>
        )
    }
}