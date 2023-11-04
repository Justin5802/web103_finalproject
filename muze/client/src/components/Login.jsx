import Logo from './Logo'
import '../css/Login.css'

const Login = () => {

    const handleLogin = () => {
        console.log('Login button clicked')
    }

    return (
        <div className="login centered">
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