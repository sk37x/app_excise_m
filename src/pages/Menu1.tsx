import { AspectRatio, Box, Button, Card, Flex, Paper, Stack } from '@mantine/core';
import React from 'react';
import AddCarModal from '../components/modal/AddCarModal'
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';
type Props = {

}

const Menu1 = (props:Props) => {
    const mdAddCar = useDisclosure();
    const navigate = useNavigate();
    
    const openModalAddCar = () => {
        mdAddCar[1].open();
    }
    
    return (
        <Box w='100%'>
            <Stack align='center'>
                <Box mt='md'>
                    <Paper bg='gray' shadow='md' p='xl'>
                        <Flex align='center' justify='center' gap='12px' direction='column'>
                            <Box miw='500px'>
                                <AspectRatio ratio={16 / 9}>
                                    <img
                                        src="./images/mercedes-benz-300sl-1955.jpg"
                                        alt="Panda"
                                    />
                                </AspectRatio>
                            </Box>
                            <Box w='100%'>
                            <Flex direction='row' align='center' justify='space-between'>
                                <Button variant="filled" color="blue" onClick={() => navigate("/b")}>สืบค้น</Button>
                                <Button variant="filled" color="blue" onClick={openModalAddCar}>เพิ่มข้อมูล</Button>
                                {/* <Button variant="filled" color="blue">คำนวณภาษี</Button> */}
                            </Flex>

                            </Box>
                        </Flex>
                    </Paper>
                </Box>
            </Stack>

            <AddCarModal opened={mdAddCar[0]} close={mdAddCar[1].close} />
        </Box>
    )
};

export default Menu1