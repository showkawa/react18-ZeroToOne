import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CircularProgress, LinearProgress } from "@mui/material";
import { setEmail } from "../../store/MemberSlice";
import { setPrice } from "../../store/HanbaoSlice";
import { useGetHanbaoListQuery } from "../../store/HanbaoApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import classes from './Home.module.css';


function createData(
    id,
    username,
    email,
    confirmed
) {
    return { id, username, email, confirmed };
}

export default function Home() {
    // // useSelector用来加载state中的数据
    // const rct = useSelector(state => state);
    // const member = rct.member;
    // const hanbao = rct.hanbao;

    // const rows = [
    //     createData(member.id, member.username, member.email, member.confirmed),

    // ];

    // const dispatch = useDispatch();

    // const changeEmail = () => {
    //     dispatch(setEmail('111222333@qq.com'))
    // }
    const { data, isSuccess, isLoading } = useGetHanbaoListQuery();


    return (
        <>
            {isLoading && <CircularProgress />}
            {isSuccess && <TableContainer component={Paper}>
                <Table sx={{ minWidth: 30 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Desc</TableCell>
                            <TableCell align="center">Image</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell align="center">{row.attributes.title}</TableCell>
                                <TableCell align="center">{row.attributes.price}</TableCell>
                                <TableCell align="center">{row.attributes.desc.slice(0, 10)}</TableCell>
                                <TableCell align="center">{row.attributes.img.slice(-5)}</TableCell>
                                <TableCell align="center" className={classes.Icon}>
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>}
            {/* <Button variant="contained" onClick={changeEmail}>Update</Button> */}

            {/* <Button variant="outlined" onClick={() => dispatch(setPrice(35))}>Update Price</Button> */}
        </>
    );
}
