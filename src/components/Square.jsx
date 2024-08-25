export default function Square({ value, onSquareClick, isWinningMove }) {
  return (
    <button 
      className={isWinningMove ? 'winning-move square' : 'square'}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}