import React from 'react';
import { AuthContext } from '../context/Context';

const FirebaseAuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseAuthProvider;