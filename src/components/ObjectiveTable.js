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

  remainder() {
    return this.props.item[1][1] - this.props.item[0][1];
  }

  clear() {
    this.input.val = "";
  }

  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Current Amount</Table.HeaderCell>
            <Table.HeaderCell>Remainder</Table.HeaderCell>
            <Table.HeaderCell>Add</Table.HeaderCell>
            <Table.HeaderCell>Reduce</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>£ {this.props.item[1][1]}</Table.Cell>
            <Table.Cell>£ {this.props.item[0][1]}</Table.Cell>
            <Table.Cell>£ {this.remainder()}</Table.Cell>
            <Table.Cell selectable>
              <input
                type="number"
                name="name"
                onChange={event => this.props.handleChange(event.target.value)}
              />
              <Button
                className="ui purple basic button"
                onClick={() => this.props.handleAdd()}
              >
                +
              </Button>
            </Table.Cell>
            <Table.Cell selectable>
              <input
                type="number"
                name="name"
                onChange={event => this.props.handleChange(event.target.value)}
              />
              <Button
                className="ui purple basic button"
                onClick={() => this.props.handleSubtract()}
              >
                -
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}
