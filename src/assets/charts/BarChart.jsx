import { Typography } from '@mui/material';
import { Box, fontSize } from '@mui/system';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'January',
        uv: 40,
        pv: 24,
        amt: 24,
        name2: 'January',
    },
    {
        name: 'February',
        uv: 30,
        pv: 13,
        amt: 22,
    },
    {
        name: 'March',
        uv: 20,
        pv: 98,
        amt: 22,
    },
    {
        name: 'April',
        uv: 27,
        pv: 39,
        amt: 20,
    },
    {
        name: 'May',
        uv: 18,
        pv: 48,
        amt: 21,
    },
    {
        name: 'June',
        uv: 23,
        pv: 38,
        amt: 25,
    },
    {
        name: 'July',
        uv: 34,
        pv: 43,
        amt: 21,
    },
];

export default class BarChartt extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (
            <ResponsiveContainer width="100%" height="80%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={0} style={{ fontSize: "12px"}} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" stroke="#DCDCDC" fill="#F8F8F8" />
                    <Bar dataKey="uv" stroke="#97BBCD" fill="#EAF1F5" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
