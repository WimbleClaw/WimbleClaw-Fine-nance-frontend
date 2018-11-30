import React from "react";
import { Table } from "semantic-ui-react";

export default class InputTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rowNum: 0
    };
  }

  componentDidMount() {
    this.setState({ rowNum: this.state.rowNum + 1 });
  }
  render() {
    return (
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>No Action</Table.Cell>
        <Table.Cell selectable>
          <a href="#">Edit</a>
        </Table.Cell>
      </Table.Row>
    );
  }
}
