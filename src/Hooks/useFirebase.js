import { useEffect, useState } from 'react';
import InitialAuthentication from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useHistory, useLocation } from 'react-router';

InitialAuthentication()
const useFirebase = () => {
    const auth = getAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home" 

    const [displayName, setDisplayName] = useState('')
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const handleName = e => {
        setDisplayName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleRagisterSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        console.log("reg", isLoading)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const userInfo = result.user
                setUser(userInfo)
                verifyEmail()
                setError("")
                if (userInfo) {
                    userInfo.displayName = displayName;
                    userInfo.phoneNumber = phoneNumber;
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userInfo = result.user;
                console.log(userInfo)
                setUser(userInfo)
            })
            .catch(err => {
                setError(err.message)
            })
        setError("")

    }

    // Function for registration


    // Function for verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { })
            .catch((err) => {
                const error = err.message;
                setError(error)
            })
    }


    const singInUsingGoole = () => {
        setError("")
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setError("")
            
        })
        .catch(error => {
            setError(error.message)

        })
        .finally(() => setIsLoading(false))
        
    }
    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    // Function for logOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => { setUser({}) })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        displayName,
        error,
        email,
        phoneNumber,
        password,
        handleName,
        handlePhoneNumber,
        handleEmail,
        handlePassword,
        handleRagisterSubmit,
        handleLoginSubmit,
        logOut,
        singInUsingGoole,
    }
};

export default useFirebase;