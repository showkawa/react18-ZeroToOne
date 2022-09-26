import { useSelector } from "react-redux";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    id,
    username,
    email,
    confirmed
) {
    return { id, username, email, confirmed };
}

export default function Home() {
    // useSelector用来加载state中的数据
    const member = useSelector(state => state.member);

    const rows = [
        createData(member.id, member.username, member.email, member.confirmed),

    ];
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 30 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">UserName</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Confirmed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.confirmed ? 'true' : 'false'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
