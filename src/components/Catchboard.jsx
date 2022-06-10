//chakraUI
import { Container, Divider, Text, Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { usePokemon } from '../store/pokemon-context';

const Catchboard = () => {
  const { wildPokemons, catchPokemon, getRandomPokemon } = usePokemon();
  const [appear, setAppear] = useState({});

  const makeNewAppear = () => {
    const newAppear = getRandomPokemon();
    setAppear(newAppear);
  };

  useEffect(() => {
    makeNewAppear();
  }, []);

  const handleCatch = () => {
    catchPokemon(appear.id);
    if (wildPokemons.length === 0) {
      return;
    }
    makeNewAppear();
  };

  return (
    <Container maxW='container.lg'>
      <ul>
        {wildPokemons.map((p) => (
          <li key={p.id}>{p.pokemon}</li>
        ))}
      </ul>
      <Divider />
      {wildPokemons.length > 0 && <Text>{appear.pokemon}</Text>}
      <Button onClick={makeNewAppear}>Release</Button>
      <Button onClick={handleCatch}>Catch</Button>
    </Container>
  );
};

export default Catchboard;
