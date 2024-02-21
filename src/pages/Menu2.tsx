import { Box, Button, FileInput, Flex, Group, Input, Table, Tabs, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { setDefaultResultOrder } from 'dns';
import React from 'react';
import CalculateTaxModal from '../components/modal/CalculateTaxModal';
import { useDisclosure } from '@mantine/hooks';

type Props = {

}

const Menu2 = (props:Props) => {
    const [showGrid, setShowGrid] = React.useState<boolean>(false);
    const [tabValue, setTabValue] = React.useState<string>("");
    const mdCalTax = useDisclosure(false);
    
    React.useEffect(() => {
        setTabValue("searchText")
    }, [])
    
    const form = useForm({
        initialValues: {
            brand: '',
            fileUpload: ''
        }
    });

    const onSubmit = form.onSubmit((value) => {
        console.log(value);
        if(tabValue === "searchText") {
            if(!value.brand) {
                form.setFieldError("brand", "กรุณากรอกข้อมูล")
                return;
            }
        } else if(tabValue === "searchPic"){
            if(!value.fileUpload) {
                form.setFieldError("fileUpload", "กรุณาอัปโหลดรูปภาพ")
                return;
            }
        }
        

        setShowGrid(true);
    })

    const tabChange = (e:any) => {
        setTabValue(e);
        form.setValues({brand: '', fileUpload: ''});
        setShowGrid(false);
    }
    
    return (
        <Box w='100%'>
            <form onSubmit={onSubmit}>
                <Box mt='md'>
                    <Tabs defaultValue="searchText" onChange={tabChange}>
                        <Tabs.List grow>
                            <Tabs.Tab value="searchText">ค้นหาด้วย text</Tabs.Tab>
                            <Tabs.Tab value="searchPic">ค้นหาด้วยภาพถ่าย</Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="searchText" pt="xs">
                            <Box maw='350' mx='auto'>
                                <TextInput
                                    withAsterisk
                                    label="ยี่ห้อ"
                                    placeholder="Honda"
                                    {...form.getInputProps('brand')}
                                />
                                
                                <Group justify="flex-end" mt="md">
                                    <Button type="submit">ค้นหา</Button>
                                </Group>
                                
                            </Box>
                        </Tabs.Panel>

                        <Tabs.Panel value="searchPic" pt="xs">
                            <Box maw='350' mx='auto'>
                                <FileInput
                                    label="รูปภาพ"
                                    withAsterisk
                                    description="Input description"
                                    placeholder="Input placeholder"
                                    {...form.getInputProps('fileUpload')}
                                />
                                <Group justify="flex-end" mt="md">
                                    <Button type="submit">ค้นหา</Button>
                                </Group>
                                
                            </Box>
                       
                        </Tabs.Panel>
                        
                    </Tabs>

                </Box>
            </form>

            {
                showGrid &&
                    <Box w='85%' mt='xl' mx='auto'>
                        <Table striped withColumnBorders>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Td>ลำดับที่</Table.Td>
                                    <Table.Td>ยี่ห้อ</Table.Td>
                                    <Table.Td>แบบรุ่น</Table.Td>
                                    <Table.Td>ปีที่ผลิต</Table.Td>
                                    <Table.Td>CIP</Table.Td>
                                    <Table.Td>อัตราราคา</Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                            </Table.Thead>
                            
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Td>1</Table.Td>
                                    <Table.Td>Abarth</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td>
                                        <Flex align='center' justify='center'>
                                            <Button onClick={mdCalTax[1].open}>คำนวณภาษี</Button>
                                        </Flex>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td>2</Table.Td>
                                    <Table.Td>Audi</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td>
                                        <Flex align='center' justify='center'>
                                            <Button onClick={mdCalTax[1].open}>คำนวณภาษี</Button>
                                        </Flex>
                                    </Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td>3</Table.Td>
                                    <Table.Td>BMW</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td>
                                        <Flex align='center' justify='center'>
                                            <Button onClick={mdCalTax[1].open}>คำนวณภาษี</Button>
                                        </Flex>
                                    </Table.Td>
                                </Table.Tr>

                                
                            </Table.Tbody>
                        </Table>
                    </Box>
            }
            <CalculateTaxModal opened={mdCalTax[0]} close={mdCalTax[1].close}  />
        </Box>
    )
};

export default Menu2