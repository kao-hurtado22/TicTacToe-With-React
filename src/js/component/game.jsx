import React, { useState } from "react";
import { calculateWinner } from "../winner";
import Board from "./board.jsx";
import "../../styles/game.css";

const Game = ({ chooseX, props }) => {
	const [board, setBoard] = useState(Array(9).fill("null"));
	const [turn, setTurn] = useState(chooseX);
	const winner = calculateWinner(board);

	const handleClick = (i) => {
		const boardCopy = [...board];
		if (winner || boardCopy[i]) return;
		boardCopy[i] = turn ? "x" : "o";
		setBoard(boardCopy);
		setTurn(!turn);
	};

	const refreshpage = () => {
		window.location.reload();
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8 header">
						<h2>
							{winner
								? `${winner} Win!`
								: `it's the turn of ${turn ? "x" : "o"}`}
						</h2>
						<button className="btn btn-light" onClick={refreshpage}>
							restart game
						</button>
					</div>
				</div>
				<Board squares={board} onClick={handleClick} />
			</div>
		</>
	);
};

export default Game;
