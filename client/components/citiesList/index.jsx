import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../../redux/actions/'
import {bindActionCreators} from 'redux'
import CitiesListItem from './CitiesListItem'
import 'less/Home/citiesList.less';
import {Link} from 'react-router'

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
    this.props.route.push('/addCity')
  };

  render() {
    let self = this;
    let cities = this.props.cities.map((item, i) => {
      return <CitiesListItem key={i} removeCity={self.props.actions.removeCity} loadWeather={self.props.actions.loadWeather} item={item}/>
    });
    return (
      <div className="weatherContainer">
        <ul>
          <li className="listItem addBtn">
            <Link to='addCity'>
              <span>ADD CITY</span>
            </Link>
          </li>
          {cities}</ul>
        <div></div>
      </div>
    );
  }

}

CitiesList.propTypes = {
  cities: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {cities: state.cities}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionsCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList)
