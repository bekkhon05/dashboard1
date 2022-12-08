// import React, { PureComponent } from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     uv: 31.47,
//     pv: 2400,
//     fill: '#8884d8',
//   },
//   {
//     uv: 26.69,
//     pv: 4567,
//     fill: '#83a6ed',
//   },
//   {
//     uv: 15.69,
//     pv: 1398,
//     fill: '#8dd1e1',
//   },
//   {
//     uv: 8.22,
//     pv: 9800,
//     fill: '#82ca9d',
//   },
//   {
//     uv: 8.63,
//     pv: 3908,
//     fill: '#a4de6c',
//   },
//   {
//     uv: 2.63,
//     pv: 4800,
//     fill: '#d0ed57',
//   },
//   {
//     uv: 6.67,
//     pv: 4800,
//     fill: '#ffc658',
//   },
// ];

// const style = {
//   top: '50%',
//   right: 0,
//   transform: 'translate(0, -50%)',
//   lineHeight: '24px',
// };

// export default class PolarChart extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/s/simple-radial-bar-chart-qf8fz';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="100%" barSize={10} data={data}>
//           <RadialBar
//             minAngle={15}
          
//             background
//             clockWise
//             dataKey="uv"
//           />
//           <Legend iconSize={0}  verticalAlign="middle"  />
//         </RadialBarChart>
//       </ResponsiveContainer>
//     );
//   }
// }


import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  
  datasets: [
    {
      label: '# of Votes',
      data:  [30, 4, 7, 4, 10],
      backgroundColor: [
        '#F7464A',
        '#46BFBD',
        '#FDB45C',
        '#949FB1',
        '#4D5360',
      ],
      borderWidth: 1,
    },
  ],
};

function PolarChart() {
  return <PolarArea  data={data}  style={{ maxWidth:"90%  ", maxHeight:"90%"}} />;
}
export default PolarChart;