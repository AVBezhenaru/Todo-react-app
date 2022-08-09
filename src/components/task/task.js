import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';

const Task = (props) => {
  const { label, checked, created, time, id, onDelete, onToggleDone, updateItemTimer } = props;

  const [timeToCreate, setTimeToCreate] = useState(
    formatDistanceToNow(created, { addSuffix: true, includeSeconds: true })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeToCreate(formatDistanceToNow(created, { addSuffix: true, includeSeconds: true }));
    }, 5000);

    return () => clearInterval(interval);
  }, [timeToCreate]);

  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked} />
      <label>
        <span className="title">{label}</span>
        <Timer time={time} id={id} updateItemTimer={updateItemTimer} />
        <span className="created description">{timeToCreate}</span>
      </label>
      <button className="icon icon-edit" />
      <button className="icon icon-destroy" onClick={onDelete} />
    </div>
  );
};

export default Task;
