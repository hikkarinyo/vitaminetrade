import * as React from 'react';
import {Avatar, Button, Container, Stack, TableCell, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";
import {Piano} from "@mui/icons-material";

const Table = () => {


    const MyTable = styled(Box)({
        display: 'table',
        width: '100%',
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

    const MyCell = styled(TableCell)({
        display: 'table-cell',
        maxWidth: '350px',
        minWidth: '150px',
        color: "#000000",

    });


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
        }
    });

    return (
        <Container>
            <div>
                <MyTable>
                    <MyHeaderRow>
                        <MyCell colSpan={2}>
                            <Typography>Биодобавка</Typography>
                        </MyCell>
                        <MyCell>
                            <Typography>Описание</Typography>
                        </MyCell>
                        <MyCell>
                            <Typography> Цена за шт., ₽</Typography>
                        </MyCell>
                        <MyCell/>
                    </MyHeaderRow>
                    <MyRow>
                        <MyCell>

                            <img alt={"picture"} style={{
                                width: '56px',
                                height: '56px',
                                borderRadius: '50px',
                            }} src={"/images/response.jpeg"}/>
                        </MyCell>
                        <MyCell>
                            <Box display="flex"
                                 justifyContent="center"
                                 alignItems="center"
                                 sx={{mt: 1}}
                            >
                                <Typography>Омега-3</Typography>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <Box display="flex"
                                 justifyContent="flex-start"
                                 alignItems="center"
                                 sx={{mt: 1}}
                            >
                                <Typography sx={{fontSize: '14px', color: 'rgba(0, 0, 0, 0.64)',}}>Гиалуроновая и
                                    альфа-липоевая кислоты, усиленные дозировки по железу и
                                    витамину</Typography>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <Box display="flex"
                                 justifyContent="center"
                                 alignItems="center"
                                 sx={{mt: 1}}
                            >
                                <Typography sx={{fontWeight: 'bold'}}>196 ₽</Typography>
                            </Box>
                        </MyCell>
                        <MyCell>
                            <Box display="flex"
                                 justifyContent="center"
                                 alignItems="center"
                                 sx={{mt: 1}}
                            >
                                <Button>Добавить</Button>
                            </Box>
                        </MyCell>

                    </MyRow>
                </MyTable>
            </div>
        </Container>
    )
}

export default Table;
