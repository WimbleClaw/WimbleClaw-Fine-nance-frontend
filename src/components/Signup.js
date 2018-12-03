import React from 'react'
import { Form, Button, Segment, Header } from 'semantic-ui-react'
export default class Login extends React.Component {

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                 <Segment style={ { marginTop: '15em' } }>
                    <Form >
                        <Header as='h1' > Sign up</Header>
                            <Form.Input placeholder="Email" type='text' />
                            <Form.Input placeholder="Email" type='text' />
                            <Form.Input placeholder="Password" type='password' />
                            <Form.Input placeholder="Repeat password" type='password' />
                        <Button className="ui purple basic button">Sign up</Button>
                    </Form >
                    <a href='/login'>Already have an account? Click here to log in.</a>
                </Segment >
            </div>
        );
    }
}
