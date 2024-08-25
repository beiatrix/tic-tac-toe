interface SquareProps {
  isWinningMove: boolean;
  onSquareClick: () => void;
  value: string;
}

export default function Square(
  { value, onSquareClick, isWinningMove }: SquareProps
) {
  return (
    <button 
      className={isWinningMove ? 'winning-move square' : 'square'}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}