import React, { useState, useEffect } from 'react';
//email, password dummy data, przygotowane pod rozszerzenie 
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { },
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIssLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    
        if (storedUserLoggedInInformation === '1') {
            setIssLoggedIn(true);
        }
      }, []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIssLoggedIn(false);

    }

    const logoinHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIssLoggedIn(true);

    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: logoinHandler
            }} >
            {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;