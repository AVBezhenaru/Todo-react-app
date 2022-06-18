import React from "react";
import Task from "../task/task";
import { formatDistance, subDays } from 'date-fns'
import "./taskList.css"

const  TaskList = () => {
    return (
        <ul className="todo-list">
            <li><Task description="Completed task" created="created 17 seconds ago"/></li>
            <li><Task description="Active task" created={formatDistance(subDays(new Date(), 0), new Date(), { addSuffix: true }).toString()}/></li>
        </ul>

    );
}

export default TaskList;