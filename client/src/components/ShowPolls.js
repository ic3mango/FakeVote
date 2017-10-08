import React from 'react';
import PollListItem from './PollListItem';

export default ({ polls }) =>
  <div className="collection">
    {polls.map(poll =>
      <PollListItem key={poll._id} title={poll.title} pollId={poll._id} />)}
  </div>
