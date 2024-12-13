import React, { useState } from "react";
import "./TicTacToe.css"; // Add styles for the game

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const winner = calculateWinner(board);

  // Handle player's move
  const handlePlayerMove = (index) => {
    if (board[index] || winner || !isPlayerTurn) return;

    const newBoard = board.slice();
    newBoard[index] = "X"; // Player is always "X"
    setBoard(newBoard);
    setIsPlayerTurn(false);

    if (!calculateWinner(newBoard) && !newBoard.every((cell) => cell)) {
      setTimeout(() => makeAIMove(newBoard), 500); // AI moves after a delay
    }
  };

  // Handle AI's move
  const makeAIMove = (currentBoard) => {
    const bestMove = findBestMove(currentBoard);
    if (bestMove !== null) {
      const newBoard = currentBoard.slice();
      newBoard[bestMove] = "O"; // AI is always "O"
      setBoard(newBoard);
    }
    setIsPlayerTurn(true);
  };

  // Restart the game
  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  // Render a single square
  const renderSquare = (index) => (
    <button
      className="square"
      onClick={() => handlePlayerMove(index)}
      disabled={!!board[index] || winner || !isPlayerTurn}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="tic-tac-toe">
      <h2>Tic Tac Toe (Player vs AI)</h2>
      <div className="board">
        {board.map((_, index) => renderSquare(index))}
      </div>
      <p className="status">
        {winner
          ? `Winner: ${winner}`
          : board.every((cell) => cell)
          ? "It's a draw!"
          : `Next Turn: ${isPlayerTurn ? "Player" : "AI"}`}
      </p>
      <button className="restart" onClick={handleRestart}>
        Restart Game
      </button>
    </div>
  );
};

// Minimax Algorithm for AI
const findBestMove = (board) => {
  let bestMove = null;
  let bestValue = -Infinity;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = "O"; // Simulate AI move
      const moveValue = minimax(board, false);
      board[i] = null; // Undo move

      if (moveValue > bestValue) {
        bestValue = moveValue;
        bestMove = i;
      }
    }
  }
  return bestMove;
};

const minimax = (board, isMaximizing) => {
  const winner = calculateWinner(board);
  if (winner === "X") return -10; // Player wins
  if (winner === "O") return 10; // AI wins
  if (board.every((cell) => cell)) return 0; // Draw

  if (isMaximizing) {
    let bestValue = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "O";
        bestValue = Math.max(bestValue, minimax(board, false));
        board[i] = null;
      }
    }
    return bestValue;
  } else {
    let bestValue = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        bestValue = Math.min(bestValue, minimax(board, true));
        board[i] = null;
      }
    }
    return bestValue;
  }
};

// Helper function to calculate the winner
const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
