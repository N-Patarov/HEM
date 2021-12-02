import { Card as MuiCard, CardContent, ButtonBase } from "@mui/material"
import style from "./Card.module.scss"
import classNames from "classnames"
export default function Card({ iconUrl = false, outlined = false }) {
    return (
        <div className={classNames(style.card)}>
            <MuiCard sx={(outlined) ? {
                border: "3px solid #7441F3",
                boxSizing: "border-box",
                borderRadius: "20px"
            } : ""}>
                <ButtonBase>
                    <CardContent className={classNames(style.content)}>
                        {(iconUrl) ? <img src={iconUrl}></img> : ""}
                    </CardContent>
                </ButtonBase>
            </MuiCard>
        </div >
    )
}