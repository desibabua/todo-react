import React from 'react';
import DeleteBtn from './DeleteBtn';

const Todo = function ({ task, status, id, onClick, onDelete }) {
  return (
    <div id={id} className={'task ' + status}>
      <div className="status"></div>
      <div className="content" onClick={() => onClick(id)}>
        {task}
      </div>
      <DeleteBtn onDelete={() => onDelete(id)}/>
    </div>
  );
};

export default Todo;
