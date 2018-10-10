import React from 'react';
import BoardComponent from './Board.styles';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
  }
  handler(e) {
    e.preventDefault()
    this.setState({
      current: +1
    })
  }
  render() {
    return (
    <BoardComponent handler = {this.handler}>
        {this.props.children}
      </BoardComponent>
    )
  }
}
