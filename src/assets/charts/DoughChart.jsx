
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import "./char.css"

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 250 },
  { name: 'Group C', value:  150},
];

const COLORS = ['#F7464A','#FFBB28', '#00C49F',  '#FF8042'];

const RADIAN = Math.PI / 120;


export default class DoughChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={"auto"} height={"auto"} className='cha'>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            innerRadius={40}
            outerRadius={75}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}



