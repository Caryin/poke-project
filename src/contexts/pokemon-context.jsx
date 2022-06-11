import { createContext, useContext, useState } from 'react';

import PokemonData from './pokemon.json';

const PokemonContext = createContext({});

export const PokemonProvider = ({ children }) => {
  const [wildPokemons, setWildPokemons] = useState(PokemonData);
  const [myPokemons, setMyPokemons] = useState([]);
  const [appear, setAppear] = useState({});

  const catchPokemon = (id) => {
    const newWildPokemons = wildPokemons.filter((p) => p.id !== id);
    setWildPokemons(newWildPokemons);
    const found = PokemonData.find((p) => p.id === id);
    setMyPokemons((prev) => [...prev, found]);
  };

  const releasePokemon = (id) => {
    const newMyPokemons = myPokemons.filter((p) => p.id !== id);
    setMyPokemons(newMyPokemons);
    const removePokemon = PokemonData.find((p) => p.id === id);
    setWildPokemons((prev) => [...prev, removePokemon]);
  };

  const getRandomPokemon = () => {
    if (wildPokemons.length === 0) {
      return;
    }
    const randomNumber = Math.floor(Math.random() * wildPokemons.length);
    return wildPokemons[randomNumber];
  };

  const makeNewAppear = () => {
    const newAppear = getRandomPokemon();
    setAppear(newAppear);
  };

  const value = {
    wildPokemons,
    setWildPokemons,
    myPokemons,
    setMyPokemons,
    catchPokemon,
    releasePokemon,
    getRandomPokemon,
    appear,
    makeNewAppear,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  return useContext(PokemonContext);
};
