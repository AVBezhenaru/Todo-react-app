import React from "react";

const Task = ({label, created, onDelete, onToggleDone, checked}) => {


    return (
        <div className="view">
            <input className="toggle" type="checkbox" onChange={onToggleDone} checked={checked}/>
            <label>
                <span className="description">{label}</span>
                <span className="created">{created}</span>
            </label>
            <button className="icon icon-edit"/>
            <button className="icon icon-destroy" onClick={onDelete}/>
        </div>
    )
}

export default Task;