import Logo from './Logo'
import '../css/Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [ loggedIn, setLoggedIn ] = useState(false)
    const navigate = useNavigate()


    const handleLogin = () => {
        setLoggedIn(!loggedIn) //setLoggedIn once the user has logged in
        console.log('Login Successful')
        navigate('/myplaylists') 
    }

    return (
        <div className={`login ${loggedIn ? 'fade-out' : ''} centered`}>
            <div className="login-left">
                <h2>Welcome to</h2>
                <Logo />
                <p>Discover Yourself Through Music</p>
                <button className="login-button" onClick={handleLogin}>Log In</button>
            </div>
            <img className="robot-img" src="./robot.png" alt="" />
        </div>
    )
}

export default Login