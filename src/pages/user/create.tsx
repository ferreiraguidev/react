import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, Divider, VStack, SimpleGrid, Input, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Form/Sidebar";
import Header from "../../components/Form/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Form/Pagination";




export default function CreateUser(){
    
    return(

        <Box>
            <Header/>
                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar/>
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    
                <Heading size="lg" fontWeight="normal">Create User</Heading>

                <Divider my="6" borderColor="gray.700"/>

                <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                            <Input name="name" placeholder="Name" />
                            <Input name="e-mail" placeholder="E-mail" />
                        </SimpleGrid>
                        
                        <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                        <Input name="password" type="password" placeholder="Password" />
                            <Input name="password" type="password" placeholder="Password Confirmation" />
                        </SimpleGrid>
                </VStack>

                <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">

                        <Link href="/user" >
                            <Button colorScheme="whiteAlpha">Cancel</Button>
                        </Link>
                            
                        <Button colorScheme="pink">Save</Button>

                    </HStack>
                </Flex>
                </Box>
            </Flex>
        </Box>

   );
}