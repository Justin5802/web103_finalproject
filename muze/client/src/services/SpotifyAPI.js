class ApiError extends Error {
    constructor(message, details) {
      super(message)
      this.name = 'API' + this.name
      this.details = details
    }
  }
  
  
  const spotifyRequest = async (method, url, headers=null, body=null) => {
    
    let options = {}

    if(headers) {
      options = { method, headers, body }
    } else {
        headers = ({
            'Content-Type': 'application/json'
        })
        options = { method, headers }
    }

    let response
  
    try {
      response = await fetch(url, options)
    }
    catch(e) {
      throw new ApiError('API cannot be reached', e.message)
    }
    
    const data = await response.json()
  
    if (response.ok) {
      return data
    }
    else {
      if (data.error)
        throw new ApiError(data.error.message, data.error.details)
    }
  }

  const getToken = async () => {
      const spotifyURL = 'https://accounts.spotify.com/api/token'
      const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      const body = 'grant_type=client_credentials&client_id=cf992f687ebb4a11baa49857474d390b&client_secret=da113bd477494355bc3baead1c57faa5'

      const response = await fetch(spotifyURL, {
        method: 'POST',
        headers: headers,
        body: body
      })

    const data = await response.json()
    return data.access_token
}

  const searchSongByName = async (songName, token) => {
    const spotifyURL = `https://api.spotify.com/v1/search?q=${songName}&type=track&limit=10 `
    const headers = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const response = await fetch(spotifyURL, {
        method: 'GET',
        headers: headers
      })
      const data = await response.json()
      return data
    } catch (e) {
      console.error(e)
    }

  }

  export {
    ApiError,
    spotifyRequest,
    getToken,
    searchSongByName
  }