import React, { useState } from 'react';
import EditTitle from './InputBox';

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
    <div className="title" onClick={() => toggleIsEditable((state) => !state)}>
      {props.title}
    </div>
  );
};

export default Title;
