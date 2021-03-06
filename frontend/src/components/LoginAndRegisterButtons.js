import { Link, useLocation } from 'react-router-dom';
import { HStack, Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginAndRegisterButtons = () => {
  const { loginWithRedirect } = useAuth0();
  // const location = useLocation();
  return (
    <HStack>
      {/* <Button
        as={Link}
        to={{
          pathname: '/login',
          state: {
            prevPathname: location.pathname,
          },
        }}
      >
        Login
      </Button> */}
      <Button onClick={() => loginWithRedirect()}>Login</Button>
      {/* <Button
        as={Link}
        to={{
          pathname: '/register',
          state: {
            prevPathname: location.pathname,
          },
        }}
      >
        Register
      </Button> */}
    </HStack>
  );
};

export default LoginAndRegisterButtons;
