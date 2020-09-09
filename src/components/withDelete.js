import React from 'react';

const DeleteBtn = function (props) {
  return (
    <div className="deleteBtn" {...props}>
      X
    </div>
  );
};

const withDelete = function (Component, action, className) {
  return (props) => (
    <div className={className}>
      <Component {...props} />
      <DeleteBtn onClick={action} />
    </div>
  );
};

export default withDelete;
