import './App.css';

//components
import LoginForm from './components/LoginForm';

//chakraUI
import { Container, Flex } from '@chakra-ui/react';

function App() {
  return (
    <div className='App'>
      <Container maxW='container.lg'>
        <Flex>
          <LoginForm />
        </Flex>
      </Container>
    </div>
  );
}

export default App;
