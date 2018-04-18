const React = require("react")

class Animal extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <li>
        {this.props.name} is a {this.props.type} and is {this.props.age} years old
      </li>
    )
  }
}

module.exports = Animal

