import React, { useState } from "react";

import logo from "../assets/img/logo.svg";

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebaseService'

const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const [user] = useAuthState(auth)

    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const Avatar = () => {
        if (user) return <div
            className="avatar flex align-center"
            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        >
            <img src={user.photoURL} alt={"Sign In with Google"} />
            <p>{user.displayName}</p>
            {/* <div className="caret"></div> */}
            {!isDropDownOpen && <ArrowDropDownIcon />}
            {isDropDownOpen && <ArrowDropUpIcon />}
        </div>
        return null
    }

    const LoginDropdown = () => {
        if (!user) return null
        return <div className="dropdown flex column justify-left">
            <button
                onClick={() => {
                    auth.signOut()
                    setIsDropDownOpen(false)
                    setMenuOpen(false)
                }}
            >Sign Out
            </button>
        </div>
    }

    return <div className="nav-bar-wrap full"><div className="nav-bar flex align-center">
        {(isDropDownOpen || menuOpen) && <div className="screen" onClick={() => {
            setMenuOpen(false)
            setIsDropDownOpen(false)
        }
        }></div>}
        <a href="/" className="home">
            <img src={logo} alt="Tic Tac Toe" />
            <h2>Tic Tac Toe</h2>
        </a>
        <ul className={`clean-list flex align-center main-nav clean-list ${menuOpen ? 'menu-open' : ''}`}>

            <li onClick={() => setMenuOpen(false)}>
                <a href="/"><HomeIcon /> Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="/ai"><SportsEsportsIcon /> Ai Game</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>

                <a href="/rooms"><GroupIcon /> Game Rooms</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="/about"><InfoIcon /> About</a>
            </li>
            <li className="login">
                {<Avatar />}
                {!user && <a href="/">
                    <AccountCircleIcon />  Sign In
                </a>}
                {isDropDownOpen && <LoginDropdown />}
            </li>

        </ul>
        <div className={`nav-icon ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    </div>;
};

export default NavBar;