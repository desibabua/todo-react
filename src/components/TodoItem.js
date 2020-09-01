import React from 'react';

const TodoItem = function ({ todo, id, onClick }) {
  const { task, status } = todo;
  return (
    <div id={id} className={'task ' + status} onClick={() => onClick(id)}>
      <div className="status"></div>
      <div>{task}</div>
    </div>
  );
};

export default TodoItem;
