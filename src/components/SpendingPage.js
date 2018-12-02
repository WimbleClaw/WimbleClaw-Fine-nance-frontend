import React from "react";
import InputTable from "./InputTable";
import SpendingPieChart from "./SpendingPieChart";

export default class SpendingPage extends React.Component {
  render() {
    return (
      <div>
        HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
        <SpendingPieChart currentUser={this.props.currentUser} />
        Library to use for graphs later:{" "}
        <a href="https://reactjsexample.com/lightweight-but-versatile-svg-pie-doughnut-charts-for-react/">
          {" "}
          here{" "}
        </a>{" "}
        (i dont know how to add a title to each graph element...)
        <br /> <br />
        <div class="ui horizontal divider">SPENDING</div>
        <InputTable
            currentUser={this.props.currentUser}
            updateSpendingOnPage={ this.props.updateSpendingOnPage } />

      </div>
    );
  }
}
