import React, { useState } from 'react';

const InputBox = function (props) {
  const [value, setValue] = useState(props.value || '');

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        onChange={handleChange}
        value={value}
        className={props.className}
      />
    </form>
  );
};

export default InputBox;
