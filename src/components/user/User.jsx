import styles from "./User.module.scss"
import { Container, Grid, Avatar, Typography } from "@mui/material"

export default function User({ avatar, username, size }) {
    return (
        <Container className={styles['user-container']}>
            <Grid container alignItems="center" justifyContent="center" spacing={1}>
                <Grid item><Avatar src={avatar} sx={{ width: size, height: size }} alt="Avatar picture" /></Grid>
                <Grid item ><Typography variant="h5">{username}</Typography></Grid>
            </Grid>
        </Container>
    )
}