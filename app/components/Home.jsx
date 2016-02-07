import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../redux/actions/'
import {bindActionCreators} from 'redux'
import '../less/weather.less';
import CitiesList from './citiesList'

import { routeActions } from 'react-router-redux'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <section>
      <header>
        <h2>Weather</h2>
      </header>
      <CitiesList />
    </section>
  }
}
