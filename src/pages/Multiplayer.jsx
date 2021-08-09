import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

import Board from '../components/Board'
import Chat from '../components/Chat'
import Login from "../components/Login";
import CurrentPlayerPreview from "../components/CurrentPlayerPreview";
import { SocialButtons } from "../components/SocialButtons";

import PublicIcon from '@material-ui/icons/Public';
import ReplayIcon from '@material-ui/icons/Replay';
import CircularProgress from '@material-ui/core/CircularProgress';

import { db, auth } from '../services/firebaseService'
import { useAuthState } from 'react-firebase-hooks/auth'


const Multiplayer = () => {
    const { roomId } = useParams()

    const [isRoomLoading, setIsRoomloading] = useState(true)
    const [isUserLoading, setIsUserLoading] = useState(true)

    const [user] = useAuthState(auth)
    auth.onAuthStateChanged(user => setIsUserLoading(false));

    const [room, setRoom] = useState(null)

    const [waitingForPlayer1, setWaitingForPlayer1] = useState(false)
    const [waitingForPlayer2, setWaitingForPlayer2] = useState(true)

    const roomsRef = db.collection('rooms')
    const roomDoc = roomsRef.doc(roomId)

    // Fetching room data from db
    useEffect(() => {
        const fetchRoomData = () => {
            roomDoc.onSnapshot(snapshot => {
                setRoom(snapshot.data())
                setIsRoomloading(false)
            })
        }
        fetchRoomData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // REMOVING USER FROM ROOM WHEN LEAVING THE PAGE
    useEffect(() => {
        if (user && room && document.visibilityState !== 'hidden') addPlayerToRoom()
        document.addEventListener('visibilitychange', () => {
            if (user && room) {
                if (document.visibilityState === 'hidden') {
                    removePlayerFromRoom()
                } else {
                    addPlayerToRoom()
                }
            }
        });
        return () => {
            document.removeEventListener('visibilitychange', removePlayerFromRoom)
            document.removeEventListener('visibilitychange', addPlayerToRoom)
        }
    }, [room, user]) // eslint-disable-line react-hooks/exhaustive-deps

    // For updating 'Waiting for Player...1 + 2'
    useEffect(() => {
        if (room && room.onlineUsers.length) {
            const { player1, player2, turnUser } = room.game
            setWaitingForPlayer1(player1.uid === turnUser.uid && room.onlineUsers
                .findIndex(onlineUser => onlineUser.uid === player1.uid) === -1)
            player2 && setWaitingForPlayer2(player2.uid === turnUser.uid && room.onlineUsers
                .findIndex(onlineUser => onlineUser.uid === player2.uid) === -1)
        }
    }, [room])

    const removePlayerFromRoom = async () => {
        const room = (await roomDoc.get()).data()
        room.onlineUsers = room.onlineUsers.filter(onlineUser => onlineUser.uid !== user.uid)
        await roomDoc.update(room)
    }

    const addPlayerToRoom = async () => {
        const room = (await roomDoc.get()).data()
        if (!room) return
        const miniUser = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
        }

        if (user.uid !== room.game.player1.uid) {
            if (!room.game.player2) {
                room.game.player2 = miniUser
                // setWaitingForPlayer2(false)
            }
        } else {
            // setWaitingForPlayer1(false)
        }

        // Make User Online
        if (room.onlineUsers.findIndex(onlineUser => onlineUser.uid === user.uid) < 0) {
            room.onlineUsers.push(miniUser)
        }

        await roomDoc.update(room)
    }

    const handleClick = ({ i, j }) => {
        const { squares, turnUser, winner, player1, player2 } = room.game
        const { creator } = room

        // don't do anything if won or occupied
        if (winner || squares[i][j] === '') {
            return
        };

        //don't do anything if not yor turn
        if (turnUser.uid !== user.uid) return

        // check if no 2 players
        if (!player2) {
            // setWaitingForPlayer2(true)
            // USER-MESSAGE: Waiting for P2!
            return
        }

        // UPDATE SQUARES
        let newSquares = [...JSON.parse(squares)]
        newSquares[i][j] = user.uid === creator.uid ? "X" : "O";
        // UPDATE TURN-USER
        const newTurnUser = turnUser.uid === room.game.player1.uid
            ? player2
            : player1

        //  UPDATE ROOM
        const newRoom = { ...room }
        newRoom.game.winner = calculateWinner(newSquares)
        newSquares = JSON.stringify(newSquares)
        newRoom.game.squares = newSquares
        newRoom.game.turnUser = newTurnUser
        roomDoc.update(newRoom)
    }

    const winnerUser = () => {
        const { winner, player1, player2 } = room.game
        if (!winner || winner === "Tie") return null
        if (winner === "X") return player1
        return player2
    }

    const onRestart = () => {
        if (!room.game.winner) return
        if (user.uid !== room.game.player1.uid && user.uid !== room.game.player2.uid) return
        const newRoom = { ...room }
        newRoom.game.winner = null
        newRoom.game.squares = JSON.stringify([["", "", ""], ["", "", ""], ["", "", ""]])
        roomDoc.update(newRoom)
    }

    const calculateWinner = (cells) => {
        if (!cells) return; // No Cells
        if (cells.every((row) => row.every((cell) => !cell))) return; // All Cells Empty
        // If Wins return Winner symbol:
        if (!!cells[0][0] && cells[0][0] === cells[0][1] && cells[0][0] === cells[0][2])
            return cells[0][0];
        if (!!cells[1][0] && cells[1][0] === cells[1][1] && cells[1][0] === cells[1][2])
            return cells[1][0];
        if (!!cells[2][0] && cells[2][0] === cells[2][1] && cells[2][0] === cells[2][2])
            return cells[2][0];
        if (!!cells[0][0] && cells[0][0] === cells[1][0] && cells[0][0] === cells[2][0])
            return cells[0][0];
        if (!!cells[0][1] && cells[0][1] === cells[1][1] && cells[0][1] === cells[2][1])
            return cells[0][1];
        if (!!cells[0][2] && cells[0][2] === cells[1][2] && cells[0][2] === cells[2][2])
            return cells[0][2];
        if (!!cells[0][0] && cells[0][0] === cells[1][1] && cells[0][0] === cells[2][2])
            return cells[0][0];
        if (!!cells[0][2] && cells[0][2] === cells[1][1] && cells[0][2] === cells[2][0])
            return cells[0][2];
        // If tied return "Tie"
        if (cells.every((row) => row.every((cell) => !!cell))) return "Tie";
        return null;
    }

    const WaitingModal = () => {
        const { player1, player2 } = room.game
        if (waitingForPlayer1 && !waitingForPlayer2) return <section className={`waiting flex column align-center`}>
            <CircularProgress color="inherit" />
            <p>Waiting for Player 1 ({player1.displayName}) to come back</p>
        </section>
        if (waitingForPlayer2 && !waitingForPlayer1) return <section className={`waiting flex column align-center`}>
            <CircularProgress color="inherit" />
            <p>Waiting for Player 2 {player2 ? `(${player2.displayName}) to come back` : " to join the room"}</p>
        </section>
        // if (waitingForPlayer2 && waitingForPlayer1) return <section className={`waiting flex column align-center`}>
        //     <CircularProgress color="inherit" />
        //     <p>Waiting for both Player 1 ({player1.displayName}) and Player 2 ({player2.displayName}) to come back</p>
        // </section>
    }

    if (isRoomLoading || isUserLoading) return <div className="loader-spinner flex column align-center justify-center">
        <CircularProgress size="100px" color="inherit" />
    </div>

    if (!room && !isRoomLoading) return <div className="multiplayer flex column align-center justify-center">
        <div className="no-room flex column align-center justify-center">
            <h2>Oops... Something went wrong</h2>
            <p>Probably an address typo or this room doesn't exist anymore.</p>
            <p>You can create a new game room from the<a href="/rooms">Rooms-page.</a></p>
        </div>
    </div>

    if (!user && !isUserLoading) return <Login />

    if (room && user && !isRoomLoading && !isUserLoading) {
        const { squares, turnUser, winner, player1, player2 } = room.game
        const { messages, creator, onlineUsers } = room
        return <div className="multiplayer flex column align-center">

            <header className="flex between align-center">
                {turnUser && <CurrentPlayerPreview
                    currentPlayer={turnUser}
                    currentSymbol={turnUser.uid === creator.uid ? "X" : "O"}
                    winner={winner}
                />}
                <div className="middle flex column align-center justify-center">
                    <h2>{creator.displayName}'s Room</h2>
                </div>

                {(user.uid === player1.uid || (player2 && user.uid === player2.uid))
                    ? <div className={`restart flex  ${winner && "won"}`}
                        onClick={() => onRestart()}>
                        <div className="text">
                            <p>Restart</p>
                        </div>
                        <div className="symbol">
                            <ReplayIcon />
                        </div>
                    </div>
                    : <div className="restart-dummy"></div>
                }
            </header>


            <Board
                squares={JSON.parse(squares)}
                handleClick={handleClick}
                winner={winner}
                isUserTurn={turnUser?.uid === user.uid}
                winnerUser={winnerUser}
            />

            {(waitingForPlayer1 || waitingForPlayer2) && <WaitingModal />}
            {/* <section className={`waiting flex column align-center`}>
                    {(waitingForPlayer1 || waitingForPlayer2) && <CircularProgress color="inherit" />}
                    {waitingForPlayer1 && !waitingForPlayer2 && <p>Waiting for Player 1 ({player1.displayName}) to come back</p>}
                    {waitingForPlayer2 && !waitingForPlayer1 && <p>Waiting for Player 2 {player2 ? `(${player2?.displayName}) to come back` : " to join the room"}</p>}
                    {waitingForPlayer2 && waitingForPlayer1 && <p>Waiting for both Player 1 ({player1.displayName}) and Player 2 ({player2?.displayName}) to come back</p>}
                </section> */}
            
            <section className="online-players flex align-center wrap">
                <PublicIcon />
                <p>Online Right Now:</p>
                {onlineUsers.map(onlineUser => <div key={onlineUser.uid} className="player flex justify-center align-center">
                    <img src={onlineUser.photoURL} alt={onlineUser.photoURL} />
                    <p>{onlineUser.displayName[0]}</p>
                </div>)}
            </section>

            <SocialButtons roomId={roomId} />

            <Chat messages={messages} roomId={roomId} user={user} />

        </div>;
    }
};

export default Multiplayer;