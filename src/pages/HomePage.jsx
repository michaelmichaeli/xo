import React from "react";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GroupIcon from '@material-ui/icons/Group';


const HomePage = () => {
    return <div className="home-page flex column align-center justify-center">

        <main className="flex column align-center justify-center">
            <h2>Welcome To</h2>
            <h1>Tic Tac Toe</h1>
            <p>Play Against Ai or with Friends In Realtime Multiplayer rooms</p>

            <section className="menu flex column">
                <a href="#/ai"><SportsEsportsIcon /> Play Against Ai</a>
                <a href="#/rooms"><GroupIcon /> Play With Friends</a>
            </section>
        </main>

    </div>
};

export default HomePage;