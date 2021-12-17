import classNames from "classnames"
import styles from "./Cameras.module.scss"
import Card from "../card/Card"
import { useState, useEffect } from 'react';
import { Grid, Box } from "@mui/material"

export default function Cameras({ cameras, hasButton = false }) {
    const [selected, setSelected] = useState(cameras[0].videoUrl)
    useEffect(() => {
        let player = document.querySelector('#player')
        player.load()
        return () => {
            player.pause()
        }
    }, [selected])
    const parsedCameras = cameras.map((camera) =>
        <Grid item xs={6}>
            <video onClick={() => { setSelected(camera.videoUrl) }} className={classNames(styles.videoButton)}>
                <source src={camera.videoUrl} type="video/mp4" />
            </video>
        </Grid >
    )
    return (
        <div className={classNames(styles.container)}>
            <Grid container spacing={2} >
                <Grid item xs={4} >
                    <video id='player' className={classNames(styles.videoButton)} autoPlay muted loop>
                        <source src={selected} type="video/mp4" />
                    </video>
                </Grid>
                <Grid item xs={2} spacing={1} direction="column" >
                    <Grid container>
                        <Box sx={{ maxHeight: '500px', overflow: "auto", }}>
                            <Grid container spacing={1}>
                                {parsedCameras}
                            </Grid>
                        </Box>
                        {(hasButton) ? <Grid item sx={{width:'100%'}}><Card iconUrl={'images/plus.svg'}/></Grid> : null}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    )
}