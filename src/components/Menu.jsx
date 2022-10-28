import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {Button, Collapse} from "@mui/material";


const drawerWidth = 280;

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Menu = ({open, handleDrawerClose}) => {
    const theme = useTheme();
    const [catalog, setCatalog] = React.useState(false);
    const [doc, setDoc] = React.useState(false);

    const handleClickCatalog = () => {
        setCatalog(!catalog);
    };
    const handleClickDoc = () => {
        setDoc(!doc);
    };
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 minHeight="100px"
            >
                <Box sx={{pl: '40px', pr: '30px'}}>
                    <img src={"../images/logo.png"} alt={"logo"} width={"132px"}/>
                </Box>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <MenuIcon sx={{color: '#000000'}}/> : <MenuIcon sx={{color: '#000000'}} />}
                    </IconButton>
                </DrawerHeader>
            </Box>
            <Divider/>
            <List>
                <ListItemButton sx={{
                    "&.Mui-selected": {
                        backgroundColor: "#2C59A5"
                    },
                    "&.Mui-focusVisible": {
                        backgroundColor: "#2C59A5"
                    },
                    ":hover": {
                        backgroundColor: "#2C59A5",
                        color: "#ffffff"
                    }
                }} onClick={handleClickCatalog}>
                    <ListItemText sx={{pl: 4}} primaryTypographyProps={{fontWeight: 'bold'}} primary="Каталог"/>
                    {catalog ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={catalog} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Anti-age"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Антистресс"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Антиоксиданты"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Женское здоровье"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Здоровый сон"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Крепкий иммунитет"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Мужское здоровье"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Омега, жирные кислоты"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Память и внимание"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Похудение и стройность"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Спокойствие и фокус"/>
                        </ListItemButton>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="Суставы и связки"/>
                        </ListItemButton>
                    </List>
                </Collapse>
                <Divider/>
                <ListItemButton sx={{
                    pl: 6,
                    "&.Mui-selected": {
                        backgroundColor: "#2C59A5"
                    },
                    "&.Mui-focusVisible": {
                        backgroundColor: "#2C59A5"
                    },
                    ":hover": {
                        backgroundColor: "#2C59A5",
                        color: "#ffffff"
                    }
                }}>
                    <ListItemText primaryTypographyProps={{fontWeight: 'bold'}} primary="Нутрициологи"/>
                </ListItemButton>
                <Divider/>

                <ListItemButton sx={{
                    "&.Mui-selected": {
                        backgroundColor: "#2C59A5"
                    },
                    "&.Mui-focusVisible": {
                        backgroundColor: "#2C59A5"
                    },
                    ":hover": {
                        backgroundColor: "#2C59A5",
                        color: "#ffffff"
                    }
                }} onClick={handleClickDoc}>
                    <ListItemText sx={{pl: 4}} primaryTypographyProps={{fontWeight: 'bold'}}  primary="Документы"/>
                    {doc ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={doc} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 7}}>
                            <ListItemText primary="..."/>
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Button sx={{position: 'absolute',
                bottom: 0,}}>
                Войти
            </Button>
        </Drawer>

    );

}
export default Menu;
