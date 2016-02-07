import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../../redux/actions/'
import {bindActionCreators} from 'redux'
import CitiesListItem from './CitiesListItem'
import { routeActions } from 'react-router-redux'
import '../../less/citiesList.less';
import {  Link } from 'react-router'

class CitiesList extends React.Component {
  constructor() {
    super();
  }

  onChange = (e) => {
    this.value = e.target.value;
  };

  onAdd = () => {
    const {props: {
        actions
      }} = this;

    actions.addCity(this.value)
  };

  onAddCity = () => {
    console.log('push');
    this.props.route.push('/addCity')
  };

  render() {
    let cities = this.props.cities.map((item, i) => {
      return <CitiesListItem key={i} name={item}/>
    });
    return <div className="weatherContainer">
      <ul>
        <li className="listItem addBtn"><Link to="/AddCity"><span>ADD CITY</span></Link></li>
        {cities}</ul>
      <div>
        <input onChange={this.onChange}/>
        <button onClick={this.onAdd}>add</button>
      </div>
    </div>
  }

}

CitiesList.propTypes = {
  cities: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
}


function mapStateToProps(state) {
  return {cities: state.cities}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsCreators, dispatch),
    route:bindActionCreators(routeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList)
