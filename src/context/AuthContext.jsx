import { useContext, createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const access_token = sessionStorage.getItem('access_token');
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(Boolean(access_token));

    useEffect(() => {
        const access_token = sessionStorage.getItem('access_token');
        setIsAuthenticatedUser(access_token ? true : false);
    }, []);

    const logout = () => {
        sessionStorage.removeItem('access_token');
        setIsAuthenticatedUser(false);
    };

    return <AuthContext.Provider value={{ isAuthenticatedUser, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
