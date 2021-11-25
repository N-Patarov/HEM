import styles from './Login.module.scss';
import { TextField, Button, InputAdornment } from '@mui/material/';
import {  Email, Lock, Search } from '@mui/icons-material';



export default function Login(){
    return(
        <form className={styles['login-form']}>
            <TextField
                InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <Email />
                    </InputAdornment>
                    )
                }}
            />
            <TextField
                InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <Lock />
                    </InputAdornment>
                    )
                }}
            />
            <Button variant="contained" className={styles['button']}>Login</Button>
            <InputAdornment />
        </form>
    );
}
