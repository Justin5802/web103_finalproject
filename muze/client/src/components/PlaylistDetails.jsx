import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const PlaylistDetails = () => {

    const { paramName } = useParams()

    useEffect(() => {
        //api call to get the playlist details from the address
    }, [])

    return(
        <>
            PlaylistDetails
        </>
    )

}

export default PlaylistDetails;