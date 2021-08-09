import React, { useEffect, useState } from "react";
import Square from "./Square";
import CircularProgress from '@material-ui/core/CircularProgress';


import x from "../assets/img/x.svg";
import o from "../assets/img/o.svg";


const Board = ({ squares, handleClick, winner, isUserTurn, winnerUser = null, isAiThinking = null }) => {
    const [winUser, setWinUser] = useState(null)
    useEffect(() => {
        const fetchWinnerUser = async () => {
            winnerUser && setWinUser(await winnerUser())
        }
        fetchWinnerUser()
    }, [winnerUser])

    const WinnerAnnouncement = () => {
        return <div className="declaration">

            {winner === "Tie" && <h1 className="winner">It's a Tie!</h1>}
            {(winner === "X" || winner === "O") && (
                <div className="winner">
                    <img src={winner === "X" ? x : o} alt={winner === "X" ? "X" : "O"} />
                    {!winUser && <h3>Won!</h3>}
                    {winUser && <h3>{winUser.displayName} Won!</h3>}
                </div>
            )}
        </div>
    }

    const YourTurnAnnouncement = () => {
        return <div className="your-turn">
            <h1>Your Turn</h1>
        </div>
    }

    return <div className="board-wrapper">
        <div className={`board ${winner && "win"}`}>
            {squares.map((row, i) => {
                return row.map((square, j) => {
                    return <Square
                        key={`${i}-${j}`}
                        index={{ i, j }}
                        value={square}
                        handleClick={handleClick}
                        winner={winner}
                        isUserTurn={isUserTurn}
                    />
                })
            })}
        </div>
        <WinnerAnnouncement />
        {isUserTurn && !winner && <YourTurnAnnouncement />}
        {isAiThinking && <div className="loading"><CircularProgress size="200px" color="inherit"/></div>}
    </div>
};

export default Board;