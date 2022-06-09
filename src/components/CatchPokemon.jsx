import { useEffect, useState } from 'react';

//chakraUI
import { Container, Heading, Button } from '@chakra-ui/react';

//store
import pokemonData from '../store/pokemon.json';

const CatchPokemon = () => {
  const [catchPokemon, setCatchPokemon] = useState([]);

  const fetchPokemon = () => {
    const randomPokemon = Math.floor(Math.random() * pokemonData.length);
    setCatchPokemon(pokemonData[randomPokemon].pokemon);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const catchHandler = () => {};

  return (
    <Container maxW='container.lg'>
      <Heading>{catchPokemon}</Heading>
      <Button onClick={catchHandler}>Catch</Button>
    </Container>
  );
};

export default CatchPokemon;
