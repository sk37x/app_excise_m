import { Box, Flex, Modal, Table, Title } from '@mantine/core';
import React from 'react';

type Props = {
    opened: any,
    close: () => any,
}

const CalculateTaxModal = (props:Props) => {
    return (
        <Modal opened={props.opened} onClose={props.close} withCloseButton={false} size={'xl'}>
            <Box w='100%' >
                <Flex align='center' justify='center' gap='md' direction='column'>
                    <Title order={1}>xxxxx</Title>
                    <Box w='100%'>
                        <Table withColumnBorders>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th colSpan={5} style={{textAlign:'center'}}>โครงสร้างราคาขายปลีกแนะนำ</Table.Th>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Th></Table.Th>
                                    <Table.Th>80</Table.Th>
                                    <Table.Th>50</Table.Th>
                                    <Table.Th>45</Table.Th>
                                    <Table.Th>40</Table.Th>
                                </Table.Tr>
                            </Table.Thead>

                            <Table.Tbody>

                                <Table.Tr bg='#fff4c8'>
                                    <Table.Td>1.ต้นทุนการผลิต</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td> - ราคาสินค้า (CIF) THB</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td> - อากรนำเข้า </Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr bg="#ffb241">
                                    <Table.Td>จำนวนเงินรวม</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>


                                <Table.Tr bg="#c8ffcf">
                                    <Table.Td>2.ค่าบริหารจัดการ</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td> - ภาษีสรรพสามิต</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr>
                                    <Table.Td> - ภาษีมหาดไทย </Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr bg='#18c928'>
                                    <Table.Td>จำนวนเงินรวม ค่าบริหารจัดการ</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>


                                <Table.Tr>
                                    <Table.Td>3.กำไรมาตรฐาน</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>
                                <Table.Tr bg="#aff6ff">
                                    <Table.Td>ราคาขายปลีกแนะนำ ก่อน VAT</Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                    <Table.Td></Table.Td>
                                </Table.Tr>

                            </Table.Tbody>
                        </Table>

                    </Box>
                </Flex>
            </Box>
        </Modal>
    )
};

export default CalculateTaxModal