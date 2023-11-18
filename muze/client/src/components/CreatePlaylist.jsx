import '../css/CreatePlaylist.css'
import { getToken, searchSongByName } from '../services/SpotifyAPI'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const CreatePlaylist = () => {

    const [ token, setToken ] = useState('')

    useEffect(() => {
        
        const getTokenAndLog = async () => {
            const accessToken = await getToken()
            setToken(accessToken)
        }
        
        getTokenAndLog()
        
    }, [])

    const [ song, setSong ] = useState({})
    const [ songsDisplay, setSongsDisplay ] = useState([])
    const [ playlist, setPlaylist ] = useState({
        name: '',
        description: '',
        songs: []
    })
    const [ next, setNext ] = useState(false)
    const navigate = useNavigate()

    const addSongToPlaylist = (song) => {
        setSong({})

        setPlaylist({
            ...playlist,
            songs: [...playlist.songs, {image: song.album.images[0].url, 
                                        name: song.name, 
                                        artist: song.artists[0].name}]
        })

        alert(`${song.name} added to playlist!`)
    }

    const updateSong = async (e) => {

        e.preventDefault();
        
        if (e.target.value === '') {
            setSongsDisplay([])
            return
        }

        const { name, value } = e.target;
        setSong({
            ...song,
            [name]: value,
        });

        const songResponse = await searchSongByName(song.songName, token)
        setSongsDisplay(songResponse.tracks.items)
    }

    const nextButton = (e) => {
        console.log("next")
        setNext(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlaylist({
          ...playlist,
          [name]: value,
        });
    };

    const submitPlaylistToDatabase = (e) => {
        e.preventDefault();

        console.log("playlist", playlist)


        // insert playlist into the database

        console.log("creating playlist")
        alert(`${playlist.name} Playlist Created!`)
        navigate('/myplaylists')
    }


    return(
        <div className="create-playlist">
            <div className={`create-playlist-wrapper-1 ${next ? 'hide' : ''}`}>
                <div className="create-playlist-title">
                    <h2 className="create-playlist-title-1">Create Your Playlist</h2>
                    <h2 className="create-playlist-title-2">Add Songs</h2>
                </div>
                <div className="song-search">
                    <input
                        type="songName"
                        id="songName"
                        name="songName"
                        value={song.name}
                        onChange={updateSong}
                        required
                    ></input>
                    <div className="songs-display">
                        {songsDisplay && songsDisplay.map((song, index) => (
                            <div key={index} className="song-display" onClick={() => addSongToPlaylist(song)}>
                                <img className="song-image" src={song.album.images[0].url} alt={song.name} />
                                <div className="song-display-info">
                                    <div className="song-display-name">{song.name}</div>
                                    <div className="song-display-artist">{song.artists[0].name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="create-playlist-btn" onClick={nextButton}>Next <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className={`create-playlist-wrapper-2 ${!next ? 'hide' : ''}`}>
                <div className="playlist-name">
                    {playlist.name}
                </div>
                <form onSubmit={submitPlaylistToDatabase}>
                    <label className="playlist-name-label" htmlFor="name">Name Of Playlist:</label>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        value={playlist.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="playlist-description-label" htmlFor="description">Add a description:</label>
                    <textarea
                        id="description"
                        name="description"

                        value={playlist.description}
                        onChange={handleChange}
                        required
                    />
                    <button className="create-playlist-btn" type="submit">Create Playlist</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePlaylist