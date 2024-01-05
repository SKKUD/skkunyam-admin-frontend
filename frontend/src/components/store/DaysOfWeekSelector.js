import React, { useEffect, useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const DaysOfWeekSelector = () => {
  const [selectedDays, setSelectedDays] = useState([]);

  const onDayToggle = (event, newDays) => {
    setSelectedDays(newDays);
  };

  const daysArray = Array.isArray(selectedDays) ? selectedDays : [];

  return (
    <ToggleButtonGroup
      value={daysArray}
      onChange={onDayToggle}
      aria-label="days-of-week"
      fullWidth
      sx={{
        backgroundColor: 'rgba(234, 234, 234, 1)',
        '& .MuiToggleButton-root': {
          borderColor: 'rgba(217, 216, 216, 1)',
          color: 'rgba(102, 102, 102, 1)',
          '&:hover': {
            borderColor: 'rgba(217, 216, 216, 1)',
            color: 'rgba(102, 102, 102, 1)',
          },
        },
        '& .Mui-selected': {
          backgroundColor: 'rgba(255, 231, 105, 1) !important',
          color: '#fff !important',
        },
      }}
    >
      <ToggleButton sx={{p: '10px 15px'}} value="Monday">월</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Tuesday">화</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Wednesday">수</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Thursday">목</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Friday">금</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Saturday">토</ToggleButton>
      <ToggleButton sx={{p: '10px 15px'}} value="Sunday">일</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DaysOfWeekSelector;
