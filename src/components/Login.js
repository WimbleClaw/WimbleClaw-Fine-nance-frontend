import React from 'react'
import { Form, Button, Segment} from 'semantic-ui-react'
export default class Login extends React.Component {

  state={
    email: '',
    password: ''
  }


handleEmailChange = (email) =>
  this.setState({email})

handlePasswordChange = (password) =>
  this.setState({ password })

handleSubmit=() =>{
  const {email, password} = this.state
  let result = this.props.handleLogin(email, password)
  result?
  this.props.history.push({
    pathname: `/spending`,
  })
  :
  console.log('nope')
}

  render() {
    return (
      <div>
        <div className="ui stackable center aligned page grid">
          <Segment style={ { marginTop: '15em' } }>
            <Form >
              <h1>Log in</h1>
              <Form.Input onChange={event=> this.handleEmailChange(event.target.value) } placeholder="Email" type='text' />
              <Form.Input onChange={event => this.handlePasswordChange(event.target.value)} placeholder="Password" type='password' />
            <Button onClick={this.handleSubmit} className="ui purple basic button">Login</Button>
            </Form >
            <a href='/signup'>Don't have an account? Click here to Sign up.</a>
          </Segment >
        </div>
      </div>
    );
  }
}
