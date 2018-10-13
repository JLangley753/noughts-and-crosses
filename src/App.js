import React, { Component } from 'react';
import './App.css';
import Board from './components/board/board';

class App extends Component {
  render() {
    return (
      <div className="app" id="App">
        <div className="header">
          <h1>Noughts and Crosses</h1>
        </div>
        <div className="board-wrap">
          <Board />
        </div>
      </div>
    )
  }
}

export default App;
