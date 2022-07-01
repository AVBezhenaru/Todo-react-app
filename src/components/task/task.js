import React, { Component } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
    const { label, checked, onDelete, onToggleDone } = this.props;

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
        <label>
          <span className="description">{label}</span>
          <span className="created">created {this.state.time}</span>
        </label>
        <button className="icon icon-edit" />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
    );
  }
}
