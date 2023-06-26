
import { Button, Flex, Link, Stack } from '@chakra-ui/react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { Input } from '../components/Input'
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

                                
      <Stack spacing='4'>                
          <Input name='email' type='email' label="E-mail" error={undefined}   />
          <Input name='password' type='password' label="Password" ref={register} error={undefined} />
      </Stack>

              
  );
}
          

          



