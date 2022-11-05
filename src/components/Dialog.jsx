import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Button, MenuItem, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
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
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [dosage, setDosage] = useState("");

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
                    {(day && time && dosage) &&
                        <Typography sx={{mt: 2, mr: 2}}>{day} приём: {time} {dosage} шт.</Typography>
                    }
                    <Typography sx={{m: 'auto', ml: '5px', fontWeight: 'bold'}}>Омега-3</Typography>
                    <img alt={"pill"}
                         style={{width: '32px', height: '32px', borderRadius: '50px', margin: '15px 20px'}}
                         src={"/images/response.jpeg"}/>
                </Box>
                <Box component="form" sx={{
                    '& .MuiTextField-root': {mr: 2, ml: 2, mt: 3, mb: 1},
                }}>
                    <TextField sx={{width: '200px', height: '60px', borderRadius: '8px'}} label="Как принимать?"
                               select
                               defaultValue={"Ежедневно"}>
                        <MenuItem value={"Ежедневно"}>Ежедневно</MenuItem>
                    </TextField>

                    <TextField
                        value={day ? day : 1}
                        onChange={(e) => setDay(e.target.value)}
                        sx={{width: '200px', height: '60px', borderRadius: '8px'}}
                        label="Сколько раз в день?" select>
                        <MenuItem value={"1"}>1</MenuItem>
                    </TextField>
                    <TextField value={time ? time : "11:00"}
                               onChange={(e) => setTime(e.target.value)} type="time"
                               sx={{width: '105px', height: '60px', borderRadius: '8px'}} label="Время"/>
                    <TextField value={dosage ? dosage : 1}
                               onChange={(e) => setDosage(e.target.value)} name="dosage"
                               sx={{width: '200px', height: '60px', borderRadius: '8px'}} label="Дозировка"
                               select>
                        <MenuItem value={"1"}>1 таблетка</MenuItem>
                        <MenuItem value={"2"}>2 таблетки</MenuItem>
                    </TextField>
                    <IconButton onClick={handleClose} sx={{mt: 4}}>
                        <CloseIcon/>
                    </IconButton>
                    <MyButton onClick={handleClose} sx={{float: 'right', mt: 1, mr: 10, mb: 2}}>Добавить в курс</MyButton>
                </Box>
            </Box>
        </Modal>
    );
}
export default Dialog;