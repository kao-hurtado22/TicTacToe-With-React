import React, { useState } from "react";
import Register from "./view/register";
import Game from "./view/game";

const App = () => {
	const [clickJugar, setClickJugar] = useState(false);
	const [empiezaX, setEmpiezaX] = useState(true);

	function mostrarJuego(comienzaX) {
		setEmpiezaX(comienzaX);
		setClickJugar(true);
	}

	return (
		<div>
			<h1 className="titulo py-5 text-center">Tic Tac Toe in React.js</h1>
			{clickJugar === true ? (
				<Game iniciaX={empiezaX} />
			) : (
				<Register iniciarJuego={mostrarJuego} />
			)}
		</div>
	);
};

export default App;
