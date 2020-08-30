import React from 'react';

const TodoItem = function ({ todo, id, updateStatus }) {
  const className = todo.isDone ? 'doneTask' : 'unDoneTask';
  return (
    <div id={id} className={className} onClick={(e)=>updateStatus(id)}>
      <div className="status"></div>
      <div className="task">{todo.task}</div>
    </div>
  );
};

export default TodoItem;
