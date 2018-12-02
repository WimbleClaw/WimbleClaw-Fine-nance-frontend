import React from "react";
import PieChart from "react-minimal-pie-chart";

export default class SpendingPieChart extends React.Component {
  render() {
    return (
      <div>
        <PieChart
          lineWidth="10"
          size="small"
          ratio="1"
          style={{ height: "300px" }}
          data={[
            {
              title: "Rent",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.rent
                : 0,
              color: "#FF0000"
              // red
            },
            {
              title: "Food",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.rent
                : 0,
              color: "#00FF00"
              // lime
},
            {
              title: "Other",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.other
                : 0,
              color: "#FFFF00"
              // yellow
            },
            {
              title: "Travel",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.travel
                : 0,
              color: "#FF00FF"
              // magenta
            },
            {
              title: "Utilities",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.utilities
                : 0,
              color: "#00FFFF"
              // cyan
            },
            {
              title: "Clothes",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.clothes
                : 0,
              color: "#0000FF"
            }
          ]}
        />
        <div class="ui square shape" />
      </div>
    );
  }
}
