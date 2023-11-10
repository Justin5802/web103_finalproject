import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import MyPlaylists from './components/MyPlaylists'
import Music from './components/Music'
import CreatePlaylist from './components/CreatePlaylist'

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
    }
  ])

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App
