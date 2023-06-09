
import { Button, Flex, Link, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { Input } from '../components/Form/Input'
import React from 'react'
 

type SignInFormData={
  email: string;
  password: string;
}


export default function SignIn() {

  const {register, handleSubmit, formState, clearErrors } = useForm()

  function handleSignIn ()  : SubmitHandler <SignInFormData> { return async (values) => {

    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)

  }
}


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
                      <Input name='email' type='email' label="E-mail"  onError={clearErrors.arguments} ref={register({
                        required: "Mandatory Field!" })} />

                      <Input name='password' type='password' label="Password" ref={register} />
                    </Stack>

                    
                      <Link href="/user">
                        <Button type='submit' mt="6" colorScheme='pink' size='lg' isLoading={formState.isSubmitting}>Enter</Button>
                      </Link>

                  </Flex>
              </Flex>
              );
            }
          



