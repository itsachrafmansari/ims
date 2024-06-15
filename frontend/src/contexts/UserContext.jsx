import { createContext, useContext, useState } from "react";
import UserAPI from "../api/UserAPI";
import InternAPI from "../api/InternAPI";

const readFromLocalStorage = (key, defaultFallbackValue) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultFallbackValue;
}

const writeToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

const UserContextBase = createContext({
    logIn: async (email, password) => { },
    logOut: () => { },
    signUp: async () => { },
    confirmEmail: () => { },
    user: {},
    setUser: (_userData) => { },
    token: "",
    setToken: () => { },
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
    };

    const [token, _setToken] = useState(() => {
        return readFromLocalStorage("TOKEN", null);
    });

    const setToken = (tokenValue) => {
        _setToken(tokenValue);
        writeToLocalStorage("TOKEN", tokenValue);
    };

    // LogIn and LogOut
    const logIn = async (email, password) => {
        UserAPI.logIn(email, password).then((response) => {
            setUser({
                firstName: response.data.first_name,
                lastName: response.data.last_name,
                email: response.data.email,
                role: response.data.role,
                portrait_image_url: response.data.portrait_image_url
            });
            setToken(response.token);
            setAuthenticated(true);
        });
    };

    const logOut = () => {
        UserAPI.logOut();
        setUser({});
        setAuthenticated(false);
    };

    const signUp = (firstName, lastName, email, password) => {
        InternAPI.signUp(firstName, lastName, email, password).then((response) => {
            logIn(email, password);
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
        <UserContextBase.Provider value={{ logIn, logOut, signUp, confirmEmail, user, setUser, token, setToken, authenticated, setAuthenticated }}>
            {children}
        </UserContextBase.Provider>
    );
}

const useUserContext = () => useContext(UserContextBase);

export default UserContestProvider;
export { useUserContext };