import x from "../assets/img/x.svg";
import o from "../assets/img/o.svg";

const CurrentPlayerPreview = ({ currentPlayer, currentSymbol, winner }) => {
    return (
        <div className={`current-player-preview flex between ${winner && "won"}`}>
            <div className="symbol">
                <img
                    src={currentSymbol === "X" ? x : o}
                    alt={currentSymbol === "X" ? "X" : "O"}
                />
            </div>
            <div className="next-player">
                <p className="next-player">Next Player:</p>
                <p className="display-name">{currentPlayer?.displayName}</p>
            </div>
        </div>
    );
};

export default CurrentPlayerPreview