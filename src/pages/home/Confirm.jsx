
import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

const ConfirmButton = (props) => {
    const [open, setOpen] = useState(false);

    const handleConfirm = (confirmed) => {
        setOpen(false);
        if (props.confirmChange) {
            props.confirmChange(confirmed);
        }
    }

    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={() => setOpen(true)}>
                {props.children}
            </Button>
            <Dialog
                open={open}>
                <DialogTitle>{props.confirmTitle}</DialogTitle>
                <DialogContent>{props.confirmDescription}</DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => handleConfirm(false)}>{props.confirmCancelText}</Button>
                    <Button color="secondary" onClick={() => handleConfirm(true)}>{props.confirmOkText}</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
};

export default ConfirmButton