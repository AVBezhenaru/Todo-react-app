import React from "react";
import "./taskFilter.css";

const filterBtns = [
    {name: "all", label: "All"},
    {name: "active", label: "Active"},
    {name: "completed", label: "Completed"},
]


const TaskFilter = ({itemLeftCount, filter, onFilterChange, onDeleteAllCompltetedTask}) => {
    const btns = filterBtns.map(({name, label}) => {
        const isActive = name === filter;
        const className = "" + (isActive ? "selected" : "")

        return (
            <li key={name}>
                <button type="button"
                        key={name}
                        onClick={() => onFilterChange(name)}
                        className={className}>{label}</button>
            </li>
        )
    })

    return (
        <div className="footer">
            <span className="todo-count">{itemLeftCount} items left</span>
            <ul className="filters">
                {btns}
            </ul>
            <button className="clear-completed" onClick={onDeleteAllCompltetedTask}>Clear completed</button>
        </div>

    );
}

export default TaskFilter;