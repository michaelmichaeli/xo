import moment from "moment"
import GamesIcon from '@material-ui/icons/Games';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useState } from "react";
import { useEffect } from "react";
// import ConfirmDeleteModal from './ConfirmDeleteModal'

const RoomList = ({ localRooms, goToRoom, user, onDeleteRoom }) => {

    const [rooms, setRooms] = useState(localRooms)  // For Sorting
    useEffect(() => {
        setRooms(localRooms);
    }, [localRooms])
    const sortRoomsBycreatorName = () => {
        const roomsCopy = [...rooms]
        roomsCopy.sort(function (a, b) {
            var nameA = a.creator.displayName.toUpperCase(); // to ignore upper and lowercase
            var nameB = b.creator.displayName.toUpperCase(); // to ignore upper and lowercase
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        if (roomsCopy.every((room, index) => room.id === rooms[index].id)) {
            roomsCopy.reverse()
        }
        setRooms(roomsCopy)
    }
    const sortRoomsByPlayer2Name = () => {
        const roomsCopy = [...rooms]
        roomsCopy.sort(function (a, b) {
            const nameA = a.game.player2?.displayName.toUpperCase(); // to ignore upper and lowercase
            const nameB = b.game.player2?.displayName.toUpperCase(); // to ignore upper and lowercase
            if (!nameA || !nameB) return -2;
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        })
        if (roomsCopy.every((room, index) => room.id === rooms[index].id)) {
            roomsCopy.reverse()
        }
        setRooms(roomsCopy)
    }
    const sortRoomsByTime = () => {
        let roomsCopy = [...rooms]
        roomsCopy.sort(function (a, b) {
            return a.createdAt.seconds - b.createdAt.seconds;
        })
        if (roomsCopy.every((room, index) => room.id === rooms[index].id)) {
            roomsCopy.reverse()
        }
        setRooms(roomsCopy)
    }

    const [deleteRoomId, setDeleteRoomId] = useState(null);

    const JoinButtonInnerText = ({ room, user }) => {
        const { player1, player2, turnUser } = room.game
        const player1TurnTxt = turnUser.uid === player1.uid ? 'Your Turn' : 'Opponents turn'
        if (player1.uid === user.uid) return <><GamesIcon /><p>{player1TurnTxt}</p></>
        if (!player2) return <><PersonAddIcon /><p>Join</p></>
        const player2TurnTxt = turnUser.uid === player2.uid ? 'Your Turn' : 'Opponents turn'
        if (player2.uid === user.uid) return <><GamesIcon /><p>{player2TurnTxt}</p></>
        return <><VisibilityIcon /><p>Watch</p></>
    }

    const ConfirmDeleteModal = () => {
        return (
            <div className="delete-modal">
                <p>Are your sure you want to remove this room permanently?</p>
                {/* <DialogActions> */}
                <Button onClick={() => {
                    console.log(deleteRoomId)
                    onDeleteRoom(deleteRoomId)
                    setDeleteRoomId(null);
                }}>Remove</Button>
                <Button onClick={() => setDeleteRoomId(null)}>No</Button>
                {/* </DialogActions> */}
            </div>
        );
    }

    return <>
        {deleteRoomId && <div className="screen" onClick={() => setDeleteRoomId(null)}></div>}
        <section className="rooms-list">
            <header>
                {/* <div></div> */}
                <div className="creator" onClick={() => sortRoomsBycreatorName()}>Player</div>
                <div className="player2" onClick={() => sortRoomsByPlayer2Name()}>Opponent</div>
                <div className="time" onClick={() => sortRoomsByTime()}>Created</div>
                {/* <div>Manage</div> */}
                <div>Enter</div>
            </header>
            <main>
                {rooms.map(room => {
                    return <div className="room-row" key={room.id}>

                        <div className="creator flex align-center">
                            <img src={room.creator.photoURL} alt={room.creator.photoURL} />
                            {room.creator.uid === user.uid ? "You" : room.creator.displayName}
                        </div>

                        <div className="player2 flex align-center">
                            {room.game.player2 && <img src={room.game.player2.photoURL} alt={room.game.player2.photoURL} />}
                            {(room.game.player2 && room.game.player2.uid === user.uid) && "You"}
                            {(room.game.player2 && room.game.player2.uid !== user.uid) && room.game.player2.displayName}
                            {!room.game.player2 && "Waiting..."}
                        </div>

                        {room.createdAt && <div className="time flex justify-center align-center">
                            {moment(room.createdAt.seconds * 1000).fromNow()}
                        </div>}

                        {user.uid === room.creator.uid
                            ? <button
                                // disabled={room.onlineUsers.length > 0}
                                className="trash flex justify-center align-center"
                                // onClick={()=>onDeleteRoom(room.id)}
                                onClick={() => setDeleteRoomId(room.id)}
                            >
                                <DeleteForeverIcon />
                            </button>
                            : <div className="trash"> </div>}

                        {/* <div className="online flex justify-center align-center">{room.onlineUsers.length}</div> */}

                        <a
                            href={`#/multiplayer/${room.id}`}
                            className="join flex align-center justify-center"
                        >
                            <JoinButtonInnerText room={room} user={user} />
                        </a>
                        {/* <ConfirmDeleteModal roomId={room.id} handleDeleteModalClose={handleDeleteModalClose} openDeleteModal={openDeleteModal} /> */}
                    </div>
                })}
            </main>
            {deleteRoomId && <ConfirmDeleteModal />}

        </section></>
}

export default RoomList