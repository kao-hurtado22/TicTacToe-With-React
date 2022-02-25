import React from "react";

const Squares = ({ value, onclick }) => {
	const style = value ? `squares ${value}` : `squares`;

	return (
		<button className={style} onclick={onclick}>
			{value}
		</button>
	);
};

export default Squares;
