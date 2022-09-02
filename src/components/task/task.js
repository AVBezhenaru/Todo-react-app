import React, { Component } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';
import EditTask from '../editTask/editTask';

export default class Task extends Component {
  state = {
    timeToCreate: formatDistanceToNow(this.props.created, { addSuffix: true, includeSeconds: true }),
    isActiveEdit: false,
    intervalId: null,
  };

  onClickActive = () => {
    this.setState(({ isActiveEdit }) => {
      return isActiveEdit ? { isActiveEdit: false } : { isActiveEdit: true };
    });
  };

  handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      this.setState({ isActiveEdit: false });
    }
  };

  onblurClose = () => {
    this.setState({ isActiveEdit: false });
  };

  timeUpdate = () => {
    this.setState({ timeToCreate: formatDistanceToNow(this.props.created, { addSuffix: true, includeSeconds: true }) });
  };

  componentDidMount() {
    this.setState({ intervalId: setInterval(this.timeUpdate, 5000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { id, label, checked, timer, onDelete, onToggleDone, updateItemTimer, timerIsActive, onEdit } = this.props;
    const { timeToCreate, isActiveEdit } = this.state;

    return (
      // <div className="view">
      //   <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
      //   <label>
      //     <span className="title">{label}</span>
      //     <Timer timer={timer} id={id} updateItemTimer={updateItemTimer} timerIsActive={timerIsActive} />
      //     <span className="created description">created {time}</span>
      //   </label>
      //   <button className="icon icon-edit" />
      //   <button className="icon icon-destroy" onClick={onDelete} />
      // </div>
      <>
        <div>
          {isActiveEdit ? (
            <EditTask
              label={label}
              onEdit={onEdit}
              id={id}
              handleKeyPress={this.handleKeyPress}
              onblurClose={this.onblurClose}
            />
          ) : (
            <div className="view">
              <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
              <label>
                <span className="title">{label}</span>
                <Timer timer={timer} id={id} updateItemTimer={updateItemTimer} timerIsActive={timerIsActive} />
                <span className="created description">{timeToCreate}</span>
              </label>
              <button className="icon icon-edit" onClick={this.onClickActive} />
              <button className="icon icon-destroy" onClick={onDelete} />
            </div>
          )}
        </div>
      </>
    );
  }
}
