import React from 'react'
import {connect} from 'react-redux'
import * as actionsCreators from '../../redux/actions/'
import {bindActionCreators} from 'redux'
import CitiesListItem from './CitiesListItem'
import '../../less/Home/citiesList.less';
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
/*<li className="listItem addBtn"><Link to='addCity'><span>ADD CITY</span></Link></li> <li className="listItem addBtn"><a onClick={this.onAddCity}><span>ADD CITY</span></a></li>*/
  render() {
    let cities = this.props.cities.map((item, i) => {
      return <CitiesListItem key={i} item={item}/>
    });
    return <div className="weatherContainer">
      <ul>
        <li className="listItem addBtn"><Link to='addCity'><span>ADD CITY</span></Link></li>
        {cities}</ul>
      <div>
        <input onChange={this.onChange}/>
        <button onClick={this.onAdd}>add</button>
      </div>
    </div>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesList)
