import { Link } from "react-router-dom"
import { useState,useEffect } from "react";
import './Auth.css';
import { useMutation } from "@apollo/client";
import  {LOGIN_USER} from '../../../graphql/mutations'
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { useHistory } from "react-router-dom";
export default function Auth() {

    // intializaton
    const initialState={email:'',password:''}
    const [userData, setUserData] = useState(initialState)
    const {email,password}=userData
    const history=useHistory()

    const {token,setToken}=useContext(AuthContext)

    const [login_user, { data, loading, error }] = useMutation(LOGIN_USER);

    // control state of form
    const handleChangeInput=(e)=>{
        const {name,value}=e.target
        setUserData({...userData,[name]:value})
    }

    // handling submsion
    const handleSubmit=async (e)=>{
      e.preventDefault()
      const result= await login_user({variables: userData})
    //   console.log(result.data.login.token)
    setToken(result.data.login.token)
    
   
    
    
     
    }
    
    useEffect(() => {
        if(token){
            history.push('/dashboard/admin/merchants')
        }
    })


    return (
        <div className="login-screen">
            <div className="content">
                <div className="texts">
                    <h1 className="title">Burrows Admin</h1>
                    <p className="desc">Welcome back! Please login to your account.</p>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" placeholder="Username" name="email" onChange={handleChangeInput}  value={email} />
                    <input type="password" placeholder="Password" name="password" onChange={handleChangeInput} value={password} />
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
                </form>
               
            </div>
        </div>
    )
}
