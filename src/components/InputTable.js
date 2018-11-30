import React from "react";
import InputTableHeader from "./InputTableHeader";
import InputTableRow from "./InputTableRow";
import { Table } from "semantic-ui-react";

export default class InputTable extends React.Component {
  render() {
    return (
      <div>
        <Table celled>
          <InputTableHeader />
          <InputTableRow spending={this.props.currentUser.spending} />
        </Table>
      </div>
    );
  }
}
