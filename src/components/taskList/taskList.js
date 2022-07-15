import React from 'react';
import PropTypes from 'prop-types';

import Task from '../task/task';
import './taskList.css';

const TaskList = ({ items, onDelete, onToggleDone, updateItemTimer }) => {
  TaskList.defaultProps = {
    items: [
      {
        id: 1,
        label: 'text',
        created: '1 sec ago',
        done: false,
        checked: false,
      },
    ],
    onDelete: () => {},
    onToggleDone: () => {},
  };

  TaskList.propTypes = {
    items: PropTypes.array,
    onDelete: PropTypes.func,
    onToggleDone: PropTypes.func,
  };

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
          onToggleDone={() => onToggleDone(id)}
          onDelete={() => onDelete(id)}
          updateItemTimer={updateItemTimer}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
};

export default TaskList;
