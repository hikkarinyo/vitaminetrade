import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button, MenuItem, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    borderRadius: 2.5,
    outline: 'none',

};

const MyButton = styled(Button)({
    width: "150px",
    height: "36px",
    backgroundColor: '#ffffff',
    color: "#2662C9",
    borderRadius: "100px",
    border: '2px solid #2662C9',
    textTransform: "none",
    "&:hover": {
        backgroundColor: "#2662C9",
        color: '#ffffff'
    },
    "&:active": {
        backgroundColor: "#2662C9",
        color: '#ffffff'
    },
})

const Dialog = ({open, handleClose}) => {
    const [data, setData] = useState({
        day: '',
        time: '',
        dosage: ''
    });

    const handleSubmit = (data) => {
        setData(data);
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <Box sx={{
                    display: "flex",
                    flexDirection: 'row-reverse',
                    justifyContent: 'center',
                    borderBottom: '2px solid #E0E0E0',
                }}>
                    <Typography sx={{m: 'auto', ml: '5px', fontWeight: 'bold'}}>Омега-3</Typography>
                    <img alt={"pill"}
                         style={{width: '32px', height: '32px', borderRadius: '50px', margin: '15px 20px'}}
                         src={"/images/response.jpeg"}/>
                </Box>
                <Box component="form" onSubmit={handleSubmit} sx={{
                    '& .MuiTextField-root': {mr: 2, ml: 2, mt: 3, mb: 1},
                }}>
                    <TextField  sx={{width: '200px', height: '60px', borderRadius: '8px'}} label="Как принимать?"
                               select
                               value={"Ежедневно"}>
                        <MenuItem value={"Ежедневно"}>Ежедневно</MenuItem>
                    </TextField>

                    <TextField name="day" sx={{width: '200px', height: '60px', borderRadius: '8px'}}
                               label="Сколько раз в день?" select value={"1"}>
                        <MenuItem value={"1"}>1</MenuItem>
                        <MenuItem value={"2"}>2</MenuItem>
                        <MenuItem value={"3 "}>3</MenuItem>
                    </TextField>
                    <TextField name="time" type="time" defaultValue="11:00"
                               sx={{width: '105px', height: '60px', borderRadius: '8px'}} label="Время"/>
                    <TextField name="dosage" sx={{width: '200px', height: '60px', borderRadius: '8px'}} label="Дозировка"
                               select
                               value={"1"}>
                        <MenuItem value={"1"}>1 таблетка</MenuItem>
                        <MenuItem value={"2"}>2 таблетки</MenuItem>
                    </TextField>
                    <IconButton onClick={handleClose} sx={{mt: 4}}>
                        <CloseIcon/>
                    </IconButton>
                    <MyButton sx={{float: 'right', mt: 1, mr: 10, mb: 2}}>Добавить в курс</MyButton>
                </Box>
            </Box>
        </Modal>
    );
}
export default Dialog;