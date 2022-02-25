import React from "react";
import "../../styles/form.css";

const form = ({ startGame, props }) => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 text-center">
					<h2>Pick a Weapon</h2>
				</div>
			</div>

			<div className="container" id="boardgame">
				<div className="row mt-3">
					<div className="col md-12 text-center font-weight-bold">
						<p id="title">Choose your Weapon</p>
					</div>
				</div>
				<div className="inputgroup">
					<input
						type="text"
						className=""
						placeholder="Player 1 username"
					/>
					<input
						type="text"
						className=""
						placeholder="Player 1 username"
					/>
				</div>
				<div className="row justify-content-center">
					<div className="col-10 col-md-6 mb-2">
						<imput
							type="text"
							name="player1"
							id="player1"
							placeholder="jugador1"
						/>
					</div>
					<div className="row mt-3">
						<div className="col-6 col-md-6 text-right d-flex justify-content-end">
							<button
								className="text-warning"
								id="x"
								onClick={() => startGame(true)}>
								x
							</button>
						</div>
						<div className="col-6 col-md-6 text-left">
							<button
								className="text-info"
								id="o"
								onClick={() => startGame(false)}>
								0
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default form;
