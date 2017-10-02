import React from 'react';

export default ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <h3>{label}</h3>
      <input {...input} />
      <div className="red-text">
        {touched && error}
      </div>
    </div>
  );
}
