import React from "react";
import { Table, Button } from "semantic-ui-react";

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
      <Table.Body>
        <Table.Row>
          <Table.Cell>Rent</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.rent : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Utilities</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.utilities : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Clothes</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.clothes : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Food</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.food : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Travel</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.travel : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Other</Table.Cell>
          <Table.Cell>
            £ {this.props.spending ? this.props.spending.other : ""}
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Add:
              <input type="text" name="name" />
              <Button className="ui purple basic button">Submit</Button>
            </label>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}
