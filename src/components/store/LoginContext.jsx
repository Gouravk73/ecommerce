import { createContext, useState } from 'react';

const LoginContext = createContext({
    token:'',
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
});

export const LoginProvider = (props) => {
    const initialToken=localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const userIsLoggedIn=!!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token);

     };

    const logoutHandler = () => {
        setToken(null);
        localStorage.removeItem("token");
        // Add logic for logout, e.g., clearing tokens, resetting authentication, etc.
    };

    const loginContextValue = {
        token: token,
        isLoggedIn:userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return (
        <LoginContext.Provider value={loginContextValue}>
        {props.children}
        </LoginContext.Provider>
    );
    };

    export default LoginContext;
