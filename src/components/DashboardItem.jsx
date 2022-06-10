import { Box, CloseButton, Heading, Spacer, Text } from '@chakra-ui/react';
import { usePokemon } from '../store/pokemon-context';

const DashboardItem = ({ data }) => {
  const { releasePokemon } = usePokemon();

  return (
    <Box maxW='full' bg='blue.200' rounded={20} border='1px' w={80} p='6'>
      <Box>
        <Box display='flex'>
          <Heading>{data.pokemon}</Heading>
          <Spacer />
          <CloseButton onClick={() => releasePokemon(data.id)} />
        </Box>
        <Text>Attack: {data.ATK}</Text>
        <Text>HP: {data.HP}</Text>
        <Text>SP: {data.SP}</Text>
        <Text>Type: {data.Type}</Text>
      </Box>
    </Box>
  );
};

export default DashboardItem;
