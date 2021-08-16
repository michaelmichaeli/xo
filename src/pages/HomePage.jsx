import React from "react";
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import GroupIcon from '@material-ui/icons/Group';
import Logo from '../assets/img/logo.svg'
import HeroImage from '../assets/img/heroimage.svg'

const HomePage = () => {
    return <div className="home-page full flex column align-center justify-center">

        <section className="hero flex column align-center justify-center">
            <div className="hero-img">
               
                <img src={HeroImage} />
            </div>
            <div className="content flex column align-center justify-center">
                <div className="text flex column align-center justify-center">
                    {/* <h2>Welcome To</h2> */}
                    {/* <h1>Tic Tac Toe</h1> */}
                    <h1>Play with friends in realtime multiplayer rooms or against Ai</h1>
                </div>

                <section className="menu flex wrap">
                    <a href="#/ai"><SportsEsportsIcon /> Play Against Ai</a>
                    <a href="#/rooms"><GroupIcon /> Play With Friends</a>
                </section>
            </div>
        </section>

    </div>
};

export default HomePage;