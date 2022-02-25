import React, { useState } from "react";
import Form from "./component/form.jsx";
import Game from "./component/game.jsx";

const Home = () => {
	const [runGame, setRunGame] = useState(false);
	const [chooseX, setChooseX] = useState(true);

	const [player1, setPlayer1] = useState("");
	const [player2, setPlayer2] = useState("");

	const playerHandler1 = (e) => {
		setPlayer1(e.target.value);
	};

	const playerHandler2 = (e) => {
		setPlayer2(e.target.value);
	};

	function showGame(chooseX) {
		setChooseX(chooseX);
		setRunGame(true);
	}

	return (
		<>
			<h1>TicTacToe in React.js</h1>
			{runGame === true ? (
				<Game chooseX={chooseX} player1={player1} player2={player2} />
			) : (
				<Form
					startGame={showGame}
					playerHandler1={playerHandler1}
					playerHandler2={playerHandler2}
					player1={player1}
					player2={player2}
				/>
			)}
		</>
	);
};

export default Home;
