import React, { Component } from 'react';
import axios from 'axios';
import ShowPolls from './ShowPolls'
import Loading from './Loading';

class Polls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPolls: []
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
        <div>
          {this.state.allPolls ?
            <ShowPolls polls={this.state.allPolls} />
            : <Loading />}
        </div>
      </div>
    );
  }
}

export default Polls;
