  //////////////////////////////////////////////////
 // SETTINGS CONTAINER ////////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action Creators
import * as actions from '../../actions/boardOptionsActions'


// Higher order component, acceptes a wrapped component as an arg and returns an enhanced wrapped component
function SettingsContainer(EnhancedComponent) {
  
  // Settings Component, returns an enhanced EnhancedComponent
  class Settings extends Component {
    render() {
      return <EnhancedComponent {...this.props} />;
    }
  }

  // mapStateToProps
  const mapStateToProps = (state) => ({
    settings : state.settings
  })
  
  // Connect HOC passing in Settings
  return connect(mapStateToProps, actions)(Settings);

}


// export default connect(mapStateToProps, mapDispatchToProps)(Settings);
export default SettingsContainer;