import React from "react";
import Square from "./Square";
import "./Board.css";
import { checkWinningPlayer, getWinningSquares } from "./tictactoe";

class Board extends React.Component {
  startState = {
    isXNext: true,
    board: Array(9).fill(""),
    winningSquares: [],
    winningPlayer: "",
    history: [],
  }
  
  constructor(props) {
    super(props);
    this.state = this.startState;
  }

  handleClick = (i) => {
    this.setState((state) => {
      if (state.winningPlayer) {
        // Reset game
        return this.startState;
      }

      const newState = {}
      // Select square
      newState.board = [...state.board];
      newState.board[i] = state.isXNext ? 'X' : 'O';      
      // Check for winner
      newState.winningPlayer = checkWinningPlayer(newState.board);
      newState.winningSquares = [];
      if (newState.winningPlayer) {
        // Check for winning squares
        newState.winningSquares = getWinningSquares(newState.board);
      }
      // Toggle next up    
      newState.isXNext = !state.isXNext;
      // Add previous board to history
      newState.history = [...state.history, state];
      
      return newState;
    });
  };

  handleUndo = () => {
    this.setState(this.state.history.pop());
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.board[i]}
        isWinning={this.state.winningSquares.includes(i)}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="board">        
        { this.state.winningPlayer ? 
          <div className="winner">{`${this.state.winningPlayer} Won!`}</div> : 
          <div className="nextUp">{this.state.isXNext ? 'Next up: X' : 'Next up: O'}</div>}
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
        <div className="history">
          { this.state.history.length > 0 ? 
            <button onClick={this.handleUndo}>Undo</button> : ''}
        </div>
      </div>
    );
  }
}

export default Board;
