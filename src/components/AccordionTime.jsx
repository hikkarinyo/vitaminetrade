import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {MenuItem, TextField, Typography} from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {useState} from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Accordion= styled((props) => (
    <MuiAccordion disableGutters elevation={2}  {...props}/>
))(({theme}) => ({
    width: 620,
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&.MuiAccordion-root': {
        borderRadius: 10,
        marginBottom: 10
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const MyAccordionTime = () => {
    const [expanded, setExpanded] = useState('panel');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography sx={{fontWeight: 'bold', m: 'auto', ml: 0,}}>Ежедневно в 11:00</Typography>
                <Typography sx={{
                    fontSize: '12px',
                    color: 'rgba(0, 0, 0, 0.87)',
                    m: 'auto',
                    ml: 5,
                    width: '200px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>
                    5 шт: Гидрокситриптофан (5-htp), Цинк + В6, Мультиви...</Typography>
                <IconButton>
                    <DeleteOutlineIcon sx={{color: '#A61911'}}/>
                </IconButton>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                }}>
                    <TextField value={1}
                               sx={{width: '140px', borderRadius: '8px'}} label="Дозировка"
                               size={"small"}
                               select>
                        <MenuItem value={"1"}>1 таблетка</MenuItem>
                        <MenuItem value={"2"}>2 таблетки</MenuItem>
                    </TextField>
                    <Typography sx={{m: 'auto', ml: '25px'}}>Омега-3</Typography>
                    <img sx={{m: 'auto 10px'}} alt={"pill"}
                         style={{width: '32px', height: '32px', borderRadius: '50px'}}
                         src={"/images/response.jpeg"}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    pt: 2
                }}>
                    <TextField value={1}
                               sx={{width: '140px', borderRadius: '8px'}} label="Дозировка"
                               size={"small"}
                               select>
                        <MenuItem value={"1"}>1 таблетка</MenuItem>
                        <MenuItem value={"2"}>2 таблетки</MenuItem>
                    </TextField>
                    <Typography sx={{m: 'auto', ml: '25px'}}>Омега-3</Typography>
                    <img sx={{m: 'auto 10px'}} alt={"pill"}
                         style={{width: '32px', height: '32px', borderRadius: '50px'}}
                         src={"/images/response.jpeg"}/>
                </Box>
            </AccordionDetails>
        </Accordion>
    );

}
export default MyAccordionTime;
