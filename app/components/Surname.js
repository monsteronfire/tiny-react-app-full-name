const React = require('react');

class Surname extends React.Component {
  render() {
    return (
      <span>{this.props.surname}</span>
    )
  }
}

module.exports = Surname;
