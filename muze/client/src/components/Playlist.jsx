import { Link } from 'react-router-dom'

const Playlist = ({playlist}) => {

    return(
        <Link className="playlist" to={`/myplaylists/${playlist.id}`}>
            <h1>{playlist.name}</h1>
            <img className="playlist-image" src={playlist.image} alt="" />
            <h2>{playlist.description}</h2>
            <h2>{playlist.dateCreated}</h2>
        </Link>
    )

}

export default Playlist