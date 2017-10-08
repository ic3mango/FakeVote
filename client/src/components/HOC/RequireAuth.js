import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.user) {
        this.props.history.push('/');
      }
    }

    render() {  
      return <WrappedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { user: state.user };
  }

  return withRouter(connect(mapStateToProps)(Authentication));
}
