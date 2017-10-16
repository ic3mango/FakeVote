import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.user) {
        this.props.history.push('/');
      }
    }

    render() {
      return this.props.user && <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { user: state.user };
  }

  return connect(mapStateToProps)(Authentication);
}
