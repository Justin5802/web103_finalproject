import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/PlaylistDetails.css'

const PlaylistDetails = () => {

    const { paramName } = useParams()
    const [songs, setSongs] = useState([
        { songName: 'Song 1' },
        { songName: 'Song 2' },
        { songName: 'Song 3' },
        { songName: 'Song 4' },
        { songName: 'Song 5' },
        { songName: 'Song 6' }
    ]);

    const [ playlist, setPlaylist ] = useState({
        id: '1',
        name: 'Playlist 1',
        description: 'This is the first playlist',
        dateCreated: '2023-01-01',
        image: 'https://via.placeholder.com/300x200?text=playlist1',
    })

    useEffect(() => {
        //api call to get the playlist details from the address'
        //api call to get songs associated with this playlist id
    }, [])

    return(
        <div className="playlist-details container">
            <div className="playlist-details-main">
                <div className="playlist-details-name">
                    {playlist.name}
                </div>
                <div className="playlist-details-date">
                    Created on: {playlist.dateCreated}
                </div>
                <div className="playlist-details-description">
                    {playlist.description}
                </div>
                <img src={playlist.image} alt="" />
            </div>
            <div className="playlist-details-songs">
                <h2>Songs</h2>
                <div className="playlist-details-songs-list">
                    {songs && songs.map((song, index) => (
                        <div className="song">
                            {song.songName}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default PlaylistDetails;