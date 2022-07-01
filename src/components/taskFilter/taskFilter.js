import React from 'react';
import './taskFilter.css';
import PropTypes from 'prop-types';

const filterButtons = [
  { name: 'all', label: 'All' },
  { name: 'active', label: 'Active' },
  { name: 'completed', label: 'Completed' },
];

const TaskFilter = ({ itemLeftCount, filter, onFilterChange, onDeleteAllCompletedTask }) => {
  TaskFilter.defaultProps = {
    itemLeftCount: 1,
    filter: 'all',
    onFilterChange: () => {},
    onDeleteAllCompletedTask: () => {},
  };

  TaskFilter.propTypes = {
    itemLeftCount: PropTypes.number,
    filter: PropTypes.string,
    onDeleteAllCompletedTask: PropTypes.func,
    onFilterChange: PropTypes.func,
  };

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const className = '' + (isActive ? 'selected' : '');

    return (
      <li key={name}>
        <button type="button" key={name} onClick={() => onFilterChange(name)} className={className}>
          {label}
        </button>
      </li>
    );
  });

  return (
    <div className="footer">
      <span className="todo-count">{itemLeftCount} items left</span>
      <ul className="filters">{buttons}</ul>
      <button className="clear-completed" onClick={onDeleteAllCompletedTask}>
        Clear completed
      </button>
    </div>
  );
};

export default TaskFilter;
