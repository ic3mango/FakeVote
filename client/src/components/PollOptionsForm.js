import React from 'react';

export default ({ options, title, handleChange, handleSubmit, selected, haveVoted }) =>
  <form action="" onSubmit={handleSubmit}>
    <h2>{title}</h2>
    {options.map(option => (
      <p key={option.name}>
        <input
          type="radio"
          className="with-gap"
          name="vote"
          id={option.name}
          checked={option.name === selected}
          onChange={handleChange}
        />
        <label style={{ color: "#444444" }} htmlFor={option.name}>{option.name}</label>
      </p>
    ))}
    <button
      type="submit"
      className={haveVoted ? "btn disabled" : "btn green"}
      style={{ margin: '16px 0px' }}
    >Submit</button>
    <div className="red-text">
      {haveVoted ? "You have already voted in this poll!" : ""}
    </div>
  </form>
