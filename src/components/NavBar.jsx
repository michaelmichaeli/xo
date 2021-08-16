import React, { useEffect, useState } from "react";
// import history from "../history.js";


import Logo from "../assets/img/logo.svg";

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

    return <div className="nav-bar-wrap"><div className="nav-bar flex align-center">
        {(isDrawerOpen || notificationsOpen) && <div className="screen" onClick={() => {
            setIsDrawerOpen(false)
            // setIsDropDownOpen(false)
            setNotificationsOpen(false)
        }}></div>}
        <Button
            onClick={() => { history.push('/') }}
            className="logo">
            <Avatar src={Logo} alt="" />
            {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
            >
                <path
                    className="logo-bg"
                    fill="#062538"
                    d="M512 256c0 3.166-.063 6.322-.178 9.456a255.2 255.2 0 01-3.124 31.702C495 381.983 439.62 452.838 364.251 488.061a255.11 255.11 0 01-31.807 12.33C308.308 507.935 282.624 512 256 512c-11.17 0-22.162-.711-32.956-2.1a256.013 256.013 0 01-31.451-6.071 254.222 254.222 0 01-24.158-7.565 254.726 254.726 0 01-26.843-11.692 256.452 256.452 0 01-51.137-34.147 259.308 259.308 0 01-21.096-20.271 257.289 257.289 0 01-15.057-17.763 257.689 257.689 0 01-17.596-25.903C13.019 348.275 0 303.658 0 256c0-4.639.125-9.247.376-13.824a254.686 254.686 0 014.065-33.896C15.287 150.737 45.39 99.997 87.803 63.007a256.885 256.885 0 0124.315-18.777C153.119 16.311 202.648 0 256 0c16.227 0 32.099 1.505 47.48 4.399 7.513 1.4 14.9 3.135 22.162 5.193h.01a253.52 253.52 0 0130.511 10.742 255.258 255.258 0 0130.626 15.559 256.426 256.426 0 0139.717 29.153 257.806 257.806 0 0124.524 25.119 253.717 253.717 0 0117.638 23.291 253.745 253.745 0 0114.43 24.263C501.561 173.098 512 213.337 512 256z"
                ></path>
                <g fill="#EAF1F9">
                    <path d="M324.462 24.315l-69.256 99.109-16.844 24.116-109.85 157.215-16.781 24.012L53.3 412.39a257.689 257.689 0 01-17.596-25.903l52.903-75.703 16.781-24.012 107.227-153.475 16.854-24.116L300.481 7.555a14.166 14.166 0 012.999-3.156c4.932-3.845 11.985-4.221 17.377-.449 2.132 1.494 3.751 3.448 4.786 5.642h.01a14.616 14.616 0 01-1.191 14.723zM484.3 135.993l-1.202 1.724-56.351 80.645-16.854 24.116-127.248 182.127-16.792 24.012-42.809 61.283a256.013 256.013 0 01-31.451-6.071l51.137-73.195 16.781-24.012 124.646-178.385 16.854-24.116 59.308-84.877a14.466 14.466 0 018.349-5.789 14.59 14.59 0 0112.016 2.173c6.625 4.629 8.245 13.751 3.616 20.365z"></path>
                    <path d="M511.822 265.456a255.2 255.2 0 01-3.124 31.702l-98.806-54.68-25.736-14.242-145.794-80.696-25.746-14.242L92.056 66.57a14.434 14.434 0 01-4.253-3.563c-3.668-4.493-4.441-10.94-1.463-16.321 3.918-7.064 12.821-9.624 19.884-5.716l5.893 3.26 117.352 64.951 25.736 14.242L401.01 204.12l25.736 14.242 85.076 47.094zM364.251 488.061a255.11 255.11 0 01-31.807 12.33l-66.591-51.775-23.124-17.983-130.998-101.866-23.124-17.983L.376 242.176a254.686 254.686 0 014.065-33.896l100.948 78.493 23.124 17.983 130.999 101.867 23.134 17.983 81.605 63.455z"></path>
                </g>
                <g fill="#4d9ac4">
                    <path d="M240.383 359.365c-.419 0-.844-.019-1.271-.055-8.049-.693-14.013-7.778-13.32-15.828l12.538-145.756c.692-8.05 7.776-14.014 15.828-13.321 8.049.693 14.013 7.778 13.32 15.828L254.94 345.989c-.655 7.623-7.045 13.376-14.557 13.376z"></path>
                    <path d="M190.996 309.999c-6.068 0-11.737-3.803-13.827-9.862-2.634-7.637 1.42-15.965 9.057-18.6l134.002-46.235c7.636-2.634 15.965 1.419 18.6 9.057 2.634 7.637-1.42 15.965-9.057 18.6l-134.003 46.236a14.605 14.605 0 01-4.772.804z"></path>
                </g>
                <g fill="#f9b117">
                    <path d="M87.504 95.086c17.718-4.732 35.622.376 49.262 14.779 9.99 10.55 16.288 24.822 17.733 40.183 1.573 16.733-2.675 32.892-12.285 46.733-18.316 26.377-47.499 40.387-74.346 35.698-18.818-3.288-32.727-15.271-37.21-32.055-2.085-7.805 2.553-15.823 10.358-17.907s15.823 2.553 17.907 10.358c2.11 7.897 10.479 10.173 13.98 10.784 11.896 2.079 30.89-2.845 45.278-23.565 12.308-17.726 7.816-39.049-2.659-50.112-5.617-5.932-15.08-11.298-28.256-3.174-18.202 11.221-26.605 23.501-30.449 31.826-3.387 7.335-12.078 10.536-19.413 7.149-7.335-3.387-10.537-12.078-7.149-19.413 7.932-17.179 22.337-32.555 41.659-44.467 5.101-3.147 10.337-5.414 15.59-6.817zM167.434 496.264a254.726 254.726 0 01-26.843-11.692c7.523-16.217 2.936-33.97-6.301-43.739-5.622-5.935-15.088-11.295-28.264-3.177-6.802 4.19-12.236 8.537-16.572 12.769a259.308 259.308 0 01-21.096-20.271c6.416-6.363 13.908-12.204 22.319-17.398 5.099-3.145 10.334-5.413 15.59-6.823 17.721-4.723 35.621.376 49.267 14.785 9.989 10.553 16.28 24.816 17.732 40.176 1.159 12.34-.847 24.357-5.832 35.37z"></path>
                </g>
                <g fill="#4d9ac4">
                    <path d="M382.182 173.182c-7.537 0-13.935-5.787-14.564-13.431L355.869 16.807c-.661-8.052 5.33-15.117 13.382-15.778 8.035-.653 15.116 5.329 15.778 13.381l11.749 142.944c.661 8.052-5.33 15.117-13.382 15.778-.407.034-.812.05-1.214.05z"></path>
                    <path d="M303.054 118.08c-6.885 0-13.018-4.882-14.354-11.894-1.511-7.937 3.697-15.596 11.634-17.108L452.51 60.092c7.932-1.512 15.596 3.698 17.107 11.633 1.511 7.936-3.697 15.596-11.634 17.108L305.806 117.82c-.923.175-1.845.26-2.752.26z"></path>
                </g>
            </svg> */}
            {/* <img src={Logo} alt="" /> */}
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