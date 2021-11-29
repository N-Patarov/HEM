import styles from "./Time.module.scss"
import { useState, useEffect } from "react"
import { Typography } from "@mui/material"
import classNames from "classnames";

export default function Time() {
    let [date, setDate] = useState(new Date())
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={classNames(styles["time-wrapper"])}>
            <Typography color="primary">Time</Typography>
            <Typography variant="h1">{date.getHours()}:{date.getMinutes()}</Typography>
        </div>
    )
}