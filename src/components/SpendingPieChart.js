import React from "react";
import PieChart from "react-minimal-pie-chart";

export default class SpendingPieChart extends React.Component {
  render() {
    console.log(this.props.currentUser.spending);
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
              color: "#E38627"
            },
            {
              title: "Food",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.rent
                : 0,
              color: "#C13C37"
            },
            {
              title: "Other",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.other
                : 0,
              color: "#6A2135"
            },
            {
              title: "Travel",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.travel
                : 0,
              color: "#1a2f35"
            },
            {
              title: "Utilities",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.utilities
                : 0,
              color: "#1d1236"
            },
            {
              title: "Clothes",
              value: this.props.currentUser.spending
                ? this.props.currentUser.spending.clothes
                : 0,
              color: "#0b0f47"
            }
          ]}
        />
        <div class="ui square shape" />
      </div>
    );
  }
}
