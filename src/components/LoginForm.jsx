import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import loginImage from '../assets/loginImage.png';
import { useLogin } from '../store/login-context';
import { useInput } from '../store/use-input';

const usernameValidation = (value) => value.trim() !== '';
const passwordValidation = (value) =>
  value.includes('@' || '#' || '$' || '%' || '&' || '*');

const LoginForm = () => {
  const { loginHandler } = useLogin();
  const {
    value: username,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername,
  } = useInput(usernameValidation);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(passwordValidation);

  let formIsValid = false;

  if (usernameIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetUsername();
    resetPassword();
    loginHandler();
  };

  return (
    <Container maxW='container.lg'>
      <Flex bg='#3B4CCA' borderRadius='30' mt={10}>
        <AspectRatio ratio={3 / 4} flex={0.8}>
          <Image src={loginImage} borderRadius='30' borderRightRadius={0} />
        </AspectRatio>

        <Box flex={1} px={4} borderRightRadius={0}>
          <form onSubmit={submitHandler}>
            <Heading py={8} mt={16} color='#FFDE00' size='2xl'>
              Login
            </Heading>
            <FormLabel htmlFor='username' color='white' fontSize='lg'>
              Username:
            </FormLabel>
            <Input
              id='username'
              type='text'
              color='grey.700'
              bg='white'
              value={username}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              size='lg'
            />
            {usernameHasError && (
              <Text p={2} color='red'>
                Please enter a valid username.{' '}
              </Text>
            )}

            <FormLabel htmlFor='password' color='white' fontSize='lg'>
              Password:
            </FormLabel>
            <Input
              id='password'
              type='password'
              color='grey.700'
              value={password}
              bg='white'
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              size='lg'
            />
            {passwordHasError && (
              <Text p={2} color='red'>
                Password must contain at least 1 special character (@, #, $, %,
                &, *).
              </Text>
            )}
            <Button
              type='submit'
              w='full'
              size='lg'
              colorScheme='red'
              my={10}
              isDisabled={!usernameIsValid || !passwordIsValid}
            >
              Let's catch
            </Button>
          </form>
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginForm;
