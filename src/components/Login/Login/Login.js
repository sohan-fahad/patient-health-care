import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='Login'>
            <div  className="login-container text-center ">
                <h5 className="text-red py-4" >Login Your Account!</h5>
                <form className="login-form" onS>
                    <input type="email" placeholder="Enter Your Email" />
                    <input type="password" placeholder="Enter Your Password" />
                    <button className="login-btn">Login</button>
                </form>
                <Link className="regintration" to="/registration">Create an account?</Link>
                <Link className="google-login"><i className="fab fa-google"></i> Sing in with Google</Link>
            </div>
        </div>
    );
};

export default Login;