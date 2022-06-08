import React from 'react';
import pokemonData from '../store/pokemon.json';

//chakraUI
import { Text } from '@chakra-ui/react';

function Dashboard() {
  console.log(pokemonData);

  return (
    <div>
      <Text fontSize='2xl'>Dashboard</Text>
      <div>{JSON.stringify(pokemonData)}</div>
    </div>
  );
}

export default Dashboard;
