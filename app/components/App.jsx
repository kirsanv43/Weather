import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../redux/actions/'
import {bindActionCreators} from 'redux'
import '../less/weather.less';
import Home from './Home'
import AddCity from './AddCity'
import { routeActions } from 'react-router-redux'

class App extends React.Component {
  constructor() {
    super();
  }

  render() { 
    return <div>{this.props.children}</div>
  }
}

export default connect(
  null,
  routeActions
)(App)
