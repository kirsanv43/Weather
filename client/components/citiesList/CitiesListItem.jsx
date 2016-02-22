import React from 'react'
import '../../less/Home/citiesListItem.less';
import * as weatherStates from '../../redux/constants/weather'

export default class CitiesListItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    if (this.props.item.state === weatherStates.UNDEFINED) {
      this.props.loadWeather(this.props.item.id, this.props.item.lat, this.props.item.lng);
    }
  }

  onClose = () => {};

  getWeatherContent() {
    if (this.props.item.error) {
      return <div className='error'>{this.props.item.error}</div>;
    } else {
      return <div className={this.props.item.temp >= 0
        ? 'plus'
        : 'minus'}>{this.props.item.temp}</div>;
    }
  }

  render() {
    return (
      <li className="listItem">
        <a className="close" onClick={this.onClose}>
          <i className="material-icons">close</i>
        </a>
        <span>{this.props.item.name}</span>
        {this.getWeatherContent()}
      </li>
    )

  }
}
