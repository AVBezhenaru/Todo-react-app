import React from 'react';

import Task from '../task/task';
import './taskList.css';

const TaskList = ({ items, onDelete, onToggleDone, updateItemTimer, onEdit }) => {
  const elements = items.map((item) => {
    const { id, done, timerIsActive, ...itemProps } = item;
    let className = '';
    if (done) {
      className += 'completed';
    }

    return (
      <li className={className} key={id}>
        <Task
          {...itemProps}
          id={id}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
          updateItemTimer={updateItemTimer}
          timerIsActive={timerIsActive}
          onEdit={onEdit}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
