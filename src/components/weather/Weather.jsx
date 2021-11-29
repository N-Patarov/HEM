import { Typography } from "@mui/material/";
import styles from "./Weather.module.scss";
export default function Weather({degrees,type=""}){
    return(
        <div className={styles['weather-wrapper']}>
            <div className={styles['image']} >image</div>
            <Typography className={styles['weather']}>weather</Typography>
            <Typography variant={<h1 />} className={styles['deg']}>degrees</Typography>
        </div>
    );
}