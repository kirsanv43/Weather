import React from 'react'
import 'less/weather.less';

export default class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="trailer" className="is_overlay">
          <video id="video" width="100%" height="auto" autoPlay="autoplay" loop="loop" preload="auto">
            <source src="weather.mp4"></source>
          </video>
        </div>
        <div className="container">
          <header>
            <h2>Weather</h2>
          </header>
          {this.props.children}
        </div>
      </div>
    )
  }
}
