import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (WrappedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.user) {
        console.log(this.props.history);
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

  return connect(mapStateToProps)(Authentication);
}
