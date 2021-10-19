import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const { handleLoginSubmit, singInUsingGoole, error, setError } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    const handleGooleSingin = () => {
        singInUsingGoole()

            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
            })
            .catch(error => {
                setError(error.message)

            })
    }
    return (
        <div className='Login'>
            <div className="login-container text-center ">
                <h5 className="text-red py-4" >Login Your Account!</h5>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <input type="email" placeholder="Enter Your Email" required />
                    <input type="password" placeholder="Enter Your Password" required />
                    <button className="login-btn">Login</button>
                </form>
                <p>{error}</p>
                <Link className="regintration" to="/registration">Create an account?</Link>
                <button className="google-login" onClick={handleGooleSingin}><i className="fab fa-google"></i> Sing in with Google</button>
            </div>
        </div>
    );
};

export default Login;