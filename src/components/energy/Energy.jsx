import {Line, ComposedChart, XAxis, CartesianGrid, LineChart, ResponsiveContainer, Area, linearGradient } from 'recharts';
import { Grid, Select, MenuItem, Typography, InputLabel, FormControl } from '@mui/material';
import styles from './Energy.module.scss';
export default function Energy(
    { data =
        [
            { energy: 25, hour: 12 },
            { energy: 13, hour: 13 },
            { energy: 14, hour: 14 },
            { energy: 15, hour: 15 },
            { energy: 15, hour: 16 },
            { energy: 10, hour: 17 },
          ]
    }
){
    return(
        <Grid className={styles['wrapper']}>
            <Grid className={styles['head']}>
                <Typography fontSize={22} fontWeight='bold' className={styles['text']}>Energy</Typography>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    inputProps="This Week"
                    width={200}
                    style={{color: '#7441F3'}}
                >
                    <MenuItem value={10}>This Week</MenuItem>
                    <MenuItem value={20}>This Month</MenuItem>
                    <MenuItem value={30}>This Year</MenuItem>
                </Select>
            </Grid>
            <div className={styles['line']}>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
                <ComposedChart width={500} height={300} data={data}>
                    <Line className={styles['line']} type="monotone" dataKey="energy" stroke='#DF54A7' strokeWidth="5" fill="url(#colorPv)"/>
                    <Area type="monotone" dataKey="energy" stroke='#DF54A7' strokeWidth="5" fill="url(#colorPv)"/>  
                    <XAxis dataKey="hour" />
                    <CartesianGrid horizontal={false} />
                </ComposedChart>
            </div>
        </Grid>
    );
}