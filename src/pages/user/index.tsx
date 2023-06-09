import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from "@chakra-ui/react";
import React from "react";
import { Sidebar } from "../../components/Form/Sidebar";
import Header from "../../components/Form/Header";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../../components/Form/Pagination";
import Link from 'next/link';



export default function UserList(){

    return (

            <Box>
                <Header/>

                <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                    <Sidebar/>
                
                
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>
                        
                        <Link href="user/create" >
                            <Button size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine}/>}>
                                Create New
                            </Button>
                        </Link>

                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8"></Th>
                                <Th>User</Th>
                                <Th>Registration Date</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Guilherme Ferreira</Text>
                                        <Text fontWeight="normal">ferreiragui.dev</Text>
                                    </Box>
                                </Td>
                                <Td>06/06</Td>
                                <Td>
                                    <Button as="a"
                                    size="sm"
                                    fontSize="sm"
                                    colorScheme="purple"
                                    leftIcon={ <Icon as={RiPencilLine} /> }>
                                        Edit
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination/>

                </Box>
            </Flex>
        </Box>
        

    );
}