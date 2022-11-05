import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


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
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
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


const Course = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
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
                     justifyContent="center"
                     alignItems="center"
                     minHeight="100px"
                >
                    {!open ?
                        <IconButton onClick={handleDrawerOpen}>
                            {theme.direction === 'ltr' ? <MenuIcon sx={{color: '#000000'}}/> :
                                <MenuIcon sx={{color: '#000000'}}/>}
                        </IconButton>
                        :
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <IconButton sx={{mr: '5px'}} onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ?
                                    <ArrowBackIosIcon sx={{color: '#000000', fontSize: '14px'}}/> :
                                    <ArrowBackIosIcon sx={{color: 'rgba(0, 0, 0, 0.72)', fontSize: '24px'}}/>}
                            </IconButton>
                            <Typography sx={{fontSize: '22px', fontWeight: 'medium', m: 'auto'}}>
                                Мой курс приёма
                            </Typography>
                        </Box>
                    }
                </Box>
                {open &&
                    <Box display="flex"
                         justifyContent="center"
                         alignItems="center"
                    >
                        <Typography sx={{whiteSpace: 'pre-wrap', m: 'auto 60px'}}>Выберите биодобавку, чтобы собрать свой
                            персональный
                            курс </Typography>
                    </Box>
                }
            </Box>
        </Drawer>

    );

}
export default Course;
