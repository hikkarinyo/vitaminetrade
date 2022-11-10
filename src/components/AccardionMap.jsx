import * as React from 'react';
import {styled} from '@mui/material/styles';
import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {useState} from "react";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Box from "@mui/material/Box";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={2}  {...props}/>
))(({theme}) => ({
    width: 620,
    //border: `1px solid ${theme.palette.divider}`,
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


const MyAccordionMap = () => {
    const [expanded, setExpanded] = useState('panel');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary sx={{fontWeight: 'bold'}} aria-controls="panel1d-content" id="panel1d-header">
                Доставка и оплата
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{mt: 1, mb: 2}}>
                    <FormControlLabel control={<Checkbox label={"Курьером"} icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<RadioButtonCheckedIcon/>}/>} label={"Курьером"}/>
                    <FormControlLabel control={<Checkbox label={"Курьером"} icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<RadioButtonCheckedIcon/>}/>}
                                      label={"В пункт выдачи"}/>
                    <FormControlLabel control={<Checkbox label={"Курьером"} icon={<RadioButtonUncheckedIcon/>}
                                                         checkedIcon={<RadioButtonCheckedIcon/>}/>}
                                      label={"Через постамат"}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    border: '1px solid #B2B2AE'
                }}
                >

                        <TextField
                            size={"small"}
                            sx={{
                                width: '90%',
                                position: 'absolute',
                                top: 15,
                                backgroundColor: "#fff",
                                m: "auto",
                                ml: 4,
                                mr:4
                            }}/>

                    <img src={"/images/map.png"} alt={"map"}/>
                </Box>
                {/*<Accordion sx={{width: 620}}>*/}
                {/*    <AccordionSummary*/}
                {/*        expandIcon={<ArrowForwardIosSharpIcon />}*/}
                {/*        aria-controls="panel1a-content"*/}
                {/*        id="panel1a-header"*/}
                {/*    >*/}
                {/*        <Typography>Комментарий к доставке</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                {/*            malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                {/*        </Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
            </AccordionDetails>
        </Accordion>
    );

}
export default MyAccordionMap;
