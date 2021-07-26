import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { AddGoodDialog } from './Dialog';

import { addGood, getAllGoods } from '../../store/actions/goodAction';

const useStyles = makeStyles({
    tableContainer: {
        minWidth: 650,
        marginTop: '150px'
    }
});


function Home(props) {

    const [open, setOpen] = useState(false);

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
                        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>添加</Button>
                        <AddGoodDialog 
                            open={open} 
                            onClose={() => setOpen(false)} 
                            valueChange={(state) => {
                                 props.addGood(state)
                        }}/>
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.goods.map((row) => {
                                    return (<TableRow key={row.id}>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell >￥{row.price}</TableCell>
                                        <TableCell >{row.num}</TableCell>
                                        <TableCell >￥{row.total}</TableCell>
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
    addGood
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));