import React from 'react';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import { getDefaultStatus, getNextStatus } from './Statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [], title: 'Todo' };
    this.addTask = this.addTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateStatus(todoId) {
    this.setState((state) => {
      const toDos = [...state.toDos];
      const { task, status } = toDos[todoId];
      toDos[todoId] = { task, status: getNextStatus(status) };
      return { toDos };
    });
  }

  updateTitle(title) {
    this.setState(() => ({ title }));
  }

  addTask(task) {
    this.setState((state) => ({
      toDos: state.toDos.concat({ task, status: getDefaultStatus() }),
    }));
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} onSubmit={this.updateTitle} />
        <Tasks toDos={this.state.toDos} onClick={this.updateStatus} />
        <AddTask onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
