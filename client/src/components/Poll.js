import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PollOptionsForm from './PollOptionsForm';
import { Doughnut } from 'react-chartjs-2';

class Poll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      poll: null,
      selected: null,
      haveVoted: false
    }
  }

  async componentDidMount() {
    let poll = await axios.get(`/api/poll/${this.props.match.params.id}`);
    poll = poll.data
    this.setState({ poll });

    let ipAddress = await axios.get('/api/ip_address');
    ipAddress = ipAddress.data;

    if (~poll.voters.indexOf(ipAddress)) {
      this.setState({ haveVoted: true })
    }

    return;
  }

  handleChange = (event) => {
    this.setState({ selected: event.target.id });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    if (!this.state.selected) {
      return
    }

    const res = await axios
      .put(`/api/poll/${this.state.poll._id}/vote/${this.state.selected}`);

    this.setState({ poll: res.data, haveVoted: true });
  }

  renderPieChart(options) {
    const data = {
      datasets: [{
        data: options.map(o => o.votes),
        backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(255, 159, 64)'
            ]
      }],
      labels: options.map(o => o.name)
    };

    const totalVotes = options.reduce((acc, curr) => acc + curr.votes , 0);

    if (!totalVotes) {
      return (
        <div style={{ textAlign : 'center' }} className="blue-text">
          You are the first voter <span role="img" aria-label="hi">😘</span>
        </div>
      );
    }
    return (
      <Doughnut data={data} />
    );
  }

  render() {
    const poll = this.state.poll;

    if (!poll) {
      return <div>Loading...</div>
    }

    const { options } = this.state.poll;
    return (
      <div className="row">
        <div className="col s6">
          <PollOptionsForm
            options={poll.options}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            selected={this.state.selected}
            className="left"
            haveVoted={this.state.haveVoted}
          />
        </div>
        <div className="col s6" style={{ marginTop: '16px' }}>
          {this.renderPieChart(options)}
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ user }) {
  return { user };
}
export default connect(mapStateToProps, null)(Poll);
