import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//chakraUI
import { ChakraProvider } from '@chakra-ui/react';
import { PokemonProvider } from './contexts/pokemon-context';
import { LoginProvider } from './contexts/login-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <LoginProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </LoginProvider>
  </PokemonProvider>
);
