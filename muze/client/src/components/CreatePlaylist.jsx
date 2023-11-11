import AddSongToPlaylistForm from "./AddSongToPlaylistForm"
import '../css/CreatePlaylist.css'
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const CreatePlaylist = () => {

    const [ songs, setSongs ] = useState([])
    const [ playlist, setPlaylist ] = useState({
        name: '',
        description: ''
    })
    const [ next, setNext ] = useState(false)
    const navigate = useNavigate()

    const submitSongs = (e) => {
        console.log("submitting songs")
        setNext(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlaylist({
          ...playlist,
          [name]: value,
        });
    };

    const createPlaylist = (e) => {
        e.preventDefault();
        //send api call to create playlist, sending playlist object and songs array
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
                <input></input>
                <button className="create-playlist-btn" onClick={submitSongs}>Next <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className={`create-playlist-wrapper-2 ${!next ? 'hide' : ''}`}>
                <div className="playlist-name">
                    {playlist.name}
                </div>
                <form onSubmit={createPlaylist}>
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