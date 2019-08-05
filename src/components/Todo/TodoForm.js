import React, { Component } from 'react';
import uuid from 'react-uuid';

export default class TodoForm extends Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: uuid()
        })
    }

    render() {
        return (
        <form onSubmit = {this.handleSubmit}>
            <input 
                name = "text"
                value = {this.state.text}
                onChange = {this.handleChange}
                placeholder="todo..."
            />
            <button onSubmit = {this.handleSubmit}>Submit</button>
        </form>
        )
    }
}