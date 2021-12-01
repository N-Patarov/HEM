import { CircularProgress } from '@mui/material';
import { AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material';
import {Line, ComposedChart, XAxis, YAxis } from 'recharts';
export default function Thermostat(
    data=[
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]){
    return(
        <div>
            <CircularProgress />
            <AddCircleOutlined />
            <RemoveCircleOutlined />
        </div>
    );
}