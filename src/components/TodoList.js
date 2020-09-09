import React, { useState } from 'react';
import withDelete from './withDelete';
import Title from './Title';
import Tasks from './Tasks';
import AddTask from './InputBox';
import { getDefaultStatus, getNextStatus } from './Statuses';

const DEFAULT_HEADING = 'Todo';

const TodoList = function () {
  const [title, setTitle] = useState(DEFAULT_HEADING);
  const [toDos, setToDos] = useState([]);
  const [lastTaskId, setLastTaskId] = useState(0);

  const resetTodo = function () {
    setTitle(DEFAULT_HEADING);
    setToDos([]);
    setLastTaskId(0);
  };

  const updateTitle = function (title) {
    setTitle(title);
  };

  const addTask = function (task) {
    setToDos([...toDos, { id: lastTaskId, task, status: getDefaultStatus() }]);
    setLastTaskId(lastTaskId + 1);
  };

  const deleteTask = function (taskId) {
    console.log(taskId)
    setToDos(toDos.filter((task) => task.id !== taskId));
  };

  const updateStatus = function (taskId) {
    const task = toDos.find((task) => task.id === taskId);
    task.status = getNextStatus(task.status);
    setToDos([...toDos]);
  };

  const TitleWithDelete = withDelete(Title, () => resetTodo(), 'titleBar');

  return (
    <div>
      <TitleWithDelete title={title} onSubmit={updateTitle} />
      <Tasks toDos={toDos} onClick={updateStatus} onDelete={deleteTask} />
      <AddTask onSubmit={addTask} />
    </div>
  );
};

export default TodoList;
