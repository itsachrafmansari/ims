import { createContext, useContext, useState } from "react";

const readFromLocalStorage = (key, defaultFallbackValue) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultFallbackValue;
}

const writeToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const UserContextBase = createContext({
    login: (email, password) => { },
    logout: () => { },
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

    // Login and Logout
    const login = (email, password) => {

    };

    const logout = () => {
        setUser({});
        setAuthenticated(false);
    };

    return (
        <UserContextBase.Provider value={{ login, logout, user, setUser, authenticated, setAuthenticated }}>
            {children}
        </UserContextBase.Provider>
    );
}

const useUserContext = () => useContext(UserContextBase);

export default UserContestProvider;
export { useUserContext };