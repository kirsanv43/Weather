import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../redux/actions/'
import {bindActionCreators} from 'redux'
import CitiesList from './citiesList'

export default class Home extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }
  render() {
    return (
      <section>
        <CitiesList />
      </section>);
  }
}
