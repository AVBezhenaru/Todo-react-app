import React from 'react';

const EditTask = ({ label, onEdit, id, handleKeyPress, onblurClose }) => {
  const handleChange = (event) => {
    onEdit(event.target.value, id);
  };

  return (
    <input
      name="edit"
      type="text"
      className="edit"
      defaultValue={label}
      onChange={handleChange}
      onKeyDown={() => handleKeyPress(event)}
      onBlur={() => onblurClose()}
      autoFocus
    />
  );
};

export default EditTask;
