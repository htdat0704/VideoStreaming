import React, { useState } from "react";

const ChessGame = () => {
  const [board, setBoard] = useState([
    // Initial chess board configuration
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ]);

  const renderSquare = (piece, row, col) => {
    return (
      <div
        key={`${row}-${col}`}
        className="w-12 h-12 bg-gray-400 flex items-center justify-center text-2xl font-bold"
      >
        {piece}
      </div>
    );
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className="flex">
          {row.map((piece, colIndex) =>
            renderSquare(piece, rowIndex, colIndex)
          )}
        </div>
      );
    });
  };

  return <div className="chess-board">{renderBoard()}</div>;
};

export default ChessGame;
