import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebaseConfig';

export const UserAuthContext = createContext()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState({ name: 'rony' })
    const auth = getAuth(app);



    const createUser = (email, password) => {
        return(
            createUserWithEmailAndPassword(auth, email, password)
        )
    }











    const authInfo = { user, createUser  }
    return (
        <UserAuthContext.Provider value={authInfo}>
            {children}
        </UserAuthContext.Provider>
    );
};

export default AuthContext;