import React from 'react';
import Greeting from './Greeting';
import Fullname from './Fullname';

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
