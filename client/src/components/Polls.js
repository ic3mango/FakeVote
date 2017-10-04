import React, { Component } from 'react';
import axios from 'axios';
import ShowPolls from './ShowPolls'

class AllPolls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPolls: null
    };
  }

  componentDidMount() {
    axios.get(`/api/polls/`)
      .then(res => this.setState({ allPolls: res.data} ));
  }

  render() {
    return (
      <div>
        <h2>All Polls</h2>
        <ShowPolls polls={this.state.allPolls || []} />
      </div>
    );
  }
}

export default AllPolls;
