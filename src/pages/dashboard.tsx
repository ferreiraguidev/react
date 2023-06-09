import Header from "../components/Form/Header";
import dynamic from 'next/dynamic'
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Form/Sidebar";
import React from "react";


const Chart = dynamic (() => import('react-apexcharts'),{
    ssr: false, 
})

const options = {
    chart:{
        toolbar:{
            show:false,

        },
        zoom:{
            enabled:false,

        },
        foreColor: theme.colors.gray[500]
    },
    grid:{
        show:false,
    
    },
    dataLabels:{
        enabled: "false"
    },
    tooltip:{
        enabled: "false"
    },
    xaxis:{
        type:'datetime'
        },
        axisBorder:{
            color: theme.colors.gray[600]
        },
        axisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[

            '2021-03-18T00:00:00.000Z',
            '2021-03-19T00:00:00.000Z',
            '2021-03-20T00:00:00.000Z',
            '2021-03-21T00:00:00.000Z',
            '2021-03-22T00:00:00.000Z',
            '2021-03-23T00:00:00.000Z',

        ]
    }
    
    
const series =[{
    name:'series', data:[31, 120, 10, 28, 61, 18, 109]}
]

export default function Dashboard(){
    
    return (

        <Flex direction="column"  h="100vh">
            <Header/>
        
            
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="8"
                    bg="gray.800"
                    borderRadius={8}
                    pb="4">
                        <Text fontSize="lg" mb="4">Week Subscribers</Text>
                        <Chart series={series} options={options} type="area" height={160} length={150} />
                    </Box>

                    <Box p="8" bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Opening taxes</Text>
                        <Chart options={options} series={series} type="area" height={160} />
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>


    );
}