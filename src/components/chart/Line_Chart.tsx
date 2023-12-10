import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];
const xLabels = [
  1,5,10,15,20,25,30
];
const yLabels = [
  '100', '300', '600', '700', '1200', '900', '1500'
];

export default function Line_chart() {
  return (
    <LineChart
     slotProps={{ legend: { hidden: true } }}
      xAxis={[{ data: [1, 5, 10, 15, 20, 25,30] }]}
     
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5,7],
          // area: true,
          label: 'This Month'
        },
        {
          data: [1, 6.5, 2.5, 9.5, 3.5, 5,9],
          // area: true,
          label: 'last Month'
        },
      ]}
      width={800}
      height={300}
      
    />
  );
}