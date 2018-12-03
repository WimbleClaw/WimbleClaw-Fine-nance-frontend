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
    let newObjective = JSON.stringify(this.state.objective);
    newObjective = JSON.parse(newObjective);
    newObjective.current_amount = this.state.value;
    console.log("new", newObjective);
    this.patchObjective(newObjective);
    this.setState({ objective: newObjective });
  };

  componentDidMount() {
    let objectiveId = this.props.match.params.id;
    this.fetchObjective(objectiveId);
    this.fetchUsers().then(users => this.setState({ users }));
  }

  componentUpdate() {
    console.log(this.state.objective);
  }

  // from adapter
  fetchObjective = objectiveId => {
    console.log("clicked fetch objective thing");
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
        <h2>{this.state.objective.name}</h2>
        {objectiveData.length !== 0 ? (
          <SpendingPieChart data={objectiveData} />
        ) : null}
        <br />
        <div>
          {objectiveData.length !== 0 ? (
            <ObjectiveTable
              item={objectiveData}
              handleClick={this.props.handleClick}
            />
          ) : null}
        </div>
        <Form>
          <Form.Input
            placeholder="Set new amount?"
            type="float"
            onChange={event => this.handleChange(event.target.value)}
          />
          <Button
            className="ui purple basic button"
            onClick={
              value <= objective.total_amount && value >= 0
                ? () => this.handleSubmit()
                : () => alert("Please provide a valid value!")
            }
          >
            Submit
          </Button>
        </Form>
        <a href="/spending">Back to Spending page</a>
      </div>
    );
  }
}
