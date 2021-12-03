
import styles from "./Scenes.module.scss";
import classNames from "classnames";
import { Grid } from '@mui/material';
import Card from "../card/Card";

export default function Scenes({ cards = [] }) {

    const cardItems = cards.map(data =>
        <Grid item xs={4} >
            <Card {...data} />
        </Grid>
    );

    return (
        <div className={classNames(styles['scenes-container'])}>
            <Grid container columnSpacing='37px' rowSpacing='35px'>
                {cardItems}
            </Grid>
        </div>
    );
}
