import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import { Form, Button, Header } from 'semantic-ui-react'

const objectivesURL = "http://localhost:3000/api/v1/objectives";
const usersURL = "http://localhost:3000/api/v1/users";


// This is the page that we will use for the objective data
export default class ObjectivePage extends React.Component {


state={
    objective: '',
    objectives: [],
    value: 0,
    users:[]
}


handleChange = val =>{
    let value = parseInt(val)
    this.setState({value})
}

handleSubmit = () =>{
    let newObjective = JSON.stringify(this.state.objective)
    newObjective = JSON.parse(newObjective)
    newObjective.current_amount = this.state.value
    console.log('new',newObjective)
    this.patchObjective(newObjective)
    this.setState({ objective: newObjective})
}

componentDidMount() {
    console.log(this.state.objective)  
    console.log(this.props.location.state.objective)
    let objectiveId = this.props.match.params.id
    this.fetchObjective(objectiveId)
    this.fetchUsers().then(users=> this.setState({ users }))
}


componentUpdate(){
    console.log(this.state.objective)   
}

    // from adapter
fetchObjective = objectiveId => {
    console.log('clicked fetch objective thing')
    return fetch(`${objectivesURL}/${objectiveId}`).then(resp => resp.json()).then(objective => this.setState({objective}))
}

getObjectiveFromLocation = () =>{
    const {objective} = this.props.location.state
    this.setState({ objective })

}

patchObjective = objective => {
    fetch(`${objectivesURL}/${objective.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objective)
    }).then(resp => resp.json())
}
    //



fetchUsers = () => {
    return fetch(`${usersURL}/`).then(resp => resp.json())
};




render() {
    const {objective, value} = this.state
    let current_percentage = (objective.current_amount/objective.total_amount)*100
    let remaining_percentage = 100-current_percentage
    return <div>
        <PieChart
            lineWidth={10}
            style={ { height: "300px" } }
            data={ [
                { title: "One", value: current_percentage, color: "#00FF00" },
                { title: "Two", value: remaining_percentage, color: "#FF6347" },
            ] }
        />
        <br></br>
        <Form>
            <Header as='h1' >Goal: £{objective.total_amount} :) </Header>
            <Header as='h1' >Currently saved: £{objective.current_amount} </Header>
            <Form.Input placeholder="Set new amount?" type='float'
            onChange={event => this.handleChange(event.target.value)}/>
            <Button className="ui purple basic button"
                    onClick=
                    {value <= objective.total_amount && value >= 0?
                        () => this.handleSubmit()
                        :
                        () => alert("Please provide a valid value!")
                }>Submit</Button>
        </Form>
        <a href='/spending'>Back to Main page</a>
    </div>
}
}
