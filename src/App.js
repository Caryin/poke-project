import { useState, useEffect } from 'react';

//components
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

//store
import LoginContext from './store/login-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const value = localStorage.getItem('authentication');

    const parsedValue = JSON.parse(value);

    if (parsedValue && parsedValue.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const loginHandler = () => {
    setIsLoggedIn(true);
    localStorage.setItem(
      'authentication',

      JSON.stringify({ isLoggedIn: true })
    );
  };

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
      }}
    >
      {isLoggedIn ? <Dashboard /> : <LoginForm />}
    </LoginContext.Provider>
  );
}

export default App;
