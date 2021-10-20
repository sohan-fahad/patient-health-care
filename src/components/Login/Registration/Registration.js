import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Registration.css'

const Registration = () => {
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    // destrucer the value from context object
    const { handleName, handlePhoneNumber, handleEmail, handlePassword, handleRagisterSubmit, error, singInUsingGoole, setError, setUser, verifyEmail, setIsLoading, displayName, phoneNumber, password } = useAuth()

    const handleGooleSingin = () => {
        singInUsingGoole()

            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)

            })
    }

    const handleRegister = (e) => {
        history.push(redirect_url)
        e.preventDefault();
        handleRagisterSubmit()
            .then((result) => {
                if(password.legnth <6 ) {
                    setError("Password should be more than 6 characters")
                }
                const userInfo = result.user
                console.log(userInfo)
                setUser(userInfo)
                verifyEmail()
                setError("")
                if (userInfo) {
                    userInfo.displayName = displayName;
                    userInfo.phoneNumber = phoneNumber;
                }
                setIsLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // setError(errorMessage, errorCode)
            })
    }

    return (
        <div className='Registration'>
            <div className="registration-container text-center ">
                <h5 className="text-red py-4" >Create Your Account!</h5>
                <form className="registration-form" onSubmit={handleRegister}>
                    <input type="text" placeholder="Enter Your Name" onBlur={handleName} required />
                    <input type="email" placeholder="Enter Your Email" onBlur={handleEmail} required />
                    <input type="text" placeholder="Enter Your Phone Number" onBlur={handlePhoneNumber} required />
                    <input type="password" placeholder="Enter Your Password" onBlur={handlePassword} required />
                    <button className="registration-btn">Registration</button>
                </form>
                <p className="my-1">{error}</p>
                <Link className="login" to="/login" onClick={() => setError("")}>Already have an accoun?</Link>

                <button className="google-login" onClick={()=>{
                    handleGooleSingin()
                    setError("")
                }}><i className="fab fa-google"></i> Sing up with Google</button>
            </div>
        </div>
    );
};

export default Registration;