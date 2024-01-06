import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, CategoryScale, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Typography, Grid } from '@mui/material';

ChartJS.register(LinearScale, CategoryScale, Tooltip, Legend, PointElement, LineElement);

const TimeAnalysis = () => {
  // Dummy data 
  const timeLabels = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const orderData = [8, 10, 7, 6, 23, 19, 12, 15, 6, 5, 8];
  const pricesPerOrder = [4000, 4500, 5000, 4800, 5500, 4000, 4200, 4800, 4900, 5000, 5500]; 

  const [displayType, setDisplayType] = useState('count'); // 'count' or 'amount'

  const data = {
    labels: timeLabels,
    datasets: [
      {
        label: displayType === 'count' ? '주문수보기' : '금액보기',
        data: displayType === 'count' ? orderData : orderData.map((count, index) => count * pricesPerOrder[index]),
        backgroundColor: 'rgba(255, 205, 77, 0.5)',
        borderColor: 'rgba(255, 205, 77, 1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: timeLabels,
        grid: {
            color: 'transparent', 
        },
      },
      y: {
        beginAtZero: true,
        grid: {
            color: 'rgba(255, 231, 105, 1)', 
        },
      },
    },
    plugins: {
        legend: {
            display: false, 
        },
        tooltip: {
            callbacks: {
                label: (context) => {
                if (displayType === 'count') {
                    return `주문 수: ${context.parsed.y} 건`;
                } else {
                    const dataIndex = context.dataIndex;
                    const totalAmount = orderData[dataIndex] * pricesPerOrder[dataIndex];
                    return `총 금액: ${totalAmount.toLocaleString()} 원`;
                }
                },
            },          
        },
    },
  };

  return (
    <Grid container sx={{ p: 3, bgcolor: '#fff', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '4px', mb: 2 }}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '15px', fontWeight: 600 }}> 시간별분석 </Typography>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: 3 }}>
                <input
                    type="radio"
                    name="displayType"
                    checked={displayType === 'amount'}
                    onChange={() => setDisplayType('amount')}
                />
                <span>금액보기</span>
                </div>

                <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: 3 }}>
                <input
                    type="radio"
                    name="displayType"
                    checked={displayType === 'count'}
                    onChange={() => setDisplayType('count')}
                />
                <span>주문수보기</span>
                </div>
            </div>
        </div>
        <Line data={data} options={options} />
    </Grid>
  );
};

export default TimeAnalysis;
