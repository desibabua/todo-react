import React from 'react';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import { getDefaultStatus, getNextStatus } from './Statuses';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toDos: [], title: 'Todo' };
    this.lastTaskId = 0;
    this.updateTitle = this.updateTitle.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateTitle(title) {
    this.setState(() => ({ title }));
  }

  addTask(task) {
    this.setState(({ toDos }) => ({
      toDos: toDos.concat({
        id: this.lastTaskId,
        task,
        status: getDefaultStatus(),
      }),
    }));
    this.lastTaskId++;
  }

  deleteTask(taskId) {
    this.setState(({ toDos }) => ({
      toDos: toDos.filter((task) => task.id !== taskId),
    }));
  }

  updateStatus(taskId) {
    this.setState((state) => {
      const toDos = state.toDos.map((task) => ({ ...task }));
      const task = toDos.find((task) => task.id === taskId);
      task.status = getNextStatus(task.status);
      return { toDos };
    });
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} onSubmit={this.updateTitle} />
        <Tasks toDos={this.state.toDos} onClick={this.updateStatus} onDelete={this.deleteTask}/>
        <AddTask onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
