import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import { Board } from './components/board/Board';
import { Square } from './components/square/Square';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      turn: 0
    }
  }
  updateTurn() {
    this.setState({
      turn: this.state.turn +1
    })
  }

  render() {
    return (
      <div id="App">
        <Header>
          <h1>Noughts and Crosses</h1>
        </Header>

        <Board>
          <Square onClick={this.updateTurn.bind(this)}>{this.state.symbol}</Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </Board>

      </div>
    )
  }
}

export default App;
