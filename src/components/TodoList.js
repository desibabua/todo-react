import React from 'react';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import { getDefaultStatus, getNextStatus } from './Statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: 'todo',
    };
    this.addTask = this.addTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateStatus(todoId) {
    this.setState((state) => {
      const todoList = [...state.todoList];
      const { task, status } = todoList[todoId];
      todoList[todoId] = { task, status: getNextStatus(status) };
      return { todoList };
    });
  }

  updateTitle(title) {
    this.setState(() => ({title}));
  }

  addTask(task) {
    this.setState((state) => ({
      todoList: state.todoList.concat({ task, status: getDefaultStatus() }),
    }));
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} onSubmit={this.updateTitle} />
        <Tasks todoList={this.state.todoList} onClick={this.updateStatus} />
        <AddTask onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
