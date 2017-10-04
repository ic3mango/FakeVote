import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import ShowPolls from "./ShowPolls";

class MyPolls extends Component {
  constructor(props) {
    super(props);
    this.state = { myPolls: null };
  }

  componentDidMount() {
    axios
      .get(`/api/polls/${this.props.user._id}`)
      .then(res => this.setState({ myPolls: res.data }));
  }

  render() {
    return (
      <div>
        <h2>My Polls</h2>
        <ShowPolls polls={this.state.myPolls || []} />
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(MyPolls);
