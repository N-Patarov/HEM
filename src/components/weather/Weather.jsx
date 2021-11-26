import { Typography } from "@mui/material/";
import styles from "./Weather.module.scss";
export default function Weather({degrees,type=""}){
    return(
        <div className={styles['weather-wrapper']}>
            <div className={styles['image']}>image</div>
            <div className={styles['weather']}>weather</div>
            <div className={styles['deg']}>degrees</div>
        </div>
    );
}