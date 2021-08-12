import { Avatar, Badge, Button, Divider, MenuItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { db } from "../services/firebaseService";
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";


const Notifications = ({ user, setIsDrawerOpen }) => {
    let history = useHistory();

    const [rooms, setRooms] = useState([])
    const roomsRef = db.collection('rooms/')

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        user && setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [roomsToNotify, setRoomsToNotify] = useState([])
    useEffect(() => {
        const roomsToUpdate = []
        rooms && rooms.forEach(room => {
            if (room.game.turnUser.uid === user.uid && room.game.player2) {
                roomsToUpdate.push(room)
            }
        })
        setRoomsToNotify(roomsToUpdate)
    }, [rooms])

    useEffect(() => {
        const fetchRoomsData = () => {
            roomsRef
                .orderBy('createdAt')
                .onSnapshot(snapshots => {
                    setRooms(_snapshotToArray(snapshots.docs).reverse())
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


    if (rooms && user) return <>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <Badge badgeContent={roomsToNotify.length} color="primary"><NotificationsIcon /></Badge>
        </Button>
        <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted={false}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}

        >
            {!roomsToNotify.length ? "No New Notifications" : ""}
            {roomsToNotify.length ? "It's Your Turn Against" : ""}
            {!!roomsToNotify && roomsToNotify.map(room => {
                const { player2, player1 } = room.game
                const opponent = (player2 && player2.uid === user.uid) ? player1 : player2
                return <div key={room.id}><Divider variant="middle" />
                    <MenuItem
                        className="menu-item"
                        // onClick={handleClose}
                        // >
                        // <Button
                        onClick={() => {
                            setIsDrawerOpen(false)
                            history.push(`/multiplayer/${room.id}`)
                            history.go();
                            handleClose()
                        }}
                    >
                        <Avatar src={opponent.photoURL} alt={opponent.photoURL} />
                        {opponent.displayName}
                        {/* </Button> */}
                        {/* <a href={`#/multiplayer/${room.id}`}>{opponent.displayName}</a> */}
                    </MenuItem></div>
            })}
        </Menu>
    </>
}

export default Notifications;