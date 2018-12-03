import React from "react";
import InputTableHeader from "./InputTableHeader";
import InputTableRow from "./InputTableRow";
import { Table } from "semantic-ui-react";

export default class InputTable extends React.Component {
  render() {
    const data = this.props.data;
    return (
      <div>
        <Table celled>
          <InputTableHeader />
          <Table.Body>
            {data.map(item => (
              <InputTableRow
                item={item}
                key={item.title}
                handleClick={this.props.handleClick}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
