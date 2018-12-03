import React from 'react'
import { Form, Button, Segment} from 'semantic-ui-react'
export default class Login extends React.Component {

  render() {
    return (
      <div>
        <div className="ui stackable center aligned page grid">
          <Segment style={ { marginTop: '15em' } }>
            <Form >
              <h1>Log in</h1>
              <Form.Input  placeholder="Email" type='text' />
              <Form.Input   placeholder="Password" type='password' />
            <Button className="ui purple basic button">Login</Button>
            </Form >
            <a href='/signup'>Don't have an account? Click here to Sign up.</a>
          </Segment >
        </div>
      </div>
    );
  }
}
