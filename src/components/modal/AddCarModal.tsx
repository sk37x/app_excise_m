import { Box, Button, Flex, Group, Modal, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react';

type Props = {
    opened: any,
    close: () => any,
}

const AddCarModal = (props:Props) => {
    const form = useForm({
        initialValues: {
            brand: ''
        }
    });

    const onSubmit = form.onSubmit((value) => {
        console.log(value);
    })

    return (
        <Modal opened={props.opened} onClose={props.close} withCloseButton={false} size={'md'}>
            <form onSubmit={onSubmit}>
                <Box w='100%'>
                    <Flex align='center' justify='center' direction='column' gap='xl'>
                        <Title order={1}>เพิ่มข้อมูล</Title>
                        <Box maw='350' mx='auto'>
                            <TextInput
                                withAsterisk
                                label="ยี่ห้อ"
                                {...form.getInputProps('brand')}
                            />
                            
                            <Group justify="flex-end" mt="md">
                                <Button type="submit">เพิ่ม</Button>
                            </Group>
                            
                        </Box>
                    </Flex>
                </Box>
            </form>
        </Modal>
    )
};

export default AddCarModal