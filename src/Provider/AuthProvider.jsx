import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateCurrentUser, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const updateUserProfile = (img, name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }
   
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser =>{
            setUser(currentUser)
            setLoading(false)
        }));
        return () => {
            unSubscribe()
        }
    },[])
    console.log(user);

    const authInfo = {
        createUser,
        signInUser,
        logOut,
        updateUserProfile,
        googleSignIn,
        user,
        loading,
        
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;