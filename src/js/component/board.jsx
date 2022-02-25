import React from "react";
import Squares from "./squares.jsx";
const Board = ({ squares, onclick }) => {
	<div className="board">
		{squares.map((square, i) => (
			<Squares key={i} value={square} onclick={() => onclick(i)} />
		))}
	</div>;
};

export default Board;
