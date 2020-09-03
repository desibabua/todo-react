import React from 'react';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import { getDefaultStatus, getNextStatus } from './Statuses';

const DEFAULT_HEADING = 'Todo'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: DEFAULT_HEADING, toDos: [], lastTaskId: 0 };
    this.resetTodo = this.resetTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  resetTodo() {
    this.setState(() => ({ title: DEFAULT_HEADING, toDos: [], lastTaskId: 0 }));
  }

  updateTitle(title) {
    this.setState(() => ({ title }));
  }

  addTask(task) {
    this.setState(({ toDos, lastTaskId }) => ({
      toDos: toDos.concat({
        id: lastTaskId + 1,
        task,
        status: getDefaultStatus(),
      }),
      lastTaskId: lastTaskId + 1,
    }));
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
        <Title
          title={this.state.title}
          onSubmit={this.updateTitle}
          onDelete={this.resetTodo}
        />
        <Tasks
          toDos={this.state.toDos}
          onClick={this.updateStatus}
          onDelete={this.deleteTask}
        />
        <AddTask onSubmit={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
