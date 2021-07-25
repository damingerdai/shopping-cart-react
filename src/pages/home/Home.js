import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

import { getAllGoods } from '../../store/actions/goodAction';

const useStyles = makeStyles({
    tableContainer: {
        minWidth: 650,
        marginTop: '150px'
    },
});


function Home(props) {

    useEffect(() => {
        props.getAllGoods();
    }, [])

    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography component="div">
                    <TableContainer component={Paper} className={classes.tableContainer}>
                        <Table aria-label="table" >
                            <TableHead>
                                <TableRow>
                                    <TableCell>商品</TableCell>
                                    <TableCell>价格</TableCell>
                                    <TableCell>数量</TableCell>
                                    <TableCell>总价</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.goods.map((row, index) => {
                                    return (<TableRow key={index}>
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
    getAllGoods
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));