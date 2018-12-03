import React from "react";
import { Table, Button, Input } from "semantic-ui-react";

const spendingsURL = "http://localhost:3000/api/v1/spendings";

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


  handleFood=value=>{
    this.props.updateSpending(value, this.props.spending, 'food')
  }

  handleRent=value=>{
    this.props.updateSpending(value, this.props.spending,'rent')
  }

  handleOther=value=>{
    this.props.updateSpending(value, this.props.spending, 'other')
  }

  handleTravel=value=>{
    this.props.updateSpending(value, this.props.spending, 'travel')
  }

  handleClothes=value=>{
    this.props.updateSpending(value, this.props.spending, 'clothes')
  }

  handleUtilities=value=>{
    this.props.updateSpending(value, this.props.spending, 'utilities')
  }



  render() {
    return this.props.spending?
     (
      <Table.Body>
        <Table.Row>
          <Table.Cell>Rent</Table.Cell>
          <Table.Cell>
            £{this.props.spending.rent}
          </Table.Cell>
          <Table.Cell selectable>
              <label>
                Edit:
              <input type="number" onChange={ event => this.setState({ rent: event.target.value }) } />
                <button
                  className="ui purple basic button"
                  onClick={ () => this.handleRent(this.state.rent) }>Submit</button>
              </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Utilities</Table.Cell>
          <Table.Cell>
            £{this.props.spending.utilities}
          </Table.Cell>
          <Table.Cell selectable>
              <label>
                Edit:
              <input type="number" onChange={ event => this.setState({ utilities: event.target.value }) } />
                <button
                  className="ui purple basic button"
                  onClick={ () => this.handleUtilities(this.state.utilities) }>Submit</button>
              </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Clothes</Table.Cell>
          <Table.Cell>
            £ {this.props.spending.clothes}
          </Table.Cell>
          <Table.Cell selectable>
              <label>
                Edit:
              <input type="number" onChange={ event => this.setState({ clothes: event.target.value }) } />
                <button
                  className="ui purple basic button"
                  onClick={ () => this.handleClothes(this.state.clothes) }>Submit</button>
              </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Food</Table.Cell>
          <Table.Cell>
            £ { this.props.spending.food }
          </Table.Cell>
          <Table.Cell selectable>
            <label>
              Edit:
              <input type="number" onChange={event => this.setState({food:event.target.value})} />
              <button 
                className="ui purple basic button"
                onClick={event => this.handleFood(this.state.food)}>Submit</button>
            </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Travel</Table.Cell>
          <Table.Cell>
            £ {this.props.spending.travel}
          </Table.Cell>
          <Table.Cell selectable>
              <label>
                Edit:
              <input type="number" onChange={ event => this.setState({ travel: event.target.value }) } />
                <button
                  className="ui purple basic button"
                  onClick={ () => this.handleTravel(this.state.travel) }>Submit</button>
              </label>
          </Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Other</Table.Cell>
          <Table.Cell>
            £ {this.props.spending.other}
          </Table.Cell>
          <Table.Cell selectable>
              <label>
                Edit:
              <input type="number" onChange={ event => this.setState({ other: event.target.value }) } />
                <button
                  className="ui purple basic button"
                  onClick={ () => this.handleOther(this.state.other) }>Submit</button>
              </label>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    ) : "Loading..."
  }
}
