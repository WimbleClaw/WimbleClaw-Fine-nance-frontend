import React from "react";
import PieChart from "react-minimal-pie-chart";
import { Grid } from "semantic-ui-react";
export default class SpendingPieChart extends React.Component {
  colour = ["#E38627", "#C13C37", "#6A2135", "#1a2f35", "#1d1236", "#0b0f47"];
  prepareData() {
    return this.props.data.map((item, index) => {
      const colourIndex = index % this.colour.length;
      return {
        title: item[0],
        value: item[1],
        color: this.colour[colourIndex]
      };
    });
  }

  render() {
    const data = this.prepareData();
    return (
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column width={9}>
            <div>
              <PieChart
                lineWidth={25}
                size="small"
                ratio={1}
                style={{ height: "300px" }}
                data={data}
              />
            </div>
          </Grid.Column>
          <Grid.Column width={3}>
            <h2>Key</h2>
            <br />
            {data.map(item => (
              <div>
              <span key={item.title}>
                <i
                  aria-hidden="true"
                  className="square full icon"
                  style={{ color: item.color }}
                />{" "}
                {item.title}
              </span>
              <br></br>
              </div>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
