import React, { Component } from 'react';

import TaskList from '../taskList/taskList';
import Footer from '../footer/footer';
import NewTaskForm from '../newTaskForm/newTaskForm';

import './app.css';

export default class App extends Component {
  indexId = 100;

  create = (text) => {
    return {
      id: this.indexId++,
      label: text,
      created: new Date(),
      done: false,
      checked: false,
      timer: 0,
    };
  };

  state = {
    items: [this.create('Completed task'), this.create('Active task')],
    filter: 'all',
  };

  addItem = (text) => {
    const newItem = this.create(text);

    this.setState(({ items }) => {
      const newArr = [...items, newItem];
      return {
        items: newArr,
      };
    });
  };

  updateItemTimer = (id, time) => {
    this.setState(({ items }) => {
      const result = [];
      items.map((item) => {
        if (item.id === id) {
          item.timer = time;
        }
        return result.push(item);
      });

      return {
        items: result,
      };
    });
  };

  onDelete = (id) => {
    this.setState(({ items }) => {
      const index = items.findIndex((el) => el.id === id);
      const newArr = [...items.splice(0, index), ...items.splice(index + 1)];
      return {
        items: newArr,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ items }) => {
      const result = [];
      items.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
          item.checked = !item.checked;
        }
        return result.push(item);
      });

      return {
        items: result,
      };
    });
  };

  onDeleteAllCompltetedTask = () => {
    this.setState(({ items }) => {
      return {
        items: items.filter((item) => item.done === false),
      };
    });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems = (items, filter) => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => item.done === false);
    } else if (filter === 'completed') {
      return items.filter((item) => item.done === true);
    }
  };

  render() {
    const { items, filter } = this.state;
    const itemLeftCount = items.filter((el) => el.done === false).length;
    const visibleItems = this.filterItems(items, filter);

    return (
      <div className="todoapp">
        <div className="header">
          <h1>todos</h1>
          <NewTaskForm addItem={this.addItem} />
        </div>
        <div className="main">
          <TaskList
            items={visibleItems}
            onDelete={this.onDelete}
            onToggleDone={this.onToggleDone}
            updateItemTimer={this.updateItemTimer}
          />
          <Footer
            filter={filter}
            itemLeftCount={itemLeftCount}
            onFilterChange={this.onFilterChange}
            onDeleteAllCompletedTask={this.onDeleteAllCompltetedTask}
          />
        </div>
      </div>
    );
  }
}
