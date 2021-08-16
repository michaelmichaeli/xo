import moment from "moment"
import GamesIcon from '@material-ui/icons/Games';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import { useEffect } from "react";
import { Avatar } from "@material-ui/core";

const RoomList = ({ localRooms, goToRoom, user, onDeleteRoom }) => {
    const [orderBy, setOrderBy] = useState({ key: 'created', descending: false })
    // useEffect(() => {
    //     console.log('orderBy', orderBy);
    // }, [orderBy])

    const [rooms, setRooms] = useState(localRooms)  // For Sorting
    useEffect(() => {
        setRooms(localRooms);
    }, [localRooms])
    const sortRoomsBycreatorName = () => {
        setOrderBy(state => state.key === "player" ? { ...state, descending: !state.descending } : { key: "player", descending: true })

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
        setOrderBy(state => state.key === "opponent" ? { ...state, descending: !state.descending } : { key: "opponent", descending: true })

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
        setOrderBy(state => state.key === "created" ? { ...state, descending: !state.descending } : { key: "created", descending: false })

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
        if (player1.uid === user.uid && player2) return <><GamesIcon /><p>{player1TurnTxt}</p></>
        if (player1.uid === user.uid && !player2) return <><GamesIcon /><p>Waiting Opponent</p></>
        if (!player2) return <><PersonAddIcon /><p>Join</p></>
        const player2TurnTxt = turnUser.uid === player2.uid ? 'Your Turn' : 'Opponents turn'
        if (player2.uid === user.uid) return <><GamesIcon /><p>{player2TurnTxt}</p></>
        return <><VisibilityIcon /><p>Watch Game</p></>
    }

    const ConfirmDeleteModal = () => {
        return (
            <div className="delete-modal">
                <p>Are your sure you want to remove this room permanently?</p>
                <Button onClick={() => {
                    console.log(deleteRoomId)
                    onDeleteRoom(deleteRoomId)
                    setDeleteRoomId(null);
                }}>Remove</Button>
                <Button onClick={() => setDeleteRoomId(null)}>No</Button>
            </div>
        );
    }

    return <>
        {deleteRoomId && <div className="screen" onClick={() => setDeleteRoomId(null)}></div>}
        <section className="rooms-list">
            <header>
                <div className="creator flex align-center" onClick={() => sortRoomsBycreatorName()}>
                    Player
                    {orderBy.key === "player" && <svg
                        className={`arrow ${orderBy.descending && "upsidedown"}`}
                        width="10px" height="10px" viewBox="0 0 18 10">
                        <path fill="white" d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"></path>
                    </svg>}
                </div>
                <div className="player2 flex align-center" onClick={() => sortRoomsByPlayer2Name()}>
                    Opponent
                    {orderBy.key === "opponent" && <svg
                        className={`arrow ${orderBy.descending && "upsidedown"}`}
                        width="10px" height="10px" viewBox="0 0 18 10">
                        <path fill="white" d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"></path>
                    </svg>}
                </div>
                <div className="time flex align-center" onClick={() => sortRoomsByTime()}>
                    Created
                    {orderBy.key === "created" && <svg
                        className={`arrow ${!orderBy.descending && "upsidedown"}`}
                        width="10px" height="10px" viewBox="0 0 18 10">
                        <path fill="white" d="M1 2.414A1 1 0 012.414 1L8.293 6.88a1 1 0 001.414 0L15.586 1A1 1 0 0117 2.414L9.707 9.707a1 1 0 01-1.414 0L1 2.414z"></path>
                    </svg>}
                </div>
                <div>Enter</div>
            </header>
            <main>
                {rooms.map(room => {
                    return <div className="room-row" key={room.id}>

                        <div className="creator flex align-center">
                            <Avatar src={room.creator.photoURL} alt={room.creator.photoURL} style={{ width: 24, height: 24, borderRadius: "4px" }} />
                            {room.creator.uid === user.uid ? "You" : room.creator.displayName}
                        </div>

                        <div className="player2 flex align-center">
                            {room.game.player2 && <Avatar src={room.game.player2.photoURL} alt={room.game.player2.photoURL} style={{ width: 24, height: 24, borderRadius: "4px" }} />}
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
                    </div>
                })}
            </main>
            {deleteRoomId && <ConfirmDeleteModal />}

        </section></>
}

export default RoomList