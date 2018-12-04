import React from 'react'
import { Form, Button, Segment, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {

    state={
        email: '',
        name: '',
        password1: '',
        password2: ''
    }

    handleEmailChange=(value)=>this.setState({email: value})
    handleNameChange = (value) => this.setState({ Name: value })
    handlePW1Change = (value) => this.setState({ password1: value })
    handlePW2Change = (value) => this.setState({ password2: value })

    handleSubmit = () => {
        console.log('handling submit')
        // check if passwords match
        if (this.state.email && 
        this.state.password1 === this.state.password2)
            {
            const {name, email, password1 } = this.state
            // // check if user exists
            let newUser= { name, email, password:password1}
            let userExists = this.props.users.find(u => u.email === email)
            userExists && alert("User already exists. Please try a different email.")
            !userExists && this.props.createUser(newUser)
                .then(re=> console.log('created user', re))
                .then(response => this.props.history.push('/login'))
        }else{
            alert("Please verify your input!")
        }
    }

    

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                 <Segment style={ { marginTop: '15em' } }>
                    <Form >
                        <Header as='h1' > Sign up</Header>
                            <Form.Input placeholder="Email" type='text' onChange={event=>this.handleEmailChange(event.target.value)}/>
                            <Form.Input placeholder="Name" type='text' onChange={event=>this.handleNameChange(event.target.value)} />
                            <Form.Input placeholder="Password" type='password' onChange={ event => this.handlePW1Change(event.target.value) }/>
                        <Form.Input placeholder="Repeat password" type='password' onChange={ event => this.handlePW2Change(event.target.value) } />
                        <Button onClick={ this.handleSubmit } className="ui purple basic button" >Sign up</Button>
                    </Form >
                    <a href='/login'>Already have an account? Click here to log in.</a>
                </Segment >
            </div>
        );
    }
}
