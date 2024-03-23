import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { hiragana, katakana } from '../dist/kana.js';
import { kanji } from '../dist/kanji.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const total = hiragana.length + katakana.length + kanji.length;


export const data = {
  labels: [`${((hiragana.length) / total * 100).toFixed(2)}% Hiragana (${hiragana.length} cards)`, `${((katakana.length) / total * 100).toFixed(2)}% Katakana (${katakana.length} cards)`, `${((kanji.length) / total * 100).toFixed(2)}% Kanji (${kanji.length} cards)`],
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