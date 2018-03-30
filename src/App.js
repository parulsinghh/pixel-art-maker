import React, { Component } from 'react';
import times from 'lodash.times';
import './App.css';

class App extends Component {
  state = {
    pickerColor: '#000000',
    rows: 1,
    cols: 1
  }

  handleColorChange = (e) => {
    this.setState({ pickerColor: e.target.value })
  }

  handleGridChange = (e, type) => {
    this.setState({ [type]: parseInt(e.target.value, 10) || 1 })
  }

  fillColWithColor = (e) => {
    e.target.style.backgroundColor = this.state.pickerColor
  }

  render() {
    return (
      <div className="App">
        <h1>Lab: Pixel Art Maker</h1>
        <h2>Choose Grid Size</h2>
        <form>
          <label>Grid Rows:</label>
          <input
            type="number"
            min="1"
            defaultValue={this.state.rows}
            onChange={(e) => this.handleGridChange(e, 'rows')}
          />
          <label>Grid Cols:</label>
          <input
            type="number"
            min="1"
            defaultValue={this.state.cols}
            onChange={(e) => this.handleGridChange(e, 'cols')}
          />
        </form>

        <h2>Pick A Color</h2>
        <input
          type="color"
          defaultValue={this.state.pickerColor}
          onChange={this.handleColorChange}
        />

        <h2>Design Canvas</h2>
        <table>
          <tbody>
            {times(this.state.rows, Number).map((item, index) => (
              <tr key={index}>
                {times(this.state.cols, Number).map(
                  (item, index) => <td onClick={this.fillColWithColor} key={index}></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
