import React from 'react';

const EditTask = ({ label, onEdit, id }) => {
  const handleChange = (event) => {
    onEdit(event.target.value, id);
  };

  return <input type="text" className="edit" defaultValue={label} onChange={handleChange}></input>;
};

export default EditTask;
