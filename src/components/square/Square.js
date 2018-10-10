import React from 'react';
import SquareComponent from './Square.styles';

export class Square extends React.Component {
  constructor(props) {
    super();
    this.state = {
      symbol: props.empty,
      current: props.turn
    }
  };

  noughtOrCross() {
    if (this.state.current % 2 == 0) {
      this.setState({
        current: this.state.current + 1,
        symbol: this.state.symbol = 'X'
      })
    } else {
      this.setState({
        current: this.state.current + 1,
        symbol: this.state.symbol = 'O'
      })
    }
  }

  render() {
    return(
      <SquareComponent>
      </SquareComponent>
    )
  }
}
