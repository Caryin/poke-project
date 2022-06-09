import { createContext, useContext, useState } from 'react';

import PokemonData from './pokemon.json';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [wildPokemons, setWildPokemons] = useState(PokemonData);
  const [myPokemons, setMyPokemons] = useState([]);

  const value = {
    wildPokemons,
    setWildPokemons,
    myPokemons,
    setMyPokemons,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
