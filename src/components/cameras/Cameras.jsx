import classNames from "classnames"
import styles from "./Cameras.module.scss"
import Card from "../card/Card"
import { useState } from 'react';
import { Grid, CardMedia, Card as MuiCard, ButtonBase, Box } from "@mui/material"

export default function Cameras({ cameras, hasButton }) {
    const [selected, setSelected] = useState(cameras[0].videoUrl)
    const parsedCameras = cameras.map((camera) =>
        <Grid item xs={6}>
            <MuiCard>
                <ButtonBase onClick={() => { setSelected(camera.videoUrl) }}>
                    <CardMedia component="video" src={camera.videoUrl} sx={(selected == camera.videoUrl) ? {
                        borderRadius: '15px', border: '5px solid #7441F3',
                    } : { borderRadius: '15px', }} />
                </ButtonBase>
            </MuiCard>
        </Grid >
    )

    return (
        <div className={classNames(styles.container)}>
            <Grid container spacing={2} >
                <Grid item xs={4} >
                    <CardMedia component="video" src={selected} style={{
                        borderRadius: '20px',
                    }} autoPlay muted />
                </Grid>
                <Grid item container xs={2} spacing={1} direction="column" >
                    <Grid item>
                        <Box sx={{ maxHeight: '300px', overflow: "auto", }}>
                            <Grid container spacing={1}>
                                {parsedCameras}
                            </Grid>
                        </Box>
                    </Grid>
                    {(hasButton) ? <Grid item xs={1}><Card outlined={true} iconUrl="images/plus.svg" /></Grid> : null}
                </Grid>
            </Grid>
        </div >
    )
}