import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Playlist from './Playlist'
import '../css/MyPlaylists.css'


const MyPlaylists = () => {

    const [playlists, setPlaylists] = useState([
        {
          name: 'Playlist 1',
          description: 'This is the first playlist',
          dateCreated: '2023-01-01',
          image: 'https://via.placeholder.com/300x200?text=playlist1',
        },
        {
          name: 'Playlist 2',
          description: 'Another awesome playlist',
          dateCreated: '2023-02-15',
          image: 'https://via.placeholder.com/300x200?text=playlist2',
        },
        {
          name: 'Playlist 3',
          description: 'The third playlist in the collection',
          dateCreated: '2023-03-20',
          image: 'https://via.placeholder.com/300x200?text=playlist3',
        },
        {
          name: 'Playlist 4',
          description: 'A fantastic playlist for your mood',
          dateCreated: '2023-04-10',
          image: 'https://via.placeholder.com/300x200?text=playlist4',
        },
        {
          name: 'Playlist 5',
          description: 'Get ready for some upbeat tunes!',
          dateCreated: '2023-05-05',
          image: 'https://via.placeholder.com/300x200?text=playlist5',
        },
        {
          name: 'Playlist 6',
          description: 'Chill and relax with this playlist',
          dateCreated: '2023-06-15',
          image: 'https://via.placeholder.com/300x200?text=playlist6',
        },
        {
          name: 'Playlist 7',
          description: 'An eclectic mix of your favorite genres',
          dateCreated: '2023-07-20',
          image: 'https://via.placeholder.com/300x200?text=playlist7',
        },
        {
          name: 'Playlist 8',
          description: 'Dance the night away with these tracks',
          dateCreated: '2023-08-08',
          image: 'https://via.placeholder.com/300x200?text=playlist8',
        },
        {
          name: 'Playlist 9',
          description: 'Explore new sounds with this playlist',
          dateCreated: '2023-09-12',
          image: 'https://via.placeholder.com/300x200?text=playlist9',
        },
        {
          name: 'Playlist 10',
          description: 'A mix of old and new favorites',
          dateCreated: '2023-10-05',
          image: 'https://via.placeholder.com/300x200?text=playlist10',
    }])
        
    const [ buttonHovered, setButtonHovered ] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        //make a call to populate playlists
    }, [])

    const hoverButton = (hovered) => {
        setButtonHovered(hovered);
        console.log(hovered)
    }

    const redirectToCreate = () => {
        navigate('/createplaylist')
        console.log("create")
    }

    const redirectToGenerate = () => {
        navigate('/generateplaylist')
        console.log("generate")
    }

    return (
        <div className="playlists container">
            <div className="playlists-title">
                <h2>Saved</h2>
                <h2 className="playlists-title-playlists">Playlists</h2>

                <div className="playlists_buttons">                    
                    <>
                        <button className="add-btn" 
                                onClick={ () => hoverButton(!buttonHovered) }     
                        >
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <button className={`generate-btn ${buttonHovered ? 'show' : ''}`} onClick={redirectToGenerate}>
                            Generate
                        </button>
                        <button className={`create-btn ${buttonHovered ? 'show' : ''}`} onClick={redirectToCreate}>
                            Create
                        </button>
                    </>
                </div>


            </div>
            <div className="playlists-main">
                {playlists ? (
                    playlists.map((playlist, index) => (
                        <Playlist index={index} playlist={playlist}/>
                    ))
                )
                : 
                ( 
                    <>
                        <h1>You don't have any playlists yet!</h1>
                        <h1>Check out our music library and choose some songs that you love to create your playlist</h1>
                    </>
                )}
            </div>
        </div>

    )

}

export default MyPlaylists