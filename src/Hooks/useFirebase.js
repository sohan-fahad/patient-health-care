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

    const handleName = e => {
        setDisplayName(e.target.value)
        console.log(e.target.value)
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
        registration(email, password, phoneNumber, displayName)
        setError("")

    }

    const handleLoginSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        login(email, password)
    }

    // Function for registration
    const registration = (userEmail, userPassword, userPhoneNumber, userDisplayName) => {
        setIsLoading(true)
        setError("")
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then((result) => {
                const userInfo = result.user
                setUser(userInfo)
                verifyEmail()
                console.log(userInfo)
                if (userInfo) {
                    userInfo.displayName = userDisplayName;
                    userInfo.phoneNumber = userPhoneNumber;
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            })
            .finally(() => setIsLoading(false))

    }

    // Function for verify email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => { })
    }

    // function for login
    const login = (userEmail, userPassword) => {
        setError("")
        setIsLoading(true)
        signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(result => {
                const userInfo = result.user;
                setUser(userInfo)
            })
            .catch(error => {
                setError(error.message, error.code)
            })
            .finally(()=>setIsLoading(false))
    }

    const singInUsingGoole = () => {
        setError("")
        const googleProvider = new GoogleAuthProvider();
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
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
        })
        setIsLoading(true)
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
        singInUsingGoole
    }
};

export default useFirebase;