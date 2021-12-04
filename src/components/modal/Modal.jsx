import styles from './Modal.module.scss';
import { Dialog, DialogTitle, DialogContent, Button, Typography } from '@mui/material';
import useState from 'react';
export default function Modal(
    {
        open = true, 
        title = "Modal Title",
        buttonText = "Modal Action", 
        handleClose = () => {
            open=false
        }
    }
    ){


    return(
        <div className={styles['wrapper']}>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle className={styles['title']}>{title}</DialogTitle>
                <div className={styles['content']}>
                    <div className={styles['content-text']}>Modal Content</div>
                    <Button className={styles['button']} onClick={handleClose} variant="contained">{buttonText}</Button>
                </div>
            </Dialog>
        </div>
    );
}