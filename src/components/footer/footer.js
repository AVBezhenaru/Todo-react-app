import React from "react";
import TaskFilter from "../taskFilter/taskFilter";
import "./footer.css"

const  Footer = ({itemLeftCount, filter, onFilterChange, onDeleteAllCompltetedTask}) => {
    return (
        <TaskFilter itemLeftCount={itemLeftCount} filter={filter} onFilterChange={onFilterChange} onDeleteAllCompltetedTask={onDeleteAllCompltetedTask}/>
    );
}

export default Footer;