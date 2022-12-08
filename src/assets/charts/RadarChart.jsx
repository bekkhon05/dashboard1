import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 50,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 100,
  },
  {
    subject: 'English',
    A: 86,
    B: 100,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 30,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 190,
  },
  {
    subject: 'History',
    A: 65,
    B: 25,
  },
  {
    subject: 'Kistory',
    A: 95,
    B: 185,
  },
];

export default class RadarChartt extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-radar-chart-rjoc6';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" >
        <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#C7C7C7" fill="#C9C3C9" fillOpacity={0.4} />
          <Radar name="Mike" dataKey="B" stroke="#97BBCD" fill="#E4ECEF" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}
