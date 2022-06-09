import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import MyPokemons from './components/MyPokemons';
import WildPokemons from './components/WildPokemons';
//store
import LoginContext from './store/login-context';

const App = () => {
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
      {/* {isLoggedIn ? <Dashboard /> : <LoginForm />} */}
      <HStack>
        <MyPokemons />
        <WildPokemons />
      </HStack>
    </LoginContext.Provider>
  );
};

export default App;
