import { useState } from 'react';
import Board from './components/Board'

export default function Game() {
  // game state
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isLastMove, setIsLastMove] = useState(false);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  // game play
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setIsLastMove(currentMove === 8);
  }

  // game history
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setIsLastMove(currentMove === 8);
  }
  
  const moves = history.map((squares, move) => {
    const description = move > 0
      ? `Go to move #${move}`
      : 'Go to game start';

    return (
      <li key={`move-${move}`}>
        <button 
          className="btn-move"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          isLastMove={isLastMove}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}
