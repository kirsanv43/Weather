import React from 'react'

export default class Application extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
