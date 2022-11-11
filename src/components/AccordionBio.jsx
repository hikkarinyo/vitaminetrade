import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/material/Box";
import {Link, MenuItem, TextField, Typography} from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {useState} from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloseIcon from "@mui/icons-material/Close";

const Accordion = styled((props) => (
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


const MyAccordionBio = () => {
    const [expanded, setExpanded] = useState('panel');
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [dosage, setDosage] = useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
                              sx={{
                                      display: "flex",
                                      flexDirection: 'reverse-row',
                                      justifyContent: 'space-between',}}>
                <img alt={"pill"}
                     style={{width: '32px', height: '32px', borderRadius: '50px', margin: 'auto 20px'}}
                     src={"/images/image 52.png"}/>
                <Typography sx={{fontWeight: 'bold', m: 'auto 0',}}>Омега-3</Typography>
                <IconButton sx={{ml: 45}}>
                    <DeleteOutlineIcon sx={{color: '#A61911', }}/>
                </IconButton>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row',
                    justifyContent: 'center',
                    '& .MuiTextField-root': {
                        m:1,
                        fontSize: '9px'
                    },
                }}
                >

                    <TextField size={"small"} label="Как принимать?"
                               select
                               defaultValue={"Ежедневно"}>
                        <MenuItem value={"Ежедневно"}>Ежедневно</MenuItem>
                    </TextField>

                    <TextField
                        value={day ? day : 1}
                        onChange={(e) => setDay(e.target.value)}
                        size={"small"}
                        sx={{width: '100px'}}
                        label="Сколько раз в день?" select>
                        <MenuItem value={"1"}>1</MenuItem>
                    </TextField>
                    <TextField value={time ? time : "11:00"}
                               onChange={(e) => setTime(e.target.value)} type="time"
                               size={"small"} label="Время"/>
                    <TextField value={dosage ? dosage : 1}
                               onChange={(e) => setDosage(e.target.value)} name="dosage"
                               size={"small"} label="Дозировка"
                               select>
                        <MenuItem value={"1"}>1 таблетка</MenuItem>
                        <MenuItem value={"2"}>2 таблетки</MenuItem>
                    </TextField>
                    <IconButton>
                        <CloseIcon sx={{color: '#A61911'}}/>
                    </IconButton>
                </Box>

            </AccordionDetails>
        </Accordion>
    );

}
export default MyAccordionBio;
