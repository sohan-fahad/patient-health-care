import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const InitialAuthentication = () => {
    return (
        initializeApp(firebaseConfig)
    );
};

export default InitialAuthentication;