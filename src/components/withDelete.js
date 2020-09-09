import React from 'react';

const DeleteBtn = function (props) {
  return (
    <div className="deleteBtn" onClick={props.onDelete}>
      X
    </div>
  );
};

const withDelete = function (Component, action, className) {
  return (props) => (
    <div className={className}>
      <Component {...props}/>
      <DeleteBtn onDelete={action} />
    </div>
  );
};

export default withDelete;
