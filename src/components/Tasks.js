import React from 'react';
import Task from './Task';

const Tasks = function ({ toDos, onClick, onDelete }) {
  return toDos.map((toDo) => (
    <Task key={toDo.id} {...toDo} onClick={onClick} onDelete={onDelete} />
  ));
};

export default Tasks;
