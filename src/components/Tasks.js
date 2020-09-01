import React from 'react';
import Task from './Task';

const Tasks = function ({ todoList, onClick }) {
  return todoList.map(({ task, status }, id) => (
    <Task key={id} id={id} task={task} status={status} onClick={onClick} />
  ));
}

export default Tasks;
