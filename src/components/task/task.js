import React, { useEffect, useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import Timer from '../timer/timer';

const Task = (props) => {
  const { label, checked, created, timer, id, onDelete, onToggleDone, updateItemTimer } = props;

  const [time, setTime] = useState(formatDistanceToNow(created, { addSuffix: true, includeSeconds: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDistanceToNow(created, { addSuffix: true, includeSeconds: true }));
    }, 5000);

    return () => clearInterval(interval);
  }, [time]);

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
};

export default Task;
