import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//chakraUI
import { ChakraProvider } from '@chakra-ui/react';
import { PokemonProvider } from './store/pokemon-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </PokemonProvider>
);
