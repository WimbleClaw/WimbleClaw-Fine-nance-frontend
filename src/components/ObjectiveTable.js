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

  render() {
    return (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Current Amount</Table.HeaderCell>
            <Table.HeaderCell>Remainder</Table.HeaderCell>
            <Table.HeaderCell>Add</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>£ {this.props.item[1][1]}</Table.Cell>
            <Table.Cell>£ {this.props.item[0][1]}</Table.Cell>
            <Table.Cell>£ {this.remainder()}</Table.Cell>
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
        </Table.Body>
      </Table>
    );
  }
}
