import React from 'react'
import PieChart from 'react-minimal-pie-chart'
import { Form, Button, Segment, Header } from 'semantic-ui-react'
// This is the page that we will use for the objective data
export default class ObjectivePage extends React.Component {

    render() {
        return <div>
            <PieChart
                lineWidth="10"
                size="small"
                ratio="1"
                style={ { height: "300px" } }
                data={ [
                    { title: "One", value: 10, color: "#E38627" },
                    { title: "Two", value: 15, color: "#C13C37" },
                    { title: "Three", value: 20, color: "#6A2135" }
                ] }
            />
            This is the objective's page :)
            <Form>
                <Header as='h1' >Goal: £XXXX :) </Header>
                <Header as='h1' >Currently saved: £XX </Header>
                <Form.Input placeholder="Set new amount?" step="10" type='number' />
                <Button className="ui purple basic button">Submit</Button>
            </Form>
            <a href='/spending'>Back to Main page</a>


        </div>
    }
}