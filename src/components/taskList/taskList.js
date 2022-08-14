import React from 'react';

import Task from '../task/task';
import './taskList.css';

const TaskList = ({ items, onDelete, onToggleDone, updateItemTimer, onEdit }) => {
  const elements = items.map((item) => {
    const { id, done, ...itemProps } = item;
    let className = '';
    if (done) {
      className += 'completed';
    }

    return (
      <li className={className} key={id}>
        <Task
          {...itemProps}
          id={id}
          updateItemTimer={updateItemTimer}
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
          onEdit={onEdit}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
