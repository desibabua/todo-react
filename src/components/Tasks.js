import React from 'react';
import Task from './Task';
import withDelete from './withDelete';

const Tasks = function ({ toDos, onClick, onDelete }) {
  return toDos.map((toDo) => {
    const TaskWithDelete =  withDelete(Task, () => onDelete(toDo.id),'taskBar');
    return <TaskWithDelete key={toDo.id} {...toDo} onClick={onClick}/>;
  });
};

export default Tasks;
