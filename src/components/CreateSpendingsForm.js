import React from 'react'
import { Form, Button, Segment, Header, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class CreateSpendingsForm extends React.Component {

state={
    rent: 0,
    food: 0,
    utilities: 0,
    clothes: 0,
    travel: 0,
    other: 0
}

    handleChangeRent=(value) => {
        this.setState( { rent : value  } )
    }

    handleChangeFood=(value) => {
        this.setState( { food : value  } )
    }

    handleChangeTravel=(value) => {
        this.setState( { travel : value  } )
    }

    handleChangeUtilities=(value) => {
        this.setState( { utilities : value  } )
    }

    handleChangeClothes=(value) => {
        this.setState( { clothes : value  } )
    }

    handleChangeOther=(value) => {
        this.setState( { other : value  } )
    }

    handleSubmit=() => {
    //    patch currentUser
    //    redirect to spending page

    }






render() {
    return (
        <div className="ui stackable center aligned page grid">
            <Segment style={ { marginTop: '15em' } }>
                <Form >
                    <Header as='h1' > Would you like to set <br />your spending starting point?</Header>
                   
                    <Form.Input label="Rent" type="number" value='0' onChange={ event => this.handleChangeRent (event.target.value) } />
                    <Form.Input label="Food" type="number" value='0' onChange={ event => this.handleChangeFood (event.target.value) } />
                    <Form.Input label="Travel" type="number" value='0' onChange={ event => this.handleChangeTravel (event.target.value) } />
                    <Form.Input label="Utilities" type="number" value='0' onChange={ event => this.handleChangeUtilities (event.target.value) } />
                    <Form.Input label="Clothes" type="number" value='0'  onChange={ event => this.handleChangeClothes (event.target.value) } />
                    <Form.Input label="Other" type="number" value='0' onChange={ event => this.handleChangeOther (event.target.value) } />
                    <Button className="ui purple basic button" onClick={ this.handleSubmit }>Done</Button>
                </Form >
            </Segment >
        </div>
    );
}
}