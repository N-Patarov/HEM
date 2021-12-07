import { Card as MuiCard, CardContent, ButtonBase } from "@mui/material"
import styles from "./Card.module.scss"
import classNames from "classnames"
export default function Card({ iconUrl = false, outlined = false, onClick }) {
    return (
        <div className={classNames(styles.card)}>
            <MuiCard sx={(outlined) ? {
                border: "3px solid #7441F3",
                boxSizing: "border-box",
                borderRadius: "20px"
            } : ""} className={classNames(styles.muiCard)}>
                <ButtonBase onClick={onClick}>
                    <CardContent className={classNames(styles.content)}>
                        {(iconUrl) ? <img src={iconUrl} className={classNames(styles.image)}></img> : ""}
                    </CardContent>
                </ButtonBase>
            </MuiCard>
        </div >
    )
}