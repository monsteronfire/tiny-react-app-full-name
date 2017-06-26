const React = require('react');
const Greeting = require('./Greeting');
const Fullname = require('./Fullname');

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Greeting greeting='Bula'/>
        <Fullname/>
      </div>
    )
  }
}

module.exports = App;
