import React from "react";
import { Form, Button, Header } from "semantic-ui-react";
import SpendingPieChart from "./SpendingPieChart";
import ObjectiveTable from "./ObjectiveTable";
import { Table } from "semantic-ui-react";

const objectivesURL = "http://localhost:3000/api/v1/objectives";
const usersURL = "http://localhost:3000/api/v1/users";

// This is the page that we will use for the objective data
export default class ObjectivePage extends React.Component {
    state = {
        objective: "",
        objectives: [],
        value: 0,
        users: [],
        amount: []
    };

    handleChange = val => {
        let value = parseInt(val);
        this.setState({ value });
    };

    handleSubmit = () => {
        if (this.state.value <= this.state.objective.total_amount && this.state.value >= 0){
            let newObjective = JSON.stringify(this.state.objective);
            newObjective = JSON.parse(newObjective);
            newObjective.current_amount = this.state.value;
            
            this.patchObjective(newObjective);
            this.setState({ objective: newObjective });
        } else {
            alert("Please provide a valid value!")
        }
    };

    componentDidMount() {
        let objectiveId = this.props.match.params.id;
        this.fetchObjective(objectiveId);
        this.fetchUsers().then(users => this.setState({ users }));
    }

    componentUpdate() {
       
    }

    // from adapter
    fetchObjective = objectiveId => {
      
        return fetch(`${objectivesURL}/${objectiveId}`)
            .then(resp => resp.json())
            .then(objective => this.setState({ objective }));
    };

    getObjectiveFromLocation = () => {
        const { objective } = this.props.location.state;
        this.setState({ objective });
    };

    setAmount() {
        const obj = this.state.objective;
        let res = [];
        for (const key in obj) {
            if (key === "id" || key === "user" || key === "name") {
                continue;
            }
            res.push([key.charAt(0).toUpperCase() + key.slice(1), obj[key]]);
        }
        return res;
    }

    patchObjective = objective => {
        fetch(`${objectivesURL}/${objective.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objective)
        }).then(resp => resp.json());
    };
    //

    fetchUsers = () => {
        return fetch(`${usersURL}/`).then(resp => resp.json());
    };

    render() {
        const objectiveData = this.setAmount();
        const { objective, value } = this.state;
        let current_percentage =
            (objective.current_amount / objective.total_amount) * 100;
        let remaining_percentage = 100 - current_percentage;
        return (
            <div>
                <h2>{ this.state.objective.name }</h2>
                { objectiveData.length !== 0 ? (
                    <SpendingPieChart data={ objectiveData } />
                ) : null }
                <br />
                <div>
                    { objectiveData.length !== 0 ? (
                        <ObjectiveTable
                            handleSubmit={ this.handleSubmit }
                            item={ objectiveData }
                            handleChange={ this.handleChange }
                            handleSubmit={ this.handleSubmit }
                        />
                    ) : null }
                </div>
                 
                
            </div>
        );
    }
}