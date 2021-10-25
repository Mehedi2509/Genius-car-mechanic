import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.initialize";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    };

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        });
        return () => unsubscribed;
    }, []);

    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;