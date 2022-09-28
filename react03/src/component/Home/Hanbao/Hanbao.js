import TableCell from '@mui/material/TableCell';
import { TextField } from "@mui/material";
// import { useGetHanbaoByIdQuery } from '../../../store/HanbaoApi';
import  {useState } from 'react';
import TableRow from '@mui/material/TableRow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from './Hanbao.module.css';
import { useDeleteHaobaoMutation } from '../../../store/HanbaoApi';
const Hanbao = (props) => {
    const { row } = props;
    const [isEdit, setIsEdit] = useState(false);
    // const {data:hanbao, isSuccess,isLoading} = useGetHanbaoByIdQuery(row.id)    
    const [delHanbao, result]= useDeleteHaobaoMutation() // 第一个是操作的触发器，第二个是结果集

    const editHanbao = (row) => {
        setIsEdit(true);
        
    }
    const deleteHanbao = (id) => {
        console.log(id);
        delHanbao(id);
        console.log(result)
    }

    const saveEdit = (row) => {
        setIsEdit(false);
    }

    const cancelEdit = (row) => {
        setIsEdit(false);
    }
    return <>
        <TableRow key={row.id}>
            <TableCell>{row.id}</TableCell>
            {isEdit ?
                <>
                    <TableCell align="center">
                        <TextField
                            id="outlined-size-small"
                            defaultValue={row.attributes.title}
                            size="small"
                        /></TableCell>
                    <TableCell align="center">
                        <TextField
                            id="outlined-size-small"
                            defaultValue={row.attributes.price}
                            size="small"
                        /></TableCell>
                    <TableCell align="center">
                        <TextField
                            id="outlined-size-small"
                            defaultValue={row.attributes.desc}
                            size="small"
                        /></TableCell>
                    <TableCell align="center">
                        <TextField
                            id="outlined-size-small"
                            defaultValue={row.attributes.img}
                            size="small"
                        /></TableCell>
                </>
                :
                <>
                    <TableCell align="center">{row.attributes.title}</TableCell>
                    <TableCell align="center">{row.attributes.price}</TableCell>
                    <TableCell align="center">{row.attributes.desc.slice(0, 10)}</TableCell>
                    <TableCell align="center">{row.attributes.img.slice(-5)}</TableCell>
                </>
            }
            <TableCell align="center" className={classes.Icon}>
                {isEdit ?
                    <>
                        <FontAwesomeIcon icon={faCheck} onClick={() => saveEdit(row)} />
                        <FontAwesomeIcon icon={faXmark} onClick={() => cancelEdit(row)} />
                    </>
                    :
                    <>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editHanbao(row)} />
                        <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteHanbao(row.id)} />
                    </>}
            </TableCell>
        </TableRow>


    </>;
}

export default Hanbao;