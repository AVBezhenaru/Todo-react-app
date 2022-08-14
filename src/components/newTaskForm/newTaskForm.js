import React, { useState } from 'react';
import './newTaskForm.css';

const NewTaskForm = (props) => {
  const { addItem } = props;
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const time = min * 60 + sec;
    if (value) {
      addItem(value, time);
    }
    setValue('');
    setMin('');
    setSec('');
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === 'text') {
      setValue(value);
    } else if (name === 'min') {
      setMin(Math.abs(value));
    } else if (name === 'sec') {
      setSec(Math.abs(value));
    }
  };

  return (
    <form className="new-todo-form" onSubmit={onSubmit}>
      <input
        name="text"
        type="text"
        className="new-todo"
        placeholder="Task"
        value={value}
        onChange={handleChange}
        autoFocus
      />
      <input
        name="min"
        type="number"
        min="0"
        className="new-todo-form__timer"
        placeholder="Min"
        value={min}
        autoFocus
        onChange={handleChange}
      />
      <input
        name="sec"
        type="number"
        min="0"
        className="new-todo-form__timer"
        placeholder="Sec"
        value={sec}
        autoFocus
        onChange={handleChange}
      />
      <button type="submit" className={'new-todo-form__submit-btn'} />
    </form>
  );
};

export default NewTaskForm;
