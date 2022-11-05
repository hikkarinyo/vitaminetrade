import * as React from 'react';
import Menu from "../components/Menu";
import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import Table from "../components/Table"
import Course from "../components/Course";







const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


const MainPanel = () => {


    return (
        <Box sx={{display: 'flex'}}>

            <Menu/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                <Table/>
            </Box>
            <Course/>
        </Box>
    );
}

export default MainPanel;