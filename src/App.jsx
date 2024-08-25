import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button 
      className="square"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  // game state
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // display helpers
  const rows = Array(3).fill(null);
  const cols = Array(3).fill(null);

  // clicking a square
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  // calculate winner
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      {rows.map((_, rowIndex) => (
        <div 
          className="board-row"
          key={`row-${rowIndex}`}
        >
          {cols.map((_, colIndex) => (
            <Square 
              key={(rowIndex * 3) + colIndex + 1}
              value={squares[(rowIndex * 3) + colIndex]}
              onSquareClick={() => handleClick((rowIndex * 3) + colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
