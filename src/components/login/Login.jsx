import styles from './Login.module.scss';
import { TextField, Button, InputAdornment } from '@mui/material/';
import {  EmailIcon, LockIcon } from '@mui/icons-material';


export default function Login(){
    return(
        <div className={styles['login-form']}>
            <TextField />
            <Button className={styles['button']}></Button>
            <InputAdornment />
            <EmailIcon />
            <LockIcon />
        </div>
    );
}