import React from 'react';

class Firstname extends React.Component {
  render() {
    return (
      <span>{this.props.firstname}</span>
    )
  }
}

module.exports = Firstname;
