const React = require('react');
const Firstname = require('./Firstname');
const Surname = require('./Surname');

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
