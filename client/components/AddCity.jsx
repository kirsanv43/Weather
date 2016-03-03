import React from 'react'
import 'less/addCity/suggest.less';
import Geosuggest from 'react-geosuggest'
import {connect} from 'react-redux'
import * as actionsCreators from '../redux/actions/'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'

class AddCity extends React.Component {
  constructor() {
    super();
  }
  onSuggestSelect = (suggest) => {
    const {lat, lng} = suggest.location;
    this.props.actions.selectCity(suggest.gmaps.address_components[0].long_name, lat, lng);
  };

  getAddBtn() {
    const self = this;
    const {lat, lng, name} = this.props.select;
    if (this.props.select && this.props.select.lat)
      return (
        <div className='addBtn listItem'>
          <Link onClick={(e) => self.props.actions.addCityByLocation(lat, lng, name)} to='/'>
            <span>ADD</span>
          </Link>
        </div>
      )
  }

  render() { 
    return (
      <section >
        <div className='addBtn listItem'>
          <Link to='/'>
            <span>BACK</span>
          </Link>
        </div>
        <Geosuggest className="listItem" placeholder="Enter city" onSuggestSelect={this.onSuggestSelect}/>
        {this.getAddBtn()}
      </section>
    )
  }
}

export default connect((state) => {
  return {select: state.select}
}, (dispatch) => {
  return {
    actions: bindActionCreators(actionsCreators, dispatch)
  }
})(AddCity)
