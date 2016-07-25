import React from 'react'
import 'style/weather.scss';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

export default class Application extends React.Component {
  constructor() {
    super();
  }

  getVideo() {
    if (!md.mobile()) {
      return (
        <div id="trailer" className="is_overlay">
          <video id="video" width="100%" height="auto" autoPlay="autoplay" loop="loop" preload="auto">
            <source src="weather.mp4"></source>
          </video>
        </div>
      )
    }
  }

  render() {

    console.log(md.mobile());
    return (
      <div>
        {this.getVideo()}
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
