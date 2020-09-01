import React from 'react';

const Todo = function ({ task, status, id, onClick }) {
  return (
    <div id={id} className={'task ' + status} onClick={() => onClick(id)}>
      <div className="status"></div>
      <div>{task}</div>
    </div>
  );
};

export default Todo;
