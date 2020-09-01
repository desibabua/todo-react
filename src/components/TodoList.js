import React from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import { getDefaultStatus, getNextStatus } from './statuses';

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
    const TodoItems = this.state.todoList.map((todo, id) => (
      <TodoItem key={id} id={id} todo={todo} onClick={this.updateStatus} />
    ));

    return (
      <div>
        <h1>Todo</h1>
        {TodoItems}
        <AddItem onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TodoList;
