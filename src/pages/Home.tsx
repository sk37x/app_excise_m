import React from 'react';
import { Navbar } from '../components/Navbar';
import { Box, Flex, Stack } from '@mantine/core';
import { Outlet, useParams } from 'react-router-dom';

type Props = {

}

const Home = (props:Props) => {
    return (
        <Flex direction="row">
            <Navbar />
            <Box w='100%' ml='300px' mih='100vh'>
                <Outlet />
            </Box>
        </Flex>
        
    )
};

export default Home