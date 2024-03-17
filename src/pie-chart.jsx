import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { hiragana, katakana } from '../dist/kana.js';
import { kanji } from '../dist/kanji.js';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
  labels: [`${hiragana.length} Hiragana`, `${katakana.length} Katakana`, `${kanji.length} Kanji`],
  datasets: [
    {
      label: '# of study cards',
      data: [hiragana.length, katakana.length, kanji.length],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie className="pie-chart" data={data} />;
}

export default PieChart;