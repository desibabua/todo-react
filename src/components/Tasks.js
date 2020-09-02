import React from 'react';
import Task from './Task';

const Tasks = function ({ toDos, onClick, onDelete }) {
  return toDos.map(({ id, task, status }) => (
    <Task
      key={id}
      id={id}
      task={task}
      status={status}
      onClick={onClick}
      onDelete={onDelete}
    />
  ));
};

export default Tasks;
