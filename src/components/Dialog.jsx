import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {MenuItem, TextField} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    borderRadius: 2.5,
    outline: 'none',

};

const Dialog = ({open, handleClose}) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: 'row-reverse',
                        justifyContent: 'center',
                        borderBottom: '2px solid #E0E0E0'
                    }}>
                        <Typography sx={{m: 'auto', ml: '25px'}}>Омега-3</Typography>
                        <img sx={{m: 'auto 10px'}} alt={"pill"}
                             style={{width: '56px', height: '56px', borderRadius: '50px'}}
                             src={"/images/response.jpeg"}/>
                    </Box>

                        <TextField label="Как принимать?" select value={"Ежедневно"}>
                            <MenuItem value={"Ежедневно"} >Ежедневно</MenuItem>
                        </TextField>

                    <TextField label="Сколько раз в день?" select value={"1"}>
                        <MenuItem value={"1"} >1</MenuItem>
                        <MenuItem value={"2"} >2</MenuItem>
                        <MenuItem value={"3 "} >3</MenuItem>
                    </TextField>

                    <TextField label="Время"/>

                    <TextField label="Дозировка" select value={"1"}>
                        <MenuItem value={"1"} >1 таблетка</MenuItem>
                        <MenuItem value={"2"} >2 таблетки</MenuItem>
                    </TextField>

                </Box>
            </Modal>
        </div>
    );
}
export default Dialog;