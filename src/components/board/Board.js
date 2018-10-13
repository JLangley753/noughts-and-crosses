import React, {Component} from 'react';
import './board.css'

function Square(props) {
  return (<div className={props.class} onClick={props.onClick}>
    {props.value}
  </div>);
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xCurrentTurn: true,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xCurrentTurn
      ? 'O'
      : 'X';
    this.setState({
      squares: squares,
      xCurrentTurn: !this.state.xCurrentTurn,
    });
  }

  restartBoard() {
    return (this.setState({squares: Array(9).fill(null), xCurrentTurn: true}))
  }

  renderSquare(i) {
    return <Square key={i} value={this.state.squares[i]} class= {"square"} onClick={() => this.handleClick(i)}/>;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = winner + ' wins';
    } else {
      status = (this.state.xCurrentTurn
        ? 'O'
        : 'X');
    }

    return (<div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
      <div className="button-wrap">
        <button onClick={this.restartBoard.bind(this)} className="restart-button">Reset</button>
      </div>
    </div>)
  }
}

function calculateWinner(squares) {
  var j;
  const lines = [
    [
      0, 1, 2
    ],
    [
      3, 4, 5
    ],
    [
      6, 7, 8
    ],
    [
      0, 3, 6
    ],
    [
      1, 4, 7
    ],
    [
      2, 5, 8
    ],
    [
      0, 4, 8
    ],
    [
      2, 4, 6
    ]
  ];
  for (j = 0; j < lines.length; j++) {
    const [a, b, c] = lines[j];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
