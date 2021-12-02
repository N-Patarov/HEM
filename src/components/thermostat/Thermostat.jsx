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
                    <CircularProgress variant="determinate" value={deg}/>
                    <div>
                        <button onClick={() => setDeg(deg - 1)}><RemoveCircleOutlined /></button>
                        <Typography variant={<h1 />} className={styles['deg']}>{deg}&deg;</Typography>
                        <button onClick={() => setDeg(deg + 1)}><AddCircleOutlined /></button>
                    </div>
                </div>
            </div>
            
            <div className={styles['graph']}>
                <div style={{fontSize: "12px", paddingTop:"10px", paddingLeft:"10px"}}>TEMPERATURE GRAPH</div>
                <ResponsiveContainer width="100%" height={150}>
                    <ComposedChart width={500} height={300} data={data}>
                        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
                        <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth="5"/>
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}