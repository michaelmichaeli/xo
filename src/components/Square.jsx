import React from "react";
import x from "../assets/img/x.svg";
import o from "../assets/img/o.svg";

const Square = ({ index, value, handleClick, winner, isUserTurn }) => {
	return (
		<button
			className={`square ${index.i}-${index.j} ${winner ? "win" : ""}`}
			onClick={() => handleClick(index)}
			disabled={!!value || !isUserTurn}
		>
			{value === "X" && <img src={x} alt="X" />}
			{value === "O" && <img src={o} alt="O" />}

		</button>
	);
};

export default Square;
