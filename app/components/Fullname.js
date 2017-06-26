import React from 'react';
import Firstname from './Firstname';
import Surname from './Surname';

class Fullname extends React.Component {
  render() {
    return (
      <span>
        <Firstname firstname='Shaii'/>
        <span> </span>
        <Surname surname='Ong'/>
        <span>!</span>
      </span>
    )
  }
}

module.exports = Fullname;
