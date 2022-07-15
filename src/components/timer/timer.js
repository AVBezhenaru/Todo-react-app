import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import './timer.css';

export default class Timer extends Component {
  // static defaultProps = {
  //   label: 'name',
  //   created: 'time',
  //   checked: false,
  //   onDelete: () => {},
  //   onToggleDone: () => {},
  // };
  //
  // static propTypes = {
  //   label: PropTypes.string,
  //   created: PropTypes.object,
  //   checked: PropTypes.bool,
  //   onDelete: PropTypes.func,
  //   onToggleDone: PropTypes.func,
  // };

  state = {
    time: this.props.timer,
    isActive: false,
  };

  componentDidMount() {
    this.setState({ time: this.props.timer });
  }

  timer = () => {
    if (this.state.isActive) {
      let count = this.state.time;
      count++;
      this.setState({ time: count });
      this.props.updateItemTimer(this.props.id, this.state.time);
    }
  };

  interval = setInterval(this.timer, 1000);

  handleStart = () => {
    this.setState(() => {
      return { isActive: true };
    });
    this.interval;
  };

  handleStop = () => {
    this.setState({ isActive: false });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
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
