import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Polls from './Polls';
import MyPolls from './MyPolls';
import PollForm from './NewPoll/PollForm';
import Poll from './Poll';

import RequireAuth from './HOC/RequireAuth';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route path="/polls" component={Polls} />
              <Route path="/poll/:id" component={Poll} />
              <Route path="/mypolls" component={RequireAuth(MyPolls)} />
              <Route path="/newpoll" component={RequireAuth(PollForm)} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
