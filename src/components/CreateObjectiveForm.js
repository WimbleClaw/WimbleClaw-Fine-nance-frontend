import React from 'react'
import { Form, Button, Segment, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'
const objectivesURL = "http://localhost:3000/api/v1/objectives";

export default class CreateObjectiveForm extends React.Component {

    state={
        name:'',
        total: 0,
        saved: 0,
        image: ''
    }

postObjective = objective => {
    return fetch(`${objectivesURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objective)
    }).then(resp => resp.json());
};

changeName=(value)=>{
    this.setState({name:value})
}
changeImage = (value) => {
    this.setState({ image: value })
}
changeTotal = (value) => {
    this.setState({ total: value })
}
changeSaved = (value) => {
    this.setState({ saved: value })
}
submit = () =>{
    console.log('submitting?')
   let objectiveObject={
        user_id: this.props.currentUser.id,
        name: this.state.name,
        current_amount: this.state.saved,
        total_amount: this.state.total,
        img_url: this.state.image
    }
    this.postObjective(objectiveObject).then(result=> <Redirect to={`/spending`}/>)
}

    render() {
        return (
            <div className="ui stackable center aligned page grid">
                <Segment style={ { marginTop: '15em' } }>
                    <Form >
                        <Header as='h1' >Create Objective </Header>
                        <Form.Input 
                            onChange={event=>this.changeName(event.target.value)} placeholder="Name of objective" type='text' />
                        <Form.Input 
                            onChange={ event => this.changeImage(event.target.value) } placeholder="Image URL" type='text' />
                        <Form.Input 
                            onChange={ event => this.changeTotal(event.target.value) } placeholder="Amount to save" type='number' />
                        <Form.Input 
                            onChange={ event => this.changeSaved(event.target.value) } placeholder="Immediately add (optional)" type='number' />
                        <Button onClick={this.submit}
                        
                        className="ui purple basic button">Create objeective!</Button>
                    </Form >
                </Segment >
            </div>
        );
    }
}
