import PieChart from "react-minimal-pie-chart";
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import FriendsFeed from "./FriendsFeed";
import InputTable from "./InputTable";

export default class SpendingPage extends React.Component {
  render() {
    return (
      <div>
        HERE IS WHERE AISA WILL BUILD HER FAVORITE PART OF THE WEB SITE
        <PieChart
          lineWidth="10"
          size="small"
          ratio="1"
          style={{ height: "300px" }}
          data={[
            { title: "One", value: 10, color: "#E38627" },
            { title: "Two", value: 15, color: "#C13C37" },
            { title: "Three", value: 20, color: "#6A2135" }
          ]}
        />
        Library to use for graphs later:{" "}
        <a href="https://reactjsexample.com/lightweight-but-versatile-svg-pie-doughnut-charts-for-react/">
          {" "}
          here{" "}
        </a>{" "}
        (i dont know how to add a title to each graph element...)
        <br /> <br />
        <div class="ui horizontal divider">SPENDING</div>
        <InputTable currentUser={this.props.currentUser} />
      </div>
    );
  }
}
