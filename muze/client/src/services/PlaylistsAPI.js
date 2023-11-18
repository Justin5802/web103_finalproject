import { request } from '../utilities/API.js'

const playlistsURL = "/api/playlists"

const getAllPlaylists = () => request('GET', playlistsURL) 

export default {
    getAllPlaylists
}