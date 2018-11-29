import React from 'react'
import { Form, Button, Segment} from 'semantic-ui-react'
export default class Login extends React.Component {

  render() {
    return (
        <div className="ui stackable center aligned page grid">
          <Segment >
            <Form >
              <h2>Log in</h2>
              <Form.Input  placeholder="Email" type='text' />
              <Form.Input   placeholder="Password" type='password' />
              <Button>Login</Button>
            </Form >
          </Segment >
        </div>

    );
  }
}
