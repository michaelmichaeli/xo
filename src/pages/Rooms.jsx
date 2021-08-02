import React, { useEffect, useState } from 'react'
import RoomList from '../components/RoomList'

import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { db, auth } from "../services/firebaseService";
import Login from '../components/Login';

import AddBoxIcon from '@material-ui/icons/AddBox';
import CircularProgress from '@material-ui/core/CircularProgress';

const Rooms = () => {

    const [isRoomsLoading, setIsRoomsloading] = useState(true)
    const [isUserLoading, setIsUserLoading] = useState(true)

    const [user] = useAuthState(auth)
    auth.onAuthStateChanged(user => setIsUserLoading(false));

    const [rooms, setRooms] = useState([])

    const roomsRef = db.collection('rooms/')

    useEffect(() => {

        const fetchRoomsData = () => {
            roomsRef
                .orderBy('createdAt')
                .onSnapshot(snapshots => {
                    setRooms(_snapshotToArray(snapshots.docs).reverse())
                    setIsRoomsloading(false)
                })
        }
        fetchRoomsData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const _snapshotToArray = (snapshots) => {
        const returnArr = [];
        snapshots.forEach(childSnapshot => {
            const item = childSnapshot.data();
            item.id = childSnapshot.id;
            returnArr.push(item);
        });

        return returnArr;
    };
    // Maybe: for allowing only one room per user
    // const isAlreadyHaveRoom = () => {
    //     if (rooms) return rooms.findIndex(room => room.creator && room.creator.uid === user.uid) >= 0
    // }

    const onCreatNewRoom = () => {
        const miniUser = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
        }
        const newRoom = {
            creator: miniUser,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            game: {
                turnUser: miniUser,
                player1: miniUser,
                player2: null,
                squares: JSON.stringify([["", "", ""], ["", "", ""], ["", "", ""]]),
                winner: null
            },
            messages: [],
            onlineUsers: []
        }
        roomsRef.add(newRoom)
            .then(docRef => goToRoom(docRef.id))
    }

    const onDeleteRoom = (roomId) => {
        roomsRef.doc(roomId).delete()
    }

    const goToRoom = (roomId) => {
        const win = window.open("/multiplayer/" + roomId, "_blank");
        win.focus();
    }

    if (isUserLoading) return <div className="loader-spinner flex column align-center justify-center">
        <CircularProgress size="100px" color="inherit" />
    </div>

    if (!user && !isUserLoading) return <Login />

    return <section className="multiplayer-section home-page flex column align-center justify-center">
        <img className="user-photo" src={user.photoURL} alt={user.photoURL} />
        <h2 className="user-name">{user.displayName}</h2>

        <div className="rooms flex column justify-center align-center between">
            {
                !isRoomsLoading
                    ?
                    // rooms && rooms.length &&
                    <RoomList
                        user={user}
                        goToRoom={goToRoom}
                        rooms={rooms}
                        onDeleteRoom={onDeleteRoom}
                    />
                    : <div className="loader-spinner flex column align-center justify-center">
                        <CircularProgress color="inherit" />
                    </div>
            }
            <button
                onClick={onCreatNewRoom}
            ><AddBoxIcon />Create New Room</button>
        </div>
    </section>
}
export default Rooms;