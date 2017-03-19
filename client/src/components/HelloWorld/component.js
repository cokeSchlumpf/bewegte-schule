import React, { PropTypes } from 'react';

const HelloWorld = ({ value, onChangeValue }) => {
  const onChangeHandler = (event) => {
    onChangeValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
    </div>
  );
}

HelloWorld.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func
}

export default HelloWorld;