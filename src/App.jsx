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
  const rows = Array(3).fill(null);
  const cols = Array(3).fill(null);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <>
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
