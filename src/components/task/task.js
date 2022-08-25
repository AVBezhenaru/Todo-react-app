import React, { Fragment, useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';
import EditTask from '../editTask/editTask';

const Task = (props) => {
  const { label, checked, created, time, id, timerIsActive, onDelete, onToggleDone, updateItemTimer, onEdit } = props;

  const [timeToCreate, setTimeToCreate] = useState(
    formatDistanceToNow(created, { addSuffix: true, includeSeconds: true })
  );

  const [isActiveEdit, setIsActiveEdit] = useState(false);

  const onClickActive = () => {
    isActiveEdit ? setIsActiveEdit(false) : setIsActiveEdit(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToCreate(formatDistanceToNow(created, { addSuffix: true, includeSeconds: true }));
    }, 5000);

    return () => clearInterval(interval);
  }, [timeToCreate]);

  const handleKeyPress = (event) => {
    if (event.keyCode === 13 || event.keyCode === 27) {
      setIsActiveEdit(false);
    }
  };

  const onblurClose = () => {
    setIsActiveEdit(false);
  };

  return (
    <Fragment>
      <div>
        {isActiveEdit ? (
          <EditTask label={label} onEdit={onEdit} id={id} handleKeyPress={handleKeyPress} onblurClose={onblurClose} />
        ) : (
          <div className="view">
            <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
            <label>
              <span className="title">{label}</span>
              <Timer time={time} id={id} updateItemTimer={updateItemTimer} timerIsActive={timerIsActive} />
              <span className="created description">{timeToCreate}</span>
            </label>
            <button className="icon icon-edit" onClick={onClickActive} />
            <button className="icon icon-destroy" onClick={onDelete} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Task;
