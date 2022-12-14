import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
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
import LoginIcon from '@mui/icons-material/Login';
import {ReactComponent as Antistress} from "../components/ui/icons/antistress.svg";
import {ReactComponent as Clock} from "../components/ui/icons/clock.svg";
import {ReactComponent as Antioxidants} from "../components/ui/icons/antioxidants.svg";
import {ReactComponent as Body} from "../components/ui/icons/body.svg";
import {ReactComponent as Bones} from "../components/ui/icons/bones.svg";
import {ReactComponent as Women} from "../components/ui/icons/women.svg";
import {ReactComponent as Men} from "../components/ui/icons/men.svg";
import {ReactComponent as HealthySleep} from "../components/ui/icons/healthySleep.svg";
import {ReactComponent as StrongImmunity} from "../components/ui/icons/strongImmunity.svg";
import {ReactComponent as Pill} from "../components/ui/icons/pill.svg";
import {ReactComponent as Brain} from "../components/ui/icons/brain.svg";
import {ReactComponent as Relax} from "../components/ui/icons/relax.svg";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getSupplementsList} from "../store/slices/SupplementsListSlice";
import {useLocation, useNavigate} from "react-router-dom"

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

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(4, 1, 0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

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


const MyListItemButton = styled(ListItemButton)({
    "&.Mui-selected": {
        backgroundColor: "#2C59A5",
        color: "#fff"
    },
    "&.Mui-focusVisible": {
        backgroundColor: "#2C59A5"
    },
    ":hover": {
        backgroundColor: "#2C59A5",
        color: "#fff"
    },
    ":hover .icon *": {
        stroke: "#ffffff",

    },
    ":hover .iconFill *": {
        fill: "#ffffff",
    }
});

const Menu = () => {

    const theme = useTheme();
    const dispatch = useDispatch();
    const [catalog, setCatalog] = React.useState(false);
    const [doc, setDoc] = React.useState(false);
    const [open, setOpen] = React.useState(true);
    const history = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    useEffect(() => {
        dispatch(getSupplementsList());
    }, [dispatch])

    const handleClickCatalog = () => {
        setCatalog(!catalog);
        history("/")
    };
    const handleClickDoc = () => {
        setDoc(!doc);
    };

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
        >
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
            >
                <Box display="flex"
                     justifyContent="center"
                     alignItems="center"
                     minHeight="100px"
                >{!open ?
                    <DrawerHeader sx={{m: 'auto'}}>
                        <IconButton onClick={handleDrawerOpen}>
                            {theme.direction === 'ltr' ? <MenuIcon sx={{color: '#000000'}}/> :
                                <MenuIcon sx={{color: '#000000'}}/>}
                        </IconButton>
                    </DrawerHeader>
                    :
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <Box sx={{pl: '40px', pr: '30px', pt: '40px'}}>
                            <img src={"../images/logo.png"} alt={"logo"} width={"132px"}/>
                        </Box>
                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <MenuIcon sx={{color: '#000000'}}/> :
                                    <MenuIcon sx={{color: '#000000'}}/>}
                            </IconButton>
                        </DrawerHeader>
                    </Box>

                }
                </Box>
                {!open ?

                    <List>
                        <MyListItemButton onClick={() => history("/antiage")} sx={{mt: '20px'}}>
                            <Clock className={"icon"} sx={{m: 'auto'}}/>
                        </MyListItemButton>
                        <MyListItemButton onClick={() => history("/antistress")} sx={{mt: '20px'}}>
                            <Antistress className={"icon"} sx={{m: 'auto'}}/>
                        </MyListItemButton>

                        <MyListItemButton onClick={() => history("/antiage")} sx={{mt: '20px'}}>
                            <Antioxidants className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/women")} sx={{mt: '20px'}}>
                            <Women className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/healthysleep")} sx={{mt: '20px'}}>
                            <HealthySleep className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/strongimmunity")} sx={{mt: '20px'}}>
                            <StrongImmunity className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/man")} sx={{mt: '20px'}}>
                            <Men className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/omega")} sx={{mt: '20px'}}>
                            <Pill className={"icon"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/memory")} sx={{mt: '20px'}}>
                            <Brain className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/weightloss")} sx={{mt: '20px'}}>
                            <Body className={"iconFill"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/relax")} sx={{mt: '20px'}}>
                            <Relax className={"icon"} sx={{m: 'auto'}}/>
                        </MyListItemButton>


                        <MyListItemButton onClick={() => history("/joint")} x={{mt: '20px'}}>
                            <Bones className={"icon"} sx={{m: 'auto'}}/>
                        </MyListItemButton>

                    </List>

                    :
                    <List>
                        <MyListItemButton onClick={handleClickCatalog}>
                            {open &&
                                <ListItemText sx={{pl: 4}} primaryTypographyProps={{fontWeight: 'bold'}}
                                              primary="??????????????"/>}
                            {catalog ? <ExpandLess/> : <ExpandMore/>}
                        </MyListItemButton>
                        <Collapse in={catalog} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <MyListItemButton
                                    selected={location.pathname === '/antiage'}
                                    onClick={() => history("/antiage")}
                                    sx={{pl: 7}}>
                                    <ListItemText primary="Anti-age"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/antistress'} onClick={() => history("/antistress")} sx={{pl: 7}}>
                                    <ListItemText primary="????????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/antioxidants'} onClick={() => history("/antioxidants")} sx={{pl: 7}}>
                                    <ListItemText primary="??????????????????????????"/>
                                </MyListItemButton>

                                <MyListItemButton  selected={location.pathname === '/women'} onClick={() => history("/women")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????? ????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/healthysleep'} onClick={() => history("/healthysleep")} sx={{pl: 7}}>
                                    <ListItemText primary="???????????????? ??????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/strongimmunity'} onClick={() => history("/strongimmunity")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????? ??????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/man'} onClick={() => history("/man")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????? ????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/omega'} onClick={() => history("/omega")} sx={{pl: 7}}>
                                    <ListItemText primary="??????????, ???????????? ??????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/memory'} onClick={() => history("/memory")} sx={{pl: 7}}>
                                    <ListItemText primary="???????????? ?? ????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/weightloss'} onClick={() => history("/weightloss")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????????? ?? ????????????????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/relax'} onClick={() => history("/relax")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????????????? ?? ??????????"/>
                                </MyListItemButton>
                                <MyListItemButton  selected={location.pathname === '/joint'} onClick={() => history("/joint")} sx={{pl: 7}}>
                                    <ListItemText primary="?????????????? ?? ????????????"/>
                                </MyListItemButton>
                            </List>
                        </Collapse>
                        <Divider/>
                        <MyListItemButton sx={{pl: 6}}>
                            <ListItemText primaryTypographyProps={{fontWeight: 'bold'}} primary="????????????????????????"/>
                        </MyListItemButton>
                        <Divider/>
                        <MyListItemButton onClick={handleClickDoc}>
                            <ListItemText sx={{pl: 4}} primaryTypographyProps={{fontWeight: 'bold'}}
                                          primary="??????????????????"/>
                            {doc ? <ExpandLess/> : <ExpandMore/>}
                        </MyListItemButton>
                        <Collapse in={doc} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <MyListItemButton sx={{pl: 7}}>
                                    <ListItemText primary="..."/>
                                </MyListItemButton>
                            </List>
                        </Collapse>
                    </List>
                }
                <Box sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    width: '100%',
                    bottom: open && !catalog ? 0 : 'unset',
                    position: open && !catalog ? 'absolute' : 'unset'
                }}>
                    {open ?
                        <Button sx={{
                            color: '#000000',
                            textTransform: 'capitalize',
                            fontSize: '14px',
                            ml: 6,
                            mt: 1,
                            "&:hover": {
                                backgroundColor: '#2C59A5',
                                color: "#ffffff"
                            },
                            "&:active": {
                                backgroundColor: '#2C59A5',
                                color: "#ffffff"
                            },
                        }} startIcon={<LoginIcon sx={{fontSize: '24px'}}/>}>
                            ??????????
                        </Button>
                        :
                        <IconButton sx={{
                            mt: 1, ml: 1,
                            color: "#000000",
                            "&:hover": {
                                backgroundColor: '#2C59A5',
                                color: "#ffffff"
                            },
                            "&:active": {
                                backgroundColor: '#2C59A5',
                                color: "#ffffff"
                            },
                        }}>
                            <LoginIcon/>
                        </IconButton>
                    }
                </Box>
            </Box>
        </Drawer>

    );

}
export default Menu;
