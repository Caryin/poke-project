import { Box, CloseButton, Heading, Spacer, Text } from '@chakra-ui/react';

const DashboardItem = (props) => {
  return (
    <Box maxW='full' bg='blue.200' rounded={20} border='1px' w={80} p='6'>
      <Box>
        <Box display='flex'>
          <Heading>{props.name}</Heading>
          <Spacer />
          <CloseButton onClick={() => props.handleRemove(props.id)} />
        </Box>
        <Text>Attack: {props.atk}</Text>
        <Text>HP: {props.hp}</Text>
        <Text>SP: {props.sp}</Text>
        <Text>Type: {props.type}</Text>
      </Box>
    </Box>
  );
};

export default DashboardItem;
