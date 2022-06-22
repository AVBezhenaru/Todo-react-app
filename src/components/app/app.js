import React, { Component } from 'react';
import TaskList from "../taskList/taskList";
import Footer from "../footer/footer";
import NewTaskForm from "../newTaskForm/newTaskForm";
import "./app.css";

export default class App extends Component {

    id = 0;

    state = {
        items: [
            {id: 1, label: "Completed task", created : "created 17 seconds ago", done: false},
            {id: 2, label: "Active task", created : "created 67 seconds ago", done: false},
        ]
    }

    onDelete = (id) => {
        this.setState(({items}) => {
            const index = items.findIndex((el) => el.id === id);
            const newArr = [...items.splice(0, index), ...items.splice(index + 1)];
            return {
                items: newArr
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({items}) => {
            const result = [];
            items.map((item) => {
                if(item.id === id) {
                    item.done = !item.done;
                }
                return result.push(item);
            })

            return {
                items: result
            };
        });
    }

    render() {

        const { items } = this.state;
        return (
            <div className="todoapp">
                <div className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </div>
                <div className="main">
                    <TaskList
                        items={items}
                        onDelete={this.onDelete}
                        onToggleDone={this.onToggleDone}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
