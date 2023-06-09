import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';
import React from "react";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { error } from 'console';


interface InputProps extends ChakraInputProps{
    name: string;
    label: string;
    error: FieldError;
}

const signInFormSchema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),

}) 



export function Input({name, label, error, ...rest}, ref ): InputProps ){

    return(
        
        <FormControl isInvalid {... error} >
            { !!label && <FormLabel htmlFor={name}> {label} </FormLabel> }

        
        <ChakraInput name='password' type='password' id='password' 
                focusBorderColor='pink.500' bgColor='gray.900' variant='filled' size='lg' {...rest}
    
            {...!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
            
            />
        </FormControl>
    );
}