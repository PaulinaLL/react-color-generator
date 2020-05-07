import React from "react";
import "./App.css";
import Default from "./Components/Default";
import Color from "./Components/Color";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
    this.colorGenerator = this.colorGenerator.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  colorGenerator() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addColor() {
    const randomNum = this.colorGenerator();
    this.setState({
      colors: [randomNum, ...this.state.colors],
    });
  }

  removeColor(colorToRemove) {
    const colorsArray = this.state.colors.filter((items) => {
      return items !== colorToRemove;
    });
    this.setState({
      colors: colorsArray,
    });
  }

  render() {
    return (
      <div className="App">
        <main className="App-main">
          <h2>Color palette</h2>
          {this.state.colors.length === 0 ? (
            <Default />
          ) : (
            <ul>
              {this.state.colors.map((item, index) => {
                return (
                  <Color key={index} color={item} remove={this.removeColor} />
                );
              })}
            </ul>
          )}
          <button onClick={this.addColor}> Create color</button>
        </main>
      </div>
    );
  }
}

export default App;
