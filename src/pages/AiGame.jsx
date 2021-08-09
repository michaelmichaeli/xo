import React, { useState } from "react";
import { calculateWinner, bestMove } from "../services/aiService";

import Board from "../components/Board"

// import restart from "../assets/img/restart.svg";

const AiGame = () => {

    const [squares, setSquares] = useState(Array.from(Array(3), () => new Array(3).fill(null)))
    const [isLoading, setIsLoading] = useState(false);

    let winner = calculateWinner(squares);

    const handleClick = ({ i, j }) => {
        if (winner || squares[i][j] || isLoading) return; // don't do anything if won or occupied or loading
        const newSquares = [...squares]
        newSquares[i][j] = "X";
        setSquares(newSquares)
        if (!calculateWinner(squares)) {
            setIsLoading(true)
            setTimeout(() => {
                makeAiMove(squares)
                setIsLoading(false);
            }, 1000);
        }
    }

    const makeAiMove = (cells) => {
        const aiMoveIndex = bestMove(cells);
        cells[aiMoveIndex.i][aiMoveIndex.j] = "O";
        setSquares(cells)
    };

    const onRestart = () => {
		setSquares(Array.from(Array(3), () => new Array(3).fill(null)));
		winner = null
	};

    return <div className="ai flex align-center justify-center">
        <Board
            winner={winner}
            squares={squares}
            handleClick={handleClick}
            isUserTurn={!isLoading}
            isAiThinking={isLoading}
        />
        <button className={`restart  ${winner && "won"}`}
            onClick={onRestart}>
            {/* <img src={restart} alt="Restart" /> */}
            <p>Restart</p>
        </button>
    </div>;
};

export default AiGame;