import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {Link, MenuItem, TextField, Typography} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState} from "react";
import MyAccordionTime from "./AccordionTime";
import MyAccordionBio from "./AccordionBio";
import MyAccordionMap from "./AccardionMap";

const drawerWidth = 280;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    width: 650,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
});

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',

        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),

    }),
);
;


const Course = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [time, setTime] = useState(true);
    const [bio, setBio] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleTimeOpen = () => {
        setTime(true);
        setBio(false);
    };
    const handleBioOpen = () => {
        setBio(true);
        setTime(false);
    };

    return (
        <Drawer
            variant="permanent"
            open={open}
            anchor="right"
            PaperProps={{sx: {backgroundColor: '#F9F9F9'}}}
        >
            <Box>
                <Box display="flex"
                     justifyContent="flex-start"
                     alignItems="center"
                     minHeight="100px"
                >
                    {!open ?
                        <Box sx={{mt: 3, ml: 2}}>
                            <Box
                                display="flex"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <IconButton onClick={handleDrawerOpen}>
                                    {theme.direction === 'ltr' ?
                                        <ArrowBackIosIcon sx={{color: 'rgba(0, 0, 0, 0.72)', fontSize: '16px'}}/> :
                                        <ArrowBackIosIcon sx={{color: 'rgba(0, 0, 0, 0.72)', fontSize: '16px'}}/>}
                                </IconButton>
                                <Typography sx={{fontSize: '16px', fontWeight: 'medium', m: 'auto', ml: 1}}>
                                    Мой курс приёма
                                </Typography>
                                <TextField value={"4 недели"} size={"small"} select sx={{m: 'auto'}}>
                                    <MenuItem value={"4 недели"}>4 недели</MenuItem>
                                </TextField>
                                <Link sx={{
                                    fontSize: '16px',
                                    m: "auto",
                                    textDecoration: "underline dotted",
                                    cursor: 'pointer'
                                }}>Свернуть
                                    всё</Link>
                            </Box>
                            <Box
                                sx={{borderBottom: "2px solid #d1d1d1", p: 2, position: ' relative', mt: 2}}>
                                <Typography onClick={handleTimeOpen} sx={{
                                    cursor: "pointer",
                                    borderBottom: time ? "2px solid #2662C9" : "2px solid transparent",
                                    pl: 2,
                                    pr: 2,
                                    position: 'absolute',
                                    bottom: '-2px'
                                }}>ПО ВРЕМЕНИ ПРИЁМА</Typography>
                                <Typography onClick={handleBioOpen} sx={{
                                    cursor: "pointer",
                                    ml: 5,
                                    pl: 2,
                                    pr: 2,
                                    borderBottom: bio ? "2px solid #2662C9" : "2px solid transparent",
                                    position: 'absolute',
                                    bottom: '-2px',
                                    left: '200px'
                                }}>ПО БИОДОБАВКЕ</Typography>
                            </Box>
                            {time ?
                                <Box sx={{mt: 2,}}>
                                    <MyAccordionTime/>
                                    <MyAccordionTime/>
                                    <MyAccordionTime/>
                                    <MyAccordionMap/>
                                </Box>
                                :
                                <Box sx={{mt: 2,}}>
                                    <MyAccordionBio/>
                                </Box>
                            }
                        </Box>
                        :
                        <Box>
                            <Box sx={{
                                mt: 3,
                                ml: 2,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <IconButton sx={{mr: '5px'}} onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ?
                                        <ArrowBackIosIcon sx={{color: 'rgba(0, 0, 0, 0.72)', fontSize: '16px'}}/> :
                                        <ArrowBackIosIcon sx={{color: 'rgba(0, 0, 0, 0.72)', fontSize: '16px'}}/>
                                    }
                                </IconButton>
                                <Typography sx={{fontSize: '16px', fontWeight: 'medium', m: 'auto'}}>
                                    Мой курс приёма
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    ml: 2,
                                    mt: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-center',
                                }}
                            >
                                <img alt={"pill"}
                                     style={{width: '32px', height: '32px', borderRadius: '50px',}}
                                     src={"/images/response.jpeg"}/>
                                <Typography sx={{ml: 2}}>Омега-3</Typography>
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>
        </Drawer>

    );

}
export default Course;
