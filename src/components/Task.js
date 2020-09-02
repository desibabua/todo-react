import React from 'react';

const Todo = function ({ task, status, id, onClick, onDelete }) {
  return (
    <div id={id} className={'task ' + status}>
      <div className="status"></div>
      <div className="content" onClick={() => onClick(id)}>
        {task}
      </div>
      <div className="deleteBtn" onClick={() => onDelete(id)}>
        X
      </div>
    </div>
  );
};

export default Todo;
