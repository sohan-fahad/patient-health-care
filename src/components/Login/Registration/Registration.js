import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
    return (
        <div className='Registration'>
            <div className="registration-container text-center ">
                <h5 className="text-red py-4" >Create Your Account!</h5>
                <form className="registration-form">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your Email" />
                    <input type="text" placeholder="Enter Your Phone Number" />
                    <input type="password" placeholder="Enter Your Password" />
                    <button className="registration-btn">Login</button>
                </form>
                <Link className="login" to="/login">Already have an accoun?</Link>
                <Link className="google-login"><i className="fab fa-google"></i> Sing up with Google</Link>
            </div>
        </div>
    );
};

export default Registration;