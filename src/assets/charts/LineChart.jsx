import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
    {
      name: 'January',
      uv: 40,
      pv: 24,
      amt: 20,
    },
    {
      name: 'February',
      uv: 50,
      pv: -13,
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

  
export default class LineCharts extends PureComponent {
  
    render() {
      return (
        <ResponsiveContainer width="100%" maxHeight="80%"  >
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={0} style={{fontSize:"12px"}}/>
            <YAxis />
            <Tooltip   />
            <Area type="monotone" dataKey="uv" stackId="1" stroke="#DCDCDC" fill="#F8F8F8" />
            <Area type="monotone" dataKey="pv" stackId="1" stroke="#97BBCD" fill="#E4ECEF" />
            {/* <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" /> */}
          </AreaChart>
        </ResponsiveContainer>
      );
    }
  }

