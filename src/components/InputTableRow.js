import React from "react";
import { Table, Button } from "semantic-ui-react";

export default class InputTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  updateInput(input) {
    this.setState({
      input
    });
  }

  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.item[0]}</Table.Cell>
        <Table.Cell>£ {this.props.item[1]}</Table.Cell>
        <Table.Cell selectable>
          <label>
            Add:
            <input
              type="number"
              name="name"
              onChange={event => this.updateInput(event.target.value)}
            />
            <Button
              className="ui purple basic button"
              onClick={event =>
                this.props.handleClick(this.state.input, this.props.item[0])
              }
            >
              Submit
            </Button>
          </label>
        </Table.Cell>
      </Table.Row>
    );
  }
}
