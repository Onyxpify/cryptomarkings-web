import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const LineChart2 = () => {
  const options = {
    
  scales: {
    y:
      {
        min: 140000000,
        max: 260000000,
        stepSize: 15000000,
      },
    x:
      {
        
      },
    },
    
    
};
  return (
    <Line
      datasetIdKey='id'
      options={options}
      width={'500px'}
      height={'150px'}
      
  data={{
    labels: [1, 5, 10,15,20,25,30],
    datasets: [
      {
        label: 'a',
        data: [140000000, 170000000,110000000,250000000,],
      },
      {
        label: 'b',
        data: [120000000, 150000000, 240000000,200000000,],
      },
    ],
  }}
/>
  );
};

export default LineChart2;
