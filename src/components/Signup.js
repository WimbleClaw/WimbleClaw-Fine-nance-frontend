import React from 'react'
import { Form, Button, Segment } from 'semantic-ui-react'
export default class Login extends React.Component {

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <Segment >
                    <Form >
                        <h2>Sign up</h2>
                            <Form.Input placeholder="Email" type='text' />
                            <Form.Input placeholder="Email" type='text' />
                            <Form.Input placeholder="Password" type='password' />
                            <Form.Input placeholder="Repeat password" type='password' />
                        <Button>Sign up</Button>
                    </Form >
                </Segment >
            </div>

        );
    }
}
