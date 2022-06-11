import { CloseButton, Heading, Text, VStack } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';

const DashboardItem = ({ data }) => {
  const { releasePokemon } = usePokemon();

  return (
    <VStack
      bg='blue.200'
      rounded={24}
      borderWidth={3}
      borderColor='gray.500'
      p={4}
      position='relative'
    >
      <Heading size='2xl'>{data.pokemon}</Heading>
      <CloseButton
        position='absolute'
        right={0}
        top={-2}
        onClick={() => releasePokemon(data.id)}
      />
      <VStack spacing={0} mt={4}>
        <Text>Attack: {data.ATK}</Text>
        <Text>HP: {data.HP}</Text>
        <Text>SP: {data.SP}</Text>
        <Text>Type: {data.Type}</Text>
      </VStack>
    </VStack>
  );
};

export default DashboardItem;
