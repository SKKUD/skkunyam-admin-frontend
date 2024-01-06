import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const MenuAndStoreAnalysis = ({ bestMenusData }) => {
  const [chartMounted, setChartMounted] = useState(false);

  useEffect(() => {
    setChartMounted(true);
    return () => setChartMounted(false); // Cleanup when component unmounts
  }, []);

  const colors = [
    'rgba(255, 205, 77, 1)',   // 1st
    'rgba(255, 231, 105, 1)',  // 2nd
    'rgba(110, 195, 113, 1)',  // 3rd
    'rgba(87, 127, 89, 1)',    // 4th
  ];

  const menuData = bestMenusData.map((menu, index) => ({
    label: `${index + 1}위 ${menu.name} ${Number(menu.price * menu.amount).toLocaleString()}`,
    data: menu.price * menu.amount,
    backgroundColor: colors[index],
  }));

  const sortedMenuData = menuData.sort((a, b) => b.data - a.data);

  const chartLabels = sortedMenuData.map(menu => menu.label);
  const chartData = sortedMenuData.map(menu => menu.data);
  const chartColors = sortedMenuData.map(menu => menu.backgroundColor);

  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: chartColors,
      },
    ],
  };

  const showChart = chartMounted && chartLabels.length > 0;

  const options = {
    legend: {
      display: true,
      position: 'right',
    },
  };

  return (
    <Grid container sx={{ bgcolor: '#fff', display: 'flex', boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', borderRadius: '4px' }}>
      {/* 메뉴 분석 */}
      <Grid item xs={6.5} sx={{ p: 4, display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(217, 216, 216, 1)' }}>
        <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '15px', fontWeight: 600 }}>메뉴 분석</Typography>
        <Typography sx={{ pt: 3, color: 'rgba(70, 70, 70, 1)', fontSize: '13px', fontWeight: 600 }}>
            오늘의 효자메뉴는<br/><Typography component="span" sx={{color: 'rgba(110, 195, 113, 1)', fontSize: 22, fontWeight: 600}}>{bestMenusData[0].name}</Typography> 에요!
        </Typography>
        {showChart && <Doughnut data={data} options={options} style={{padding: 20}}/>}
      </Grid>

      {/* 매장 분석 */}
      <Grid item xs={5.5} sx={{ p: 4, display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '15px', fontWeight: 600 }}>매장 분석</Typography>
        <div style={{margin: '25px 0'}}>
            <Typography component="span" sx={{color: 'rgba(110, 195, 113, 1)', fontSize: 22, fontWeight: 600}}>포장하는 손님<Typography component="span" sx={{color: 'rgba(70, 70, 70, 1)', fontWeight: 600, fontSize: 18}}>이 많은 가게에요!</Typography></Typography>
            <Typography sx={{color: 'rgba(102, 102, 102, 1)', fontSize: 13}}>30%의 손님이 포장주문했어요!</Typography>
        </div>

        <div style={{marginBottom: '25px'}}>
            <Typography component="span" sx={{color: 'rgba(110, 195, 113, 1)', fontSize: 22, fontWeight: 600}}>12시<Typography component="span" sx={{color: 'rgba(70, 70, 70, 1)', fontWeight: 600, fontSize: 18}}>에 가장 바쁘게 일해요</Typography></Typography>
            <Typography sx={{color: 'rgba(102, 102, 102, 1)', fontSize: 13}}>12시에 매출이 가장 많았어요</Typography>
        </div>

        <div style={{marginBottom: '25px'}}>
            <Typography component="span" sx={{color: 'rgba(110, 195, 113, 1)', fontSize: 22, fontWeight: 600}}>372,400 <Typography component="span" sx={{color: 'rgba(70, 70, 70, 1)', fontWeight: 600, fontSize: 18}}>원 정도 벌어요</Typography></Typography>
            <Typography sx={{color: 'rgba(102, 102, 102, 1)', fontSize: 13}}>하루 평균 372,400 원 벌어요</Typography>
        </div>
      </Grid>
    </Grid>
  );
};

export default MenuAndStoreAnalysis;
