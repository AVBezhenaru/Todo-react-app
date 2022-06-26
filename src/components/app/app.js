import React, { Component } from 'react';
import TaskList from "../taskList/taskList";
import Footer from "../footer/footer";
import NewTaskForm from "../newTaskForm/newTaskForm";
import "./app.css";

export default class App extends Component {

    indexId = 100;

    state = {
        items: [
            {id: 1, label: "Completed task", created : "created 17 seconds ago", done: false, checked: false},
            {id: 2, label: "Active task", created : "created 67 seconds ago", done: false, checked: false},
        ],
        filter: "all"
    }


    addItem = (text) => {
        const newItem = {
            id: this.indexId++,
            label: text,
            created: "1 sec ago",
            done: false,
            checked: false
        }

        this.setState(({items}) => {

            const newArr = [...items, newItem]
            return {
                items: newArr
            }
        })
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
                    item.checked = !item.checked;
                }
                return result.push(item);
            })

            return {
                items: result
            };
        });
    }

    onDeleteAllCompltetedTask = () => {

        this.setState(({items}) => {
            return {
                items: items.filter((item) => item.done === false)
            }
        })
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    }

    filterItems = (items, filter) => {
        if (filter === "all") {
            return items;
        } else if (filter === "active") {
            return items.filter((item) => item.done === false);
        } else if (filter === "completed") {
            return items.filter((item) => item.done === true);
        }
    }


    render() {

        const { items, filter } = this.state;
        const itemLeftCount = items.filter((el) => el.done === false).length;
        const invisibleItems = this.filterItems(items, filter);

        return (
            <div className="todoapp">
                <div className="header">
                    <h1>todos</h1>
                    <NewTaskForm addItem={this.addItem}/>
                </div>
                <div className="main">
                    <TaskList
                        items={invisibleItems}
                        onDelete={this.onDelete}
                        onToggleDone={this.onToggleDone}/>
                    <Footer filter={filter} itemLeftCount={itemLeftCount} onFilterChange={this.onFilterChange} onDeleteAllCompltetedTask={this.onDeleteAllCompltetedTask}/>
                </div>
            </div>
        );
    }
}
