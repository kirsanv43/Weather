import React from 'react'
import '../../less/citiesListItem.less';

export default class CitiesListItem extends React.Component {
  constructor() {
    super();
  }

  onClose = () => {};

  render() {
    return(
    <li className="listItem">
      <a className="close"  onClick={this.onClose}>
        <i className="material-icons">close</i>
      </a>
    </li>)

  }
}