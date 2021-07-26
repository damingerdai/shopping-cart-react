import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@material-ui/core";

const useStyles = makeStyles({
    form: {
        marginTop: '8px',
    },
    input: {
        marginTop: '8px',
        marginBottom: '8px',
        width: '100% !important'
    },

});

export const AddGoodDialog = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({ name: '', price: 1, num: 1 });

    const closeDialog = () => {
        if (props.onClose) {
            props.onClose(false)
        }
    }

    const valid = () => {
        return state.name && state.price >= 1 && state.num >= 1;
    }
    
    if (!props.open) {
        return null;
    }

    return (
        <Dialog
            open={true}
            onClose={closeDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">添加新的商品</DialogTitle>
            <DialogContent>
                <form className={classes.form}>
                    <TextField 
                        label="商品" 
                        variant="outlined" 
                        className={classes.input}
                        value={state.name} 
                        onChange={(event) => {
                            setState({
                                ...state, 
                                name: event.target.value
                            })
                        }} />
                    <TextField 
                        label="价格"
                        variant="outlined"
                        className={classes.input}
                        value={state.price} 
                        type="number" 
                        onChange={(event) => {
                            setState({
                                ...state,
                                price: event.target.value || 1
                            })
                        }}/>
                    <TextField 
                        label="数量"
                        variant="outlined"
                        className={classes.input}
                        value={state.num}
                        type="number" 
                        onChange={(event) => {
                            setState({
                                ...state,
                                num: event.target.value || 1
                            })
                        }}/>
                </form>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={closeDialog}>取消</Button>
                <Button color="secondary" disabled={!valid()} autoFocus
                    onClick={() => {
                        closeDialog();
                        if (props.valueChange) {
                            props.valueChange(state);
                            setState({ name: '', price: 1, num: 1 });
                        }
                    }}
                >确定</Button>
            </DialogActions>
        </Dialog>
    )
}