import { createContext, useState } from 'react';

const LoginContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const LoginProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;
  //console.log( 'app',token)
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
  };

  const loginContextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
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
