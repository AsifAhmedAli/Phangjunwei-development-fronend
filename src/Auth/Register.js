import { Link } from "react-router-dom"
import { useState } from "react";
import './Auth.css';
import { useMutation } from "@apollo/client";
import { CREATE_USER } from '../graphql/mutations'
import { useHistory } from "react-router-dom";
export default function Register() {

    // intializaton
    const initialState = { name: '', email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, email, password } = userData;
    const history = useHistory()

    const [registerUser, { data, loading, error }] = useMutation(CREATE_USER);

    // control state of form
    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    // handling submsion
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await registerUser({ variables: userData })
    }

    return (
        <div className="login-screen">
            <div className="content">
                <div className="texts">
                    <h1 className="title">Burrows User Registration</h1>
                    <p className="desc">Hello! Please Register to your account.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <input type="text" placeholder="Full name" name="name" onChange={handleChangeInput} value={name} required/>
                        <input type="text" placeholder="Username" name="email" onChange={handleChangeInput} value={email} required/>
                        <input type="password" placeholder="Password" name="password" onChange={handleChangeInput} value={password} required />
                    </div>
                    <div className="remember-forgot">
                        <div className="remember">
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <div className="forgot">
                            <Link to='/' disabled>
                                <span>Forgot password?</span>
                            </Link>
                        </div>
                    </div>
                    <div className="btns">
                        <Link to='/dashboard/admin' className="btn" >Login</Link>
                        <button className="btn" type="submit">Register</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
