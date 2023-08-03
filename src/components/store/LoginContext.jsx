import { createContext, useState } from 'react';

const LoginContext = createContext({
  token:'',
  email:'',
  isLoggedIn:false,
  login: (token) => {},
  logout: () => {},
})

export const LoginProvider = (props) => {
  const initialToken = localStorage.getItem('token');
  const initialEMail = localStorage.getItem('email');
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEMail);
  const userIsLoggedIn=!!token;
  
  const loginHandler = (token,email) => {
    const formattedEmail = email.replace(/[@.]/g, '');
    setToken(token);
    setEmail(formattedEmail);
    localStorage.setItem('token', token);
    localStorage.setItem('email', formattedEmail);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  const loginContextValue = {
    token: token,
    email:email,
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
