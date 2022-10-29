import * as React from 'react';
import {Button, Container, Stack, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

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

    const MyCell = styled(Box)({
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
                        <MyCell>
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
                </MyTable>
            </div>
        </Container>
    )
}

export default Table;
