import { Link } from "react-router-dom"
import './Auth.css';

export default function Auth() {
    return (
        <div className="login-screen">
            <div className="content">
                <div className="texts">
                    <h1 className="title">Burrows Admin</h1>
                    <p className="desc">Welcome back! Please login to your account.</p>
                </div>
                <div className="inputs">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="remember-forgot">
                    <div className="remember">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="forgot">
                        <Link to='/'>
                            <span>Forgot password?</span>
                        </Link>
                    </div>
                </div>
                <div className="btns">
                    <button className="btn">Login</button>
                    <button className="btn">Register</button>
                </div>
            </div>
        </div>
    )
}
