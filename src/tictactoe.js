const winningPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

export const checkWinningPlayer = (board) => {
  for (let position of winningPositions) {
    if (_isWin(board, position)) return board[position[0]]
  }
  return ''
};

export const getWinningSquares = (board) => {
  for (let position of winningPositions) {
    if (_isWin(board, position)) return position;
  }
  return [];
};

const _isWin = (board, position) => board[position[0]] === board[position[1]] && board[position[0]] === board[position[2]];