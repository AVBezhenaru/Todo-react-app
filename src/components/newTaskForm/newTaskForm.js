import React, { Component } from 'react';
import './newTaskForm.css';

export default class NewTaskForm extends Component {
  state = {
    value: '',
    min: '',
    sec: '',
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'text') {
      this.setState({ value: event.target.value });
    } else if (name === 'min') {
      this.setState({ min: Math.abs(value) });
    } else if (name === 'sec') {
      this.setState({ sec: Math.abs(value) });
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    const time = this.state.min * 60 + this.state.sec;
    this.state.value && this.props.addItem(this.state.value, time);
    this.setState({ value: '' });
    this.setState({ min: '' });
    this.setState({ sec: '' });
  };

  render() {
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          name="text"
          type="text"
          className="new-todo"
          placeholder="Task"
          value={this.state.value}
          onChange={this.handleChange}
          autoFocus
        />
        <input
          name="min"
          type="number"
          min="0"
          max="60"
          className="new-todo-form__timer"
          placeholder="Min"
          value={this.state.min}
          autoFocus
          onChange={this.handleChange}
        />
        <input
          name="sec"
          type="number"
          min="0"
          max="60"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={this.state.sec}
          autoFocus
          onChange={this.handleChange}
        />
        <button type="submit" className={'new-todo-form__submit-btn'} />
      </form>
    );
  }
}
