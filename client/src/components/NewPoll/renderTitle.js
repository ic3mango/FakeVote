import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <h4>{label}</h4>
      <input {...input} />
      <div className="red-text">
        {touched && error}
      </div>
    </div>
  );
}
