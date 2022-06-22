import React from "react";
import Task from "../task/task";
import { formatDistance, subDays } from 'date-fns'
import "./taskList.css"

const  TaskList = ({items, onDelete, onToggleDone}) => {

    const elements = items.map((item) => {
        const {id, done, ...itemProps} = item;
        let className = "";
        if (done) {
            className += " completed"
        }

        return (
            <li className={className} key={id}>
                <Task
                    {...itemProps}
                    onToggleDone={() => onToggleDone(id)}
                    onDelete={() => onDelete(id)}/>
            </li>
            );
    });

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

export default TaskList;