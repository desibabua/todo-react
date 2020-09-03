import React from 'react';

const DeleteBtn = function (props) {
  return (
    <div className="deleteBtn" onClick={props.onDelete}>
      X
    </div>
  );
}

export default DeleteBtn;