import React from "react";
import { Table } from "semantic-ui-react";

export default class InputHeader extends React.Component {
    render() {
        return (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                    <Table.HeaderCell>Add</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        );
    }
}