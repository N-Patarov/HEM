import { WbCloudyTwoTone } from "@mui/icons-material";
import { Typography } from "@mui/material/";
import styles from "./Weather.module.scss";
export default function Weather({degrees,type=""}){
    let source;
    if(type == "snowy"){
        source = 'images/snowy.svg'
    } else if(type == "cloudy"){
        source = 'images/cloudy.svg'
    }
    else if(type == "sunny"){
        source = 'images/sunny.svg'
    }
    else if(type == "stormy"){
        source = 'images/stormy.svg'
    }
    else{
        source = 'images/rainy.svg'
    }
    return(
        <div className={styles['weather-wrapper']}>
            <div>{<img className={styles['image']} src = {source} />}</div>
            <div className={styles['text-wrapper']}>
                <Typography className={styles['weather']}>weather</Typography>
                <Typography variant={<h1 />} className={styles['deg']}>{degrees}</Typography>
            </div>
        </div>
    );
}