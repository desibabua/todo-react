import React from 'react';

const TodoItem = function ({ todo, id, updateStatus }) {
  const { task, isDone, isInProgress } = todo;
  const className =
    'task ' + (isDone ? 'done' : isInProgress ? 'inProgress' : 'unDone');
  return (
    <div id={id} className={className} onClick={() => updateStatus(id)}>
      <div className="status"></div>
      <div>{task}</div>
    </div>
  );
};

export default TodoItem;
