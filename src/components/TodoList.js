import React from 'react';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  getNewStatus(isDone, isInProgress) {
    if (isDone) {
      return { isDone: false, isInProgress: false };
    }
    if (isInProgress) {
      return { isDone: true, isInProgress: false };
    }
    return { isDone: false, isInProgress: true };
  }

  getUpdatedTodo({ task, isDone, isInProgress }) {
    return Object.assign({ task }, this.getNewStatus(isDone, isInProgress));
  }

  updateStatus(todoId) {
    this.setState(({ todoList }) => {
      let newTodoList = todoList.map((todo) => ({ ...todo }));
      const todo = newTodoList[todoId];
      newTodoList[todoId] = this.getUpdatedTodo(todo);
      return { todoList: newTodoList };
    });
  }

  handleSubmit(task) {
    this.setState((state) => ({
      todoList: state.todoList.concat([
        { task, isDone: false, isInProgress: false },
      ]),
    }));
  }

  render() {
    const TodoItems = this.state.todoList.map((todo, id) => (
      <TodoItem key={id} id={id} todo={todo} updateStatus={this.updateStatus} />
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
