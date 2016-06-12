import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators';
import { withRouter } from 'react-router';

class BasePage extends Component {
  static propTypes = {
      actions: PropTypes.object.isRequired,
      appState: PropTypes.object.isRequired,
      router: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
  };

  render() {
    return (
        <div class="test-more">Test more</div>
    );
  }
}

const DecoratedBasePage = withRouter(BasePage);

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
)(DecoratedBasePage);
