import React from 'react';
import PollListItem from './PollListItem';

export default ({ polls }) =>
  <div className="collection">
    {polls.length > 0 ?
      polls.map(poll =>
        <PollListItem key={poll._id} title={poll.title} pollId={poll._id} />)
    : <h4>Loading...</h4>}
  </div>
