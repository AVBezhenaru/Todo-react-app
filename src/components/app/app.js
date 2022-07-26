import React, { useState } from 'react';

import TaskList from '../taskList/taskList';
import Footer from '../footer/footer';
import NewTaskForm from '../newTaskForm/newTaskForm';

import './app.css';

const App = () => {
  let [indexId, setIndexId] = useState(100);
  const [filter, setFilter] = useState('all');

  const create = (text) => {
    return {
      id: indexId++,
      label: text,
      created: new Date(),
      done: false,
      checked: false,
      timer: 0,
    };
  };

  const [items, setItems] = useState([create('Completed task'), create('Active task')]);

  const addItem = (text) => {
    setIndexId((indexId) => indexId + 1);
    const newItem = create(text);

    setItems([...items, newItem]);
  };

  const onDelete = (id) => {
    const index = items.findIndex((el) => el.id === id);
    const newArr = [...items.splice(0, index), ...items.splice(index + 1)];

    setItems(newArr);
  };

  const updateItemTimer = (time, id) => {
    const result = [];
    items.map((item) => {
      if (item.id === id) {
        item.timer = time;
      }
      result.push(item);
    });

    setItems(result);
  };

  const onToggleDone = (id) => {
    const result = [];
    items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
        item.checked = !item.checked;
      }
      return result.push(item);
    });

    setItems(result);
  };

  const onDeleteAllCompltetedTask = () => {
    setItems(items.filter((item) => item.done === false));
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const filterItems = (items, filter) => {
    if (filter === 'all') {
      return items;
    } else if (filter === 'active') {
      return items.filter((item) => item.done === false);
    } else if (filter === 'completed') {
      return items.filter((item) => item.done === true);
    }
  };

  const itemLeftCount = items.filter((el) => el.done === false).length;
  const visibleItems = filterItems(items, filter);

  return (
    <div className="todoapp">
      <div className="header">
        <h1>todos</h1>
        <NewTaskForm addItem={addItem} />
      </div>
      <div className="main">
        <TaskList
          items={visibleItems}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
          updateItemTimer={updateItemTimer}
        />
        <Footer
          filter={filter}
          itemLeftCount={itemLeftCount}
          onFilterChange={onFilterChange}
          onDeleteAllCompletedTask={onDeleteAllCompltetedTask}
        />
      </div>
    </div>
  );
};

export default App;
