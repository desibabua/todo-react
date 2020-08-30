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

  updateStatus(todoId) {
    this.setState((state) => {
      let todoList = state.todoList.slice();
      const todo = state.todoList[todoId];
      const updatedTodo = {task: todo.task, isDone: !todo.isDone};
      todoList[todoId] = updatedTodo;
      return { todoList };
    })
  }

  handleSubmit(task) {
    this.setState((state) => ({
      todoList: state.todoList.concat([{ task, isDone: false }]),
    }));
  }

  render() {
    const TodoItems = this.state.todoList.map((todo, id) => (
      <TodoItem key={id} id={id} todo={todo} updateStatus={this.updateStatus}/>
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
