import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators';
import { withRouter } from 'react-router';

export class BasePage extends Component {
  render() {
    return (
        <div className="test-more">Test more</div>
    );
  }
}

export default connect(
  (state) => { return { appState: state.defaultAppState }; },
  (dispatch) => { return { actions: bindActionCreators(actions, dispatch)}; }
)(withRouter(BasePage));
