import React from 'react';
import { HStack, Button } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

function LogOutButton() {
  const { logout } = useAuth0();
  return (
    <HStack>
      <Button onClick={() => logout()}>Logout</Button>
    </HStack>
  );
}

export default LogOutButton;
