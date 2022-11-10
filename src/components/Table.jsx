import * as React from 'react';
import {Button, Container, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import SortIcon from '@mui/icons-material/Sort';
import IconButton from "@mui/material/IconButton";
import {useState} from "react";
import Dialog from "./Dialog";

const MyTable = styled(Box)({
    display: 'table',
    width: '100%',
    cursor: 'pointer'
});
const MyHeaderRow = styled(Box)({
    display: 'table-row',
    width: '100%',
    background: '#FFFFFF',
    color: 'rgba(63, 61, 86, 0.7)',
    " & > *": {
        padding: '5px 5px',
        borderBottom: '2px solid #E0E0E0',
    },
    ":first-of-type": {
        paddingLeft: '20px',
        borderRadius: '10px 0 0 0',
    },
    ":last-child": {
        borderRadius: '0 10px 0 0'
    }
});
const MyCell = styled(Box)({
    display: 'table-cell',
    maxWidth: '350px',
    minWidth: '130px',
    color: "#000000",

});
const MyButton = styled(Button)({
    width: "106px",
    height: "36px",
    backgroundColor: '#ffffff',
    color: "#2662C9",
    borderRadius: "100px",
    border: '2px solid #2662C9',
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "#2662C9",
        color: '#ffffff'
    },
    "&:active": {
        backgroundColor: "#2662C9",
        color: '#ffffff'
    },
})
const MyRow = styled(Box)({
    display: 'table-row',
    width: '100%',
    background: '#FFFFFF',
    color: 'rgba(63, 61, 86, 0.7)',
    " & > *": {
        background: '#FFFFFF',
        padding: '10px 5px',
        borderBottom: '1px solid #E0E0E0',
    },
    ":first-of-type": {
        paddingLeft: '20px',
    },
    ":last-child": {
        paddingRight: '20px',
    },
});

const Table = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            {open && <Dialog open={open} handleClose={handleClose}/>}
            <div>
                <MyTable>
                    <MyHeaderRow>
                        <MyCell sx={{padding: "0"}}>
                            <Typography sx={{margin: 'auto 2px', display: "inline-block"}}>Биодобавка</Typography>
                            <IconButton sx={{display: "inline-block"}}>
                                <SortIcon/>
                            </IconButton>
                        </MyCell>
                        <MyCell sx={{padding: 0}}>
                            <Typography>Описание</Typography>
                        </MyCell>
                        <MyCell sx={{padding: 0}}>
                            <Typography sx={{margin: 'auto 2px', display: "inline-block"}}> Цена за шт., ₽</Typography>
                            <IconButton sx={{display: "inline-block"}}>
                                <SortIcon/>
                            </IconButton>
                        </MyCell>
                        <MyCell/>
                    </MyHeaderRow>
                    <MyRow>
                        <MyCell>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'row-reverse',
                                justifyContent: 'center',
                            }}>
                                <Typography sx={{m: 'auto', ml: '25px'}}>Омега-3</Typography>
                                <img sx={{m: 'auto 10px'}} alt={"pill"}
                                     style={{width: '56px', height: '56px', borderRadius: '50px'}}
                                     src={"/images/response.jpeg"}/>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <Typography sx={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.64)',}}>Гиалуроновая и
                                альфа-липоевая кислоты, усиленные дозировки по железу и
                                витамину
                            </Typography>
                        </MyCell>
                        <MyCell>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'flex-end',
                                justifyContent: 'center',
                            }}>
                                <Typography sx={{fontWeight: 'bold', m: 'auto'}}>196 ₽</Typography>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <MyButton onClick={handleOpen}>Добавить</MyButton>
                        </MyCell>
                    </MyRow>
                    <MyRow>
                        <MyCell>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'row-reverse',
                                justifyContent: 'center',
                            }}>
                                <Typography sx={{m: 'auto', ml: '25px'}}>Омега-3</Typography>
                                <img sx={{m: 'auto 10px'}} alt={"pill"}
                                     style={{width: '56px', height: '56px', borderRadius: '50px'}}
                                     src={"/images/response.jpeg"}/>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <Typography sx={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.64)',}}>Гиалуроновая и
                                альфа-липоевая кислоты, усиленные дозировки по железу и
                                витамину
                            </Typography>
                        </MyCell>
                        <MyCell>
                            <Box sx={{
                                display: "flex",
                                flexDirection: 'flex-end',
                                justifyContent: 'center',
                            }}>
                                <Typography sx={{fontWeight: 'bold', m: 'auto'}}>196 ₽</Typography>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <MyButton>Добавить</MyButton>
                        </MyCell>
                    </MyRow>
                </MyTable>
            </div>
        </Container>
    )
}

export default Table;
