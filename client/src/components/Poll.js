import React, { Component } from 'react';

class Poll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: null
    }
  }

  render() {
    return <h2>Single Poll</h2>
  }
}

export default Poll;
