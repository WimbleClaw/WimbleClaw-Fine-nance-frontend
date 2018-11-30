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
        <Table.Cell>Clothes</Table.Cell>
        <Table.Cell>
          £ {this.props.spending ? this.props.spending.clothes : ""}
        </Table.Cell>
        <Table.Cell selectable>
          <a href="#">Edit</a>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// clothes:
// 440.5
// food:
// 500
// id:
// 1
// other:
// 6.7
// rent:
// 2000
// travel:
// 350
// user_id:
// 1
// utilities:
// 100
