import { CircularProgress } from '@mui/material';
import { AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material';
import {Line, ComposedChart, XAxis, YAxis, CartesianGrid, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './Thermostat.module.scss';
export default function Thermostat(
    {data=[
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]}){
    return(
        <div>
            <CircularProgress />
            <AddCircleOutlined />
            <RemoveCircleOutlined />
            <ResponsiveContainer className={styles.container}>
                <ComposedChart width={500} height={300} data={data}>
                    <XAxis dataKey="hour"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth="5"/>
                </ComposedChart>
            </ResponsiveContainer>



        <ResponsiveContainer width="90%" aspect={3}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                top: 15,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
                <XAxis dataKey="hour"/>
                <YAxis tick={{fill:"#fff"}} />
                <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
                
            </LineChart>
        </ResponsiveContainer>


        </div>

    );
}