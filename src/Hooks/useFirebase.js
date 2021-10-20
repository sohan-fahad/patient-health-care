import { useEffect, useState } from 'react';
import InitialAuthentication from '../Firebase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, sendEmailVerification, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

InitialAuthentication()
const useFirebase = () => {
    const auth = getAuth()

    const [displayName, setDisplayName] = useState('')
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // function for set name in state
    const handleName = e => {
        setDisplayName(e.target.value)
    }
    // function for set email in state
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    // function for set password in state
    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }

    // function for set password in state
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    // Function for registration
    const handleRagisterSubmit = e => {
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // function for login
    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userInfo = result.user;
                setUser(userInfo)
            })
            .catch(err => {
                setError(err.message)
            })
        setError("")

    }



    // Function for verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { })
            .catch((err) => {
                const error = err.message;
                setError(error)
            })
    }

    // function for google singin
    const singInUsingGoole = () => {
        setError("")
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

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
        signOut(auth)
            .then(result => { setUser({}) })
    }

    return {
        user,
        setUser,
        setError,
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
        verifyEmail,
        displayName,
        phoneNumber
    }
};

export default useFirebase;