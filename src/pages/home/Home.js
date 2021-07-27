import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Update';

import { addGood, deleteGood, getAllGoods, updateGood } from '../../store/actions/goodAction';
import ConfirmButton from './Confirm';
import { GoodDialog } from './Dialog';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        minWidth: 650,
        marginTop: '150px'
    },
    actions: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))


function Home(props) {

    const [addGoodDialogOpen, setAddGoodDialogOpen] = useState(false);
    const [updateGoodDialogOpen, setUpdateGoodDialogOpen] = useState(-1);


    useEffect(() => {
        props.getAllGoods();
    }, []);

    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div">
                    <Box component="div" m={1} className={classes.tableContainer}>
                        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={() => setAddGoodDialogOpen(true)}>添加</Button>
                        <GoodDialog
                            open={addGoodDialogOpen}
                            dialogTitle="添加商品"
                            onClose={() => setAddGoodDialogOpen(false)}
                            valueChange={(state) => {
                                props.addGood(state)
                            }} />
                    </Box>
                    <TableContainer component={Paper} >
                        <Table aria-label="table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>商品</TableCell>
                                    <TableCell>价格</TableCell>
                                    <TableCell>数量</TableCell>
                                    <TableCell>总价</TableCell>
                                    <TableCell>操作</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.goods.map((row) => {
                                    return (<TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell>￥{row.price}</TableCell>
                                        <TableCell>{row.num}</TableCell>
                                        <TableCell>￥{row.total}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" startIcon={<UpdateIcon />} onClick={() => setUpdateGoodDialogOpen(row.id)}>
                                                修改
                                            </Button>
                                            <ConfirmButton
                                                confirmTitle="删除"
                                                confirmDescription="一旦删除，将不可恢复"
                                                confirmCancelText="取消"
                                                confirmOkText="确定"
                                                confirmChange={(confirm) => {
                                                    if (confirm === true) {
                                                        props.deleteGood(row.id)
                                                    }
                                                }}
                                            >
                                                删除
                                            </ConfirmButton>

                                        </TableCell>
                                        <GoodDialog
                                            open={updateGoodDialogOpen === row.id}
                                            dialogTitle="修改商品"
                                            value={{
                                                ...row
                                            }}
                                            onClose={() => setUpdateGoodDialogOpen(-1)}
                                            valueChange={(state) => {
                                                console.log(state);
                                                props.updateGood({
                                                    ...state,
                                                    id: row.id
                                                })
                                            }} />
                                    </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Typography>
            </Container>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        goods: state.good ? state.good.data : [],
    };
};

const mapDispatchToProps = {
    getAllGoods,
    addGood,
    deleteGood,
    updateGood,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));