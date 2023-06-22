import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip);

export const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [55, 31, 14],
      backgroundColor: [
        '#98D89E',
        '#F6DC7D',
        '#EE8484',
        
      ],
      borderColor: [
        '#98D89E',
        '#F6DC7D',
        '#EE8484',
        
      ],
      borderWidth: 1,
   
    },
  ],
};

export function PieChart() {
  return <Pie data={data} className='h-[200px] w-[200px]'/>;
}
