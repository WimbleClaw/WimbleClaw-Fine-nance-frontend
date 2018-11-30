import React from "react";
import InputTableHeader from "./InputTableHeader";
import InputTableRow from "./InputTableRow";
import { Table } from "semantic-ui-react";

export default class InputTable extends React.Component {
  state = {
    user: ""
  };

  componentDidMount() {
    this.setState({ user: this.props.currentUser });
  }

  render() {
    return (
      <div>
        <Table celled>
          <InputTableHeader />
          <Table.Body>
            {console.log(this.state.user)}
            {/* {this.user.spending.map(category => (
              <InputTableRow />
            ))} */}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
