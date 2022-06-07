import { useState } from 'react';

//components
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

//store
import LoginContext from './store/login-context';

//chakraUI
import { Container, Flex } from '@chakra-ui/react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const login = (
    <Container maxW='container.lg'>
      <Flex>
        <LoginForm />
      </Flex>
    </Container>
  );

  return (
    <LoginContext.Provider
      value={{
        isLoggedIn,
        onLogin: loginHandler,
      }}
    >
      {isLoggedIn ? <Dashboard /> : login}
    </LoginContext.Provider>
  );
}

export default App;
