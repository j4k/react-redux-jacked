import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators';

class BasePage extends Component {
  static propTypes = {
      actions: PropTypes.object.isRequired,
      appState: PropTypes.object.isRequired
  };

  render() {
    return (
        <div>Test</div>
    );
  }
}

function mapStateToProps(state) {
    return {
        appState: state.defaultAppState
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasePage);
