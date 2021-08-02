import moment from "moment"
import GamesIcon from '@material-ui/icons/Games';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const RoomList = ({ rooms, goToRoom, user, onDeleteRoom }) => {

    const onEnterRoom = (roomId) => {
        goToRoom(roomId)
    }

    // if (!rooms || !rooms.length || !user) return 'Loading...'
    return <section className="rooms-list">
        <header>
            <div></div>
            <div>Player</div>
            <div>Opponent</div>
            <div>Created</div>
            <div>Online</div>
            <div>Enter</div>
        </header>
        <main>
            {rooms.map(room => {
                const JoinButtonText = () => {
                    if (room.creator.uid === user.uid) return <><GamesIcon /><p>Play</p></>
                    if (!room.game.player2) return <><PersonAddIcon /><p>Join</p></>
                    if (room.game.player2.uid === user.uid) return <><GamesIcon /><p>Play</p></>
                    return <><VisibilityIcon /><p> Watch</p></>
                }
                return <>
                    {/* // <div className="room-row" key={room.id}> */}

                    {user.uid === room.creator.uid
                        ? <button
                            // disabled={room.onlineUsers.length > 0}
                            className="trash "
                            onClick={() => onDeleteRoom(room.id)}
                        >
                            <DeleteForeverIcon />
                        </button>
                        : <div className="trash"> </div>}
                    
                    <div className="creator flex">
                        <img src={room.creator.photoURL} alt={room.creator.photoURL} />
                        {`${room.creator.displayName}${room.creator.uid===user.uid ? " (You)" : ""}`}
                    </div>

                    <div className="player2 flex justify-center align-center">
                        {room.game.player2 && <img src={room.game.player2.photoURL} alt={room.game.player2.photoURL} />}
                        {room.game.player2 ? room.game.player2.displayName : "Waiting..."}
                    </div>

                    {room.createdAt && <div className="time">
                        {moment(room.createdAt.seconds * 1000).fromNow()}
                    </div>}


                    <div className="online">{room.onlineUsers.length}</div>

                    <button
                        className="join flex align-center justify-center"
                        onClick={() => { onEnterRoom(room.id) }}
                    ><JoinButtonText />
                    </button>

                    {/* </div> */}
                </>
            })}
        </main>
    </section>
}

export default RoomList