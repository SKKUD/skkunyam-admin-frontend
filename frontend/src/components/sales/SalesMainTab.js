import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import PeriodToggleGroup from './PeriodToggleGroup';
import TotalSales from './TotalSales';
import MenuAndStoreAnalysis from './MenuAndStoreAnalysis';
import TimeAnalysis from './TimeAnalysis';
import { dummyBestMenus } from '../../dummyData/dummyAnalysis';

const SalesMainTab = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('today');

  const handlePeriodChange = (event, newPeriod) => {
    setSelectedPeriod(newPeriod);
  };

  return (
    <div style={{ padding: '10px 20px'}}>
      <Grid sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600 }}>매출관리</Typography>

        <PeriodToggleGroup value={selectedPeriod} onChange={handlePeriodChange} />
      </Grid>

      <TotalSales />

      {/* 시간별 분석, 선 그래프 */}
      <TimeAnalysis />
      
      {/* 메뉴분석 / 매장분석 */}
      <MenuAndStoreAnalysis bestMenusData={dummyBestMenus}/>
    </div>
  );
}

export default SalesMainTab;
