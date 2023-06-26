import { Button, Card, CardHeader, Flex, Heading, Input, Link, Stack, color } from '@chakra-ui/react';
import React from 'react';




 

type SignInFormData={
  email: string;
  password: string;
}


export default function SignIn() {


return (
            

  
      <Flex w="100vw" h="100vh" align="center" justifyContent="center">
        <Flex as="form" 
        width="100%" 
        maxWidth={360}
        backgroundColor="gray.800"
        border-radius="8"
        padding="8"
        borderRadius={8}
        flexDir="column">
          
          <Stack spacing='4'>
            <Input name='email' type='email' placeholder="E-mail" />

            <Input name='password' type='password' placeholder="Password" />
          </Stack>

          
            <Link href="/user">
              <Button type='submit' mt="6" colorScheme='pink' size='lg'>Enter</Button>
            </Link>

        </Flex>
      </Flex>

    );
}
          



