import { createContext, useContext, useState } from 'react';

const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);

    localStorage.setItem(
      'authentication',

      JSON.stringify({ isLoggedIn: true })
    );
  };

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    loginHandler,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
