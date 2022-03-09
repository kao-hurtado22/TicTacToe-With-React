import React from "react";
import "./register.css";

function Register({ iniciarJuego }) {
	return (
		<div>
			<h4 className="subtitulo">Pick A Weapon</h4>

			<div className="cajaUsuarios">
				<h4 className="subtitulo-3 pb-5">CHOOSE YOUR WEAPON</h4>
				<div>
					<input
						className="primer-input text-dark"
						type="text"
						placeholder="Player 1"
					/>

					<input
						className="segundo-input text-dark"
						type="text"
						placeholder="Player 2"
					/>
				</div>
				<div className="botones">
					<button onClick={() => iniciarJuego(true)} className="x">
						X
					</button>
					<button onClick={() => iniciarJuego(false)} className="o">
						O
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
