import React, { useState, useEffect } from 'react';
import withDelete from './withDelete';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import requestAPI from './reqApi';

const TodoList = function () {
  const [toDoList, setToDoList] = useState(null);

  const updateTodo = () => requestAPI.getAllToDos().then(setToDoList);

  useEffect(() => {
    updateTodo();
  }, []);

  const resetTodo = function () {
    requestAPI.resetToDos().then(setToDoList);
  };

  const updateTitle = function (title) {
    requestAPI.updateTitle(title).then(updateTodo);
  };

  const addTask = function (task) {
    requestAPI.addTask(task).then(updateTodo);
  };

  const deleteTask = function (taskId) {
    requestAPI.deleteTask(taskId).then(updateTodo);
  };

  const updateStatus = function (taskId) {
    requestAPI.updateStatus(taskId).then(updateTodo);
  };

  const TitleWithDelete = withDelete(Title, () => resetTodo(), 'titleBar');

  if (!toDoList) return <div>loading...</div>;

  return (
    <div>
      <TitleWithDelete title={toDoList.title} onSubmit={updateTitle} />
      <Tasks
        toDos={toDoList.toDos}
        onClick={updateStatus}
        onDelete={deleteTask}
      />
      <AddTask onSubmit={addTask} />
    </div>
  );
};

export default TodoList;
