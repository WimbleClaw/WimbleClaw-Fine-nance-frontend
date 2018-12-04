import React from 'react'
import {  Form, Button } from 'semantic-ui-react'

const followsURL = "http://localhost:3000/api/v1/follows";

export default class FollowForm extends React.Component {

    state={
        value: ''
    }


    postFollow = follow => {
        return fetch(followsURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(follow)
        }).then(resp => resp.json())
    };

    addFriend=(currentUser, friend)=> {
        let follow = {follower_id: currentUser.id, followee_id: friend.id}
        if (currentUser.id === friend.id) {
            alert("You can't follow yourself ;)")
            return false
        }
        this.postFollow(follow)
            .then(response=>{
                this.props.addFriendOnPage(friend)
            })
    }

    handleFollow=(text)=>
        this.setState({ value: text })

    handleSubmit=()=>{
        let token = this.state.value
        let friend = this.props.users.find(user => user.token === token)
        friend? this.addFriend(this.props.currentUser, friend) : alert('Friend not found. Check the token and try again.')
    }

    render() {
        return(
            <Form >
                <Form.Input label="Paste the token here to follow a friend:" type="text" onChange={ event => this.handleFollow(event.target.value) } />
                <Button className="ui purple basic button" onClick={ this.handleSubmit }>Done</Button>
            </Form>
        )
    }
}