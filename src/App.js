import { HStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import MyPokemons from './components/MyPokemons';
import WildPokemons from './components/WildPokemons';
//store
import { useLogin } from './store/login-context';

const App = () => {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  useEffect(() => {
    const value = localStorage.getItem('authentication');

    const parsedValue = JSON.parse(value);

    if (parsedValue && parsedValue.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  return (
    <>
      {/* {isLoggedIn ? <Dashboard /> : <LoginForm />} */}
      <HStack>
        <MyPokemons />
        <WildPokemons />
      </HStack>
    </>
  );
};

export default App;
