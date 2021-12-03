import { CircularProgress, Typography } from '@mui/material';
import { AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material';
import {Line, ComposedChart, XAxis, YAxis, CartesianGrid, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './Thermostat.module.scss';
import {useState} from 'react';
export default function Thermostat(
    {data=[
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]}){
    const [progress, setProgress] = useState();
    const [deg, setDeg] = useState(25);
    return(
        <div className={styles['wrapper']}>
            <div className={styles['thermo-wrapper']}>
                <div className={styles['thermo']}>
                    <CircularProgress className={styles['white-circle']} style={{transform: "rotate(-180deg)",color:"#FFFFFF"}} variant="determinate"  value={deg} size={400}/>
                    <CircularProgress className={styles['black-circle']} style={{transform: "rotate(-90deg)",color:"#00000033"}} variant="determinate" value={100} size={400}/>
                </div>
                <div className={styles['degrees']}>
                    <button onClick={() => setDeg(deg - 1)}><RemoveCircleOutlined /></button>
                    <Typography variant='h1' fontSize={80} className={styles['deg']}>{deg}&deg;</Typography>
                    <button onClick={() => setDeg(deg + 1)}><AddCircleOutlined /></button>
                </div>
            </div>
            <div className={styles['graph']}>
                <div style={{fontSize: "12px", paddingTop:"10px", paddingLeft:"10px",fontWeight:"bold", color:"#FFFFFF"}}>TEMPERATURE GRAPH</div>
                <ResponsiveContainer width="100%" height={150}>
                    <ComposedChart width={500} height={300} data={data}>
                        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#FFFFFF" }} itemStyle={{ color: "#fff" }} cursor={false}/>
                        <Line type="monotone" dataKey="temperature" stroke="#FFFFFF" strokeWidth="5"/> 
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}