import React, { useState } from "react";
import { calculateWinner, bestMove } from "../services/aiService";

import Board from "../components/Board"

import ReplayIcon from '@material-ui/icons/Replay';
import CurrentPlayerPreview from "../components/CurrentPlayerPreview";
import { useEffect } from "react";


const AiGame = () => {

    const [squares, setSquares] = useState(Array.from(Array(3), () => new Array(3).fill(null)))
    // const [turnUser, setTurnUser] = useState(true)
    const [isLoading, setIsLoading] = useState(false);

    // useEffect(()=>{},[isLoading])

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
        <header className="flex">
            <CurrentPlayerPreview
                currentPlayer={isLoading ? {displayName: "Ai"} : {displayName: "You"}}
                currentSymbol={!isLoading ? "X" : "O"}
                winner={winner}
            />
            <div className="middle flex column align-center justify-center">
                <h2>Ai game</h2>
            </div>
            <div className={`restart ${winner && "won"}`}
                onClick={() => onRestart()}>
                {/* <div className="text">
                            <p>Restart</p>
                        </div> */}
                <div className="symbol">
                    <ReplayIcon />
                </div>
            </div>
        </header>
        <Board
            winner={winner}
            squares={squares}
            handleClick={handleClick}
            isUserTurn={!isLoading}
            isAiThinking={isLoading}
        />

        {/* <button className={`restart  ${winner && "won"}`}
            onClick={onRestart}>
            {/* <img src={restart} alt="Restart" /> *
            <p>Restart</p>
        </button> */}
    </div>;
};

export default AiGame;