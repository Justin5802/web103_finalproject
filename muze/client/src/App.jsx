import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MyPlaylists from './components/MyPlaylists'
import Music from './components/Music'
import CreatePlaylist from './components/CreatePlaylist'
import GeneratePlaylist from './components/GeneratePlaylist'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/myplaylists',
      element: <MyPlaylists/>
    },
    {
      path: '/music',
      element: <Music/>
    },
    {
      path: '/createplaylist', 
      element: <CreatePlaylist/>
    },
    {
      path: '/generateplaylist',
      element: <GeneratePlaylist/>
    },
    {
      path: '*',
      element: <h1>404</h1>
    }
  ])

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
