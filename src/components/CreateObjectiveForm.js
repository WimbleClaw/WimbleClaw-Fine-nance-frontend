import React from 'react'
import { Form, Button, Segment, Header } from 'semantic-ui-react'
export default class CreateObjectiveForm extends React.Component {

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <Segment style={ { marginTop: '15em' } }>
                    <Form >
                        <Header as='h1' >Create Objective </Header>
                        <Form.Input placeholder="Name of objective" type='text' />
                        <Form.Input placeholder="Amount to save" type='text' />
                        <Form.Input placeholder="Immediately add (optional)" type='number' />
                        <Button className="ui purple basic button">Sign up</Button>
                    </Form >
                </Segment >
            </div>
        );
    }
}
