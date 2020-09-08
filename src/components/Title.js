import React, { useState } from 'react';
import EditTitle from './InputBox';
import DeleteBtn from './DeleteBtn';

const Title = function (props) {
  let [isEditable, toggleIsEditable] = useState(false);

  const saveTitle = function (title) {
    props.onSubmit(title);
    toggleIsEditable((state) => !state);
  };

  if (isEditable) {
    return (
      <EditTitle className="title" value={props.title} onSubmit={saveTitle} />
    );
  }

  return (
    <div className="titleBar">
      <div
        className="title"
        onClick={() => toggleIsEditable((state) => !state)}
      >
        {props.title}
      </div>
      <DeleteBtn onDelete={props.onDelete} />
    </div>
  );
};

export default Title;
