import React from "react";
import "./Square.css";

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         data-testid="square"
//         className={`square ${this.props.isWinning ? "winning" : ""}`}
//         onClick={this.props.onClick}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

const Square = (props) => (
  <button
    data-testid="square"
    className={`square ${props.isWinning ? "winning" : ""}`}
    onClick={props.onClick}
  >
    {props.value}
  </button>
);

export default Square;
