import { createContext, useContext, useState } from "react";
import UserAPI from "../api/UserAPI";

const readFromLocalStorage = (key, defaultFallbackValue) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultFallbackValue;
}

const writeToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const UserContextBase = createContext({
    logIn: (email, password) => { },
    logOut: () => { },
    signUp: () => { },
    confirmEmail: () => { },
    user: {},
    setUser: (_userData) => { },
    authenticated: false,
    setAuthenticated: () => { },
});

const UserContestProvider = ({ children }) => {

    // User data getter and setter
    const [user, _setUser] = useState(() => {
        return readFromLocalStorage("USER", {});
    });

    const setUser = (userData) => {
        _setUser(userData);
        writeToLocalStorage("USER", userData);
    };

    // Authentication value getter and setter
    const [authenticated, _setAuthenticated] = useState(() => {
        return readFromLocalStorage("AUTHENTICATED", false);
    });

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        writeToLocalStorage("AUTHENTICATED", isAuthenticated);
    }

    // LogIn and LogOut
    const logIn = (email, password) => {

    };

    const logOut = () => {
        setUser({});
        setAuthenticated(false);
        UserAPI.logout();
    };

    const signUp = (firstName, lastName, email, password) => {
        writeToLocalStorage("USER", {
            firstName,
            lastName,
            email,
            password,
            emailConfirmed: false,
        });
    };

    const confirmEmail = (email, confirmationToken) => {
        writeToLocalStorage("USER", {
            firstName,
            lastName,
            email,
            password,
            emailConfirmed: true,
        });
    }

    return (
        <UserContextBase.Provider value={{ logIn, logOut, signUp, confirmEmail, user, setUser, authenticated, setAuthenticated }}>
            {children}
        </UserContextBase.Provider>
    );
}

const useUserContext = () => useContext(UserContextBase);

export default UserContestProvider;
export { useUserContext };