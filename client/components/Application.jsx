import React from 'react'
import '../less/weather.less';

export default class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="container">  <header>
        <h2>Weather</h2>
      </header>{this.props.children}</div>
  }
}
