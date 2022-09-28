import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {CircularProgress } from "@mui/material";
// import { setEmail } from "../../store/MemberSlice";
// import { setPrice } from "../../store/HanbaoSlice";
import {useGetHanbaoListQuery } from "../../store/HanbaoApi";

import Hanbao from "./Hanbao/Hanbao";


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
    const { data, isSuccess, isLoading } = useGetHanbaoListQuery(null, {
        selectFromResult: result => { // 指定useQuery的返回结果，可以对返回结果二次加工
            return result;
        },
        pollingInterval:0,//设置轮训的时间 单位毫秒
        skip:false, //是否跳过当前请求， 默认false
        refetchOnMountOrArgChange:false, //设置是否每次的都加载数据， false使用缓存，true每次加载数据，数字缓存的时间
        refetchOnFocus: true, // 是否在重新获取焦点时重载数据
        refetchOnReconnect: true //是否在重新连接后重载数据
    });

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
                        {data.map((row) => (<Hanbao key={row.id} row={row} />))}
                    </TableBody>
                </Table>
            </TableContainer>}
        </>
    );
}
