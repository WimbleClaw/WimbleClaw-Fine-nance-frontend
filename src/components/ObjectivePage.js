import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import { Form, Button, Segment, Header } from 'semantic-ui-react'

const objectivesURL = "http://localhost:3000/api/v1/objectives";


// This is the page that we will use for the objective data
export default class ObjectivePage extends React.Component {


state={
    objective: '',
    objectives: []
}



fetchObjective = objectiveId => {
    return fetch(`${objectivesURL}/${objectiveId}`).then(resp => resp.json()).then(objective => this.setState({objective}))
};

componentDidMount(){   
let objectiveId = this.props.match.params.id
this.fetchObjective(objectiveId)
}


    render() {
        const {objective} = this.state
        let current_percentage = (objective.current_amount/objective.total_amount)*100
        let remaining_percentage = 100-current_percentage
        return <div>
            <PieChart
                lineWidth="10"
                size="small"
                ratio="1"
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
                <Form.Input placeholder="Set new amount?" step="10" type='number' 
                onChange={this.handleChange}/>
                <Button className="ui purple basic button" onClick={this.handleSubmit}>Submit</Button>
            </Form>
            <a href='/spending'>Back to Main page</a>


        </div>
    }
}