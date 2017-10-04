import React from "react";
import { Link } from "react-router-dom";

export default ({title, pollId}) => {
  return (
    <Link
      to={`/poll/${pollId}`}
      className="collection-item"
    >
      {title}
    </Link>
  );
};
