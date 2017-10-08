import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Header extends Component {
  renderContent() {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <div>
            <li key="0"><a href="/auth/google">Login With Google</a></li>
            <li key="1"><a href="/auth/twitter">Login With Twitter</a></li>
          </div>
        );
      default:
        return (
          <div>
            <li key="3"><Link to="/polls">All</Link></li>
            <li key="4"><Link to="/mypolls">My Polls</Link></li>
            <li key="5"><Link to="/newpoll">New Poll</Link></li>
            <li key="2"><a href="/api/logout">Logout</a></li>
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        <nav className="orange">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">
              <i className="material-icons">assessment</i>FakeVote
            </a>
            <ul className="right hide-on-med-and-down">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

function mapStateToProps({user}) {
  return { user };
}

export default connect(mapStateToProps)(Header);
