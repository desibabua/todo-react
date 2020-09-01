import React from 'react';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { getDefaultStatus, getNextStatus } from './Statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(todoId) {
    this.setState((state) => {
      const todoList = [...state.todoList];
      const { task, status } = todoList[todoId];
      todoList[todoId] = { task, status: getNextStatus(status) };
      return { todoList };
    });
  }

  handleSubmit(task) {
    this.setState((state) => ({
      todoList: state.todoList.concat({ task, status: getDefaultStatus() }),
    }));
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <Tasks todoList={this.state.todoList} onClick={this.updateStatus} />
        <AddTask onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TodoList;
