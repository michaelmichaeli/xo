import React, { useEffect, useState } from "react";
// import history from "../history.js";


import logo from "../assets/img/logo.svg";

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../services/firebaseService'
import Notifications from "./Notifications";
import { useHistory } from "react-router-dom";

const NavBar = () => {
    let history = useHistory();

    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [notificationsOpen, setNotificationsOpen] = useState(false)

    const [user] = useAuthState(auth)

    const UserMenu = () => {
        const [anchorEl, setAnchorEl] = useState(null);
        const open = Boolean(anchorEl);

        const handleClick = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };
        return <>
            <Button
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                {/* <img src={user.photoURL} alt="" /> */}
                <Avatar src={user.photoURL} alt="" />
                {/* {user.displayName} */}
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={() => {
                    auth.signOut()
                    setIsDrawerOpen(false)
                }}>Logout</MenuItem>
            </Menu>
        </>
    }

    return <div className="nav-bar-wrap full"><div className="nav-bar flex align-center">
        {(isDrawerOpen || notificationsOpen) && <div className="screen" onClick={() => {
            setIsDrawerOpen(false)
            // setIsDropDownOpen(false)
            setNotificationsOpen(false)
        }}></div>}
        <Button
            onClick={() => { history.push('/') }}
            className="logo">
            <img src={logo} alt="" />
            <h2>Tic Tac Toe</h2>
        </Button>
        <ul className={`main-nav clean-list flex align-center justify-center ${isDrawerOpen ? 'menu-open' : ''}`}>
            <li className="home">
                <Button
                    onClick={() => {
                        setIsDrawerOpen(false)
                        history.push('/')
                    }}
                ><HomeIcon />Home</Button>
            </li>
            <li className="ai">
                <Button
                    onClick={() => { 
                        setIsDrawerOpen(false)
                        history.push('/ai')
                    }}
                ><SportsEsportsIcon />Ai Game</Button>
            </li>
            <li className="rooms">
                <Button
                    onClick={() => {
                        setIsDrawerOpen(false)
                        history.push('/rooms')
                    }}
                ><GroupIcon />Game Rooms</Button>
            </li>
            <li className="about">
                <Button
                    onClick={() => { 
                        setIsDrawerOpen(false)
                        history.push('/about')
                    }}
                ><InfoIcon />About</Button>
            </li>
            <li className="user">
                {!user
                    ? <Button onClick={() => { 
                        setIsDrawerOpen(false)
                        history.push('/rooms')
                    }}>
                        <AccountCircleIcon />Sign In
                    </Button>
                    : <UserMenu />
                }
            </li>
            <li className="notifications">
                {user && <Notifications user={user} setIsDrawerOpen={setIsDrawerOpen} />}
            </li>

        </ul>
        <div className={`nav-icon ${isDrawerOpen ? 'open' : ''}`} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    </div>;
};

export default NavBar;