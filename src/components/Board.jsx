import Square from './Square'
import calculateWinner from '../utils/calculateWinner'

export default function Board({ xIsNext, isLastMove, squares, onPlay }) {
  // display helpers
  const rows = Array(3).fill(null);
  const cols = Array(3).fill(null);

  // calculate winner
  const winnerData = calculateWinner(squares);
  const winner = winnerData?.winner;
  const winningMove = winnerData?.winningMove;
  const status = winner 
    ? `Winner: ${winner}`
    : isLastMove 
      ? 'Draw'
      : `Next player: ${(xIsNext ? 'X' : 'O')}`;

  // clicking a square
  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
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
              isWinningMove={
                winningMove?.includes((rowIndex * 3) + colIndex) 
                  ? 'winning-square' 
                  : ''
              }
              onSquareClick={() => handleClick((rowIndex * 3) + colIndex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}
