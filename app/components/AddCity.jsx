import React from 'react'
import '../less/addCity/suggest.less';
import Geosuggest from 'react-geosuggest'
import {connect} from 'react-redux'
import * as actionsCreators from '../redux/actions/'
import {bindActionCreators} from 'redux'

class AddCity extends React.Component {
  constructor() {
    super();
  }
  onSuggestSelect = (suggest) => {
    console.log(suggest);
    const {lat, lng} = suggest.location;
    this.props.actions.addCityByLocation(lat, lng,suggest.gmaps.address_components[0].long_name);
    //http://api.openweathermap.org/data/2.5/weather?APPID=e747a58014a55dee6ae7e1dca103a5d5&lat=53.2415041&lon=50.2212462999999
  };

  render() {
    return <section><Geosuggest placeholder="Enter city" onSuggestSelect={this.onSuggestSelect}/></section>
  }
}

export default connect((state) => {
  return {}
}, (dispatch) => {
  return {
    actions: bindActionCreators(actionsCreators, dispatch)
  }
})(AddCity)
