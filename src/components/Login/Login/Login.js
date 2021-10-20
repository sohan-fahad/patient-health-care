import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    // destrucer data from useAuth
    const { handleLoginSubmit, singInUsingGoole, error, setError, setUser, setIsLoading, password } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    const handleGooleSingin = () => {
        singInUsingGoole()

            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
                setIsLoading(false)
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)

            })
    }

    const handleLogin = (e) => {
        history.push(redirect_url)
        e.preventDefault();
        handleLoginSubmit()

            .then(result => {
                if (password.legnth < 6) {
                    setError("Password should be more than 6 characters")
                }
                const userInfo = result.user;
                setUser(userInfo)
                setError("")
            })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div className='Login'>
            <div className="login-container text-center ">
                <h5 className="text-red py-4" >Login Your Account!</h5>
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="email" placeholder="Enter Your Email" required />
                    <input type="password" placeholder="Enter Your Password" required />
                    <button className="login-btn">Login</button>
                </form>
                <p>{error}</p>
                <Link className="regintration" to="/registration" onClick={() => setError("")}>Create an account?</Link>
                <button className="google-login" onClick={() => {
                    handleGooleSingin()
                    setError()
                }}><i className="fab fa-google"></i> Sing in with Google</button>
            </div>
        </div>
    );
};

export default Login;