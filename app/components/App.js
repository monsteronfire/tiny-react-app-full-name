const React = require('react');
const Greeting = require('./Greeting');
const Firstname = require('./Firstname');
const Surname = require('./Surname');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Greeting greeting='Bula'/>
        <Firstname firstname='Shaii'/>
        <Surname surname='Ong'/>
      </div>
    )
  }
}

module.exports = App;
