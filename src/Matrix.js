import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }
  // Keeps track of the selected color. 


  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  // Above Method can change that states value. To keep it abstract this method updates selectedColor with whtatever is passes into it as an argument. 

  genRow = (vals) => ( //Passing down selected color
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  // In the process of returning each of these divs, genRow() is called, which returns a collection of Cell components. The Cell component itself just renders a div, so these two functions working together return a series of divs, each containing another series of divs. The actual color value stored in the data is passed into Cell as color={val}.

  // Cell, on the other hand, only needs to know the currently selected color, not change it. We can pass this in to every Cell returned by genRow() as a prop called selectedColor:

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}
// ColorSelector is the interface where users will be able to select a color, so it will need access to setSelectedColor. We can pass the needed function down as a prop:

Matrix.defaultProps = {
  values: learnSymbol
}