import React from 'react';
import TaskList from "../taskList/taskList";
import Footer from "../footer/footer";
import NewTaskForm from "../newTaskForm/newTaskForm";
import "./app.css";

function App() {
    return (
        <div className="todoapp">
            <div className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </div>
            <div className="main">
                <TaskList/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;