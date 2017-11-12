import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Polls from './Polls';
import UserPolls from './UserPolls';
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
            <div className="container">
              <Route exact path="/polls" component={Polls} />
              <Route exact path="/poll/:id" component={Poll} />
              <Route exact path="/userpolls" component={RequireAuth(UserPolls)} />
              <Route exact path="/newpoll" component={RequireAuth(PollForm)} />
            </div>
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);
