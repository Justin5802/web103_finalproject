import { request } from '../API.js'

const playlistsURL = "/api/playlists"

const getAllPlaylists = () => request('GET', playlistsURL) 

export default {
    getAllPlaylists
}