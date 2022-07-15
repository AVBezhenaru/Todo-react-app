import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';

export default class Task extends Component {
  static defaultProps = {
    label: 'name',
    created: 'time',
    checked: false,
    onDelete: () => {},
    onToggleDone: () => {},
  };

  static propTypes = {
    label: PropTypes.string,
    created: PropTypes.object,
    checked: PropTypes.bool,
    onDelete: PropTypes.func,
    onToggleDone: PropTypes.func,
  };

  state = {
    time: formatDistanceToNow(this.props.created, { addSuffix: true, includeSeconds: true }),
  };

  timeUpdate = () => {
    this.setState(() => {
      return {
        time: formatDistanceToNow(this.props.created, { addSuffix: true, includeSeconds: true }),
      };
    });
  };

  componentDidMount() {
    setInterval(() => {
      this.timeUpdate();
    }, 5000);
  }

  render() {
    const { id, label, checked, timer, onDelete, onToggleDone, updateItemTimer } = this.props;
    const { time } = this.state;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
        <label>
          <span className="title">{label}</span>
          <Timer timer={timer} id={id} updateItemTimer={updateItemTimer} />
          <span className="created description">created {time}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
    );
  }
}
