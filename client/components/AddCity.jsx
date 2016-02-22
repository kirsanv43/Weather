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
    const {lat, lng} = suggest.location;
    this.props.actions.addCityByLocation(lat, lng, suggest.gmaps.address_components[0].long_name);
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
