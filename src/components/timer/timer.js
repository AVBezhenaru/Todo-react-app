import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    time: this.props.timer,
    isActive: this.props.timerIsActive,
    intervalId: null,
  };

  componentDidMount() {
    this.setState({ time: this.props.timer });
    this.setState({ isActive: this.props.timerIsActive });
    this.state.isActive && this.setState({ intervalId: setInterval(this.timer, 1000) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.timerIsActive !== this.props.timerIsActive) {
      if (this.props.timerIsActive) {
        clearInterval(this.state.intervalId);
        this.handleStart();
      } else {
        this.handleStop();
      }
    }
  }

  timer = () => {
    if (this.state.isActive) {
      let count = this.state.time;
      count--;
      this.setState({ time: count < 1 ? 0 : count });
      this.props.updateItemTimer(this.props.id, this.state.time, this.state.isActive);
    }
  };

  handleStart = () => {
    this.setState({ isActive: true });
    this.setState({ intervalId: setInterval(this.timer, 1000) });
  };

  handleStop = () => {
    this.setState({ isActive: false });
    this.props.updateItemTimer(this.props.id, this.state.time, false);
    clearInterval(this.state.intervalId);
  };

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { time } = this.state;
    const m = Math.floor(time / 60)
      .toString()
      .padStart(2, '0');
    const s = (time - m * 60).toString().padStart(2, '0');

    return (
      <span className="description">
        <button className="icon icon-play" onClick={this.handleStart} />
        <button className="icon icon-pause" onClick={this.handleStop} />
        {m} : {s}
      </span>
    );
  }
}
