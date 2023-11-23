import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Pages/Firebase/firerbase.config'
import useAxiosPublic from "../../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const provider = new GoogleAuthProvider();

    // Create user with Email & Password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in with Google
    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // Update profile
    const UpdateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,

        });
    }

    // Login 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out
    const logOut = () => {
        // setLoading(true);
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);

            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('Access-Token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                // TODO: HAve to remove token
                localStorage.removeItem("Access-Token")
                setLoading(false);
            }


            console.log('current user:', currentUser);
        })
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        GoogleSignIn,
        UpdateUserProfile,
        signIn,
        logOut,
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;