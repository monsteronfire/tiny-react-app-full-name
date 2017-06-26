import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <span>{this.props.greeting}, </span>
    )
  }
}

module.exports = Greeting;
