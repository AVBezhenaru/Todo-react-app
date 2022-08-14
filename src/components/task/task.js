import React, { Fragment, useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';
import EditTask from '../editTask/editTask';

const Task = (props) => {
  const { label, checked, created, time, id, onDelete, onToggleDone, updateItemTimer, onEdit } = props;

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

  return (
    <Fragment>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
        <label>
          <span className="title">{label}</span>
          <Timer time={time} id={id} updateItemTimer={updateItemTimer} />
          <span className="created description">{timeToCreate}</span>
        </label>
        <button className="icon icon-edit" onClick={onClickActive} />
        <button className="icon icon-destroy" onClick={onDelete} />
      </div>
      <div>{isActiveEdit ? <EditTask label={label} onEdit={onEdit} id={id} /> : <div></div>}</div>
    </Fragment>
  );
};

export default Task;
