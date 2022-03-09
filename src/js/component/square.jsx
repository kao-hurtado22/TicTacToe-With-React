import React from "react";

const style = {
	background: "black",
	border: "5px solid white",
	fontSize: "40px",
	cursor: "pointer",
	outline: "none",
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;
