import AddSongToPlaylistForm from "./AddSongToPlaylistForm"
import '../css/CreatePlaylist.css'
import { useState } from "react"

const CreatePlaylist = () => {

    const [ songs, setSongs ] = useState([])

    const submitSongs = () => {
        console.log("submitting songs")
    }

    return(
        <div className="create-playlist">
            <div className="create-playlist-title">
                <h2 className="create-playlist-title-1">Create Your Playlist</h2>
                <h2 className="create-playlist-title-2">Add Songs</h2>
            </div>
            <AddSongToPlaylistForm/>
            <button className="create-playlist-btn" onClick={submitSongs}>Next <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    )
}

export default CreatePlaylist