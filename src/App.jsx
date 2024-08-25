function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  const rows = Array(3).fill(null)
  const squares = Array(3).fill(null)

  return (
    <>
    {/* rows from 1-3 */}
    {rows.map((_, rowIndex) => (
      <div 
        className="board-row"
        key={`row-${rowIndex}`}
      >
        {/* squares from 1-9 */}
        {squares.map((_, squareIndex) => (
          <Square
            key={(rowIndex * 3) + squareIndex + 1}
            value={(rowIndex * 3) + squareIndex + 1}
          />
        ))}
      </div>
    ))}
    </>
  );
}
