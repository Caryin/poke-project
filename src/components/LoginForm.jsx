//custom hooks
import useInput from '../hooks/use-input';

//assets
import loginImage from '../assets/loginImage.png';

//chakraUI
import {
  SimpleGrid,
  GridItem,
  AspectRatio,
  Image,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';

const usernameValidation = (value) => value.trim() !== '';
const passwordValidation = (value) =>
  value.includes('@' || '#' || '$' || '%' || '&' || '*');

function LoginForm() {
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
  };

  const fontColor = '#21325E';

  return (
    <SimpleGrid
      w='full'
      alignContent='center'
      columns={2}
      columnGap={10}
      bg='blue.200'
      borderRadius='lg'
      mt='60px'
    >
      <GridItem>
        {/* <AspectRatio ratio={3 / 4}>
          <Image src={loginImage} />
        </AspectRatio> */}
      </GridItem>

      <GridItem pr={6}>
        <form onSubmit={submitHandler}>
          <Heading py={4} color={fontColor}>
            Login
          </Heading>
          <FormLabel htmlFor='username' color={fontColor}>
            Username:
          </FormLabel>
          <Input
            id='username'
            type='text'
            color={fontColor}
            bg='white'
            value={username}
            onChange={usernameChangeHandler}
            onBlur={usernameBlurHandler}
          />
          {usernameHasError && (
            <Text p={2} color='red'>
              Please enter a valid username.{' '}
            </Text>
          )}
          <FormLabel htmlFor='password' color={fontColor}>
            Password:
          </FormLabel>
          <Input
            id='password'
            type='password'
            color={fontColor}
            value={password}
            bg='white'
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <Text p={2} color='red'>
              Password must contain at least 1 special character (@, #, $, %, &,
              *).
            </Text>
          )}
          <Button
            type='submit'
            w='full'
            size='lg'
            variant='solid'
            bgColor='#21325E'
            my={10}
            isDisabled={!usernameIsValid || !passwordIsValid}
          >
            Let's catch
          </Button>
        </form>
      </GridItem>
    </SimpleGrid>
  );
}

export default LoginForm;
