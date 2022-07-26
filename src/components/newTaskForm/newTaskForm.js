import React, { useState } from 'react';
import './newTaskForm.css';

const NewTaskForm = (props) => {
  const { addItem } = props;
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && value) {
      addItem(value);
      setValue('');
    }
  };
  return (
    <input
      className="new-todo"
      value={value}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      placeholder="What needs to be done?"
      autoFocus
    />
  );
};

export default NewTaskForm;
