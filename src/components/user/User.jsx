import styles from "./User.module.scss"
import { Container, Grid, Avatar, Typography } from "@mui/material"
import classNames from "classnames";

export default function User({ avatar, name, size }) {
    return (
        <div className={classNames(styles['user-container'])}>
            <Container >
                <Grid container alignItems="center" justifyContent="center" spacing={1}>
                    <Grid item><Avatar src={avatar} sx={{ width: size, height: size }} alt="Avatar picture" /></Grid>
                    <Grid item ><Typography variant="h5">{name}</Typography></Grid>
                </Grid>
            </Container>
        </div>

    )
}