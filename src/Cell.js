import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: props.color
    }
  }

  // Looking briefly at Cell, we can see that this color prop is used to set the initial state of the component, and that state value is then used to modify the background color of the returned div:

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}