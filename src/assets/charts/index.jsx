import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'January',
    uv: 10,
    pv: 24,
    amt: 24,
  },
  {
    name: 'February',
    uv: 50,
    pv: 30,
    amt: 22,
  },
  {
    name: 'March',
    uv: 20,
    pv: 70,
    amt: 22,
  },
  {
    name: 'April',
    uv: 20,
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
    uv: 14,
    pv: 19,
    amt: 21,
  },
];


export default class Charts extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" maxHeight="72%"    >
        <AreaChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={0} style={{fontSize:"12px "}} />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#DCDCDC" fill="#ddd" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#96BBCD" fill="#EAF1F5" />
          {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}