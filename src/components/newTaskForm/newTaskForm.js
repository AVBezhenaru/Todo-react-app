import React, { Component } from 'react';
import "./newTaskForm.css"

export default class NewTaskForm extends Component {

    state = {
        value: ""
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleKeyPress = (event) => {
        if (event.key === "Enter" && this.state.value) {
            this.props.addItem(this.state.value);
            this.setState({value: ""});
        }
    }
    render() {
        return (
            <input className="new-todo" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}  placeholder="What needs to be done?" autoFocus />
        );
    }
}

