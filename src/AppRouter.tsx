import React from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from './pages/Home';
import { Box, Flex } from '@mantine/core';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2';
import Menu3 from './pages/Menu3';

type Props = {

}

const AppRouter = (props:Props) => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/a" element={<Menu1 />} />
                <Route path="/b" element={<Menu2 />} />
                <Route path="/c" element={<Menu3 />} />
            </Route>
            

        </Routes>
    )
};

export default AppRouter