import React from 'react';
import Task from './Task';

const Tasks = function ({ toDos, onClick }) {
  return toDos.map(({ task, status }, id) => (
    <Task key={id} id={id} task={task} status={status} onClick={onClick} />
  ));
}

export default Tasks;
