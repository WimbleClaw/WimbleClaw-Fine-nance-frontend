import PieChart from "react-minimal-pie-chart";
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import FriendsFeed from "./FriendsFeed";
import InputTable from "./InputTable";
import SpendingPieChart from "./SpendingPieChart";

export default class SpendingPage extends React.Component {
  
  filterSpending() {
    const {rent,food,clothes,travel,other,utilities} = this.props.currentUser
    const spending = {
      rent, food, clothes, travel, other, utilities
                    }
    let res = [];
    for (const key in spending) {
      if (key === "id" || key === "user_id") {
        continue;
      }
      res.push([key.charAt(0).toUpperCase() + key.slice(1), spending[key]]);
    }
    return res;
  }

  render() {
    const spendingData = this.filterSpending();
    return (
      <div>
        <div>Your Spending</div>
        {spendingData.length !== 0 ? (
          <SpendingPieChart data={spendingData} />
        ) : null}
        Library to use for graphs later:{" "}
        <a href="https://reactjsexample.com/lightweight-but-versatile-svg-pie-doughnut-charts-for-react/">
          {" "}
          here{" "}
        </a>{" "}
        (i dont know how to add a title to each graph element...)
        <br /> <br />
        <div className="ui horizontal divider">SPENDING</div>
        {spendingData.length !== 0 ? (
          <InputTable
            data={spendingData}
            handleClick={this.props.handleClick}
          />
        ) : null}
      </div>
    );
  }
}
