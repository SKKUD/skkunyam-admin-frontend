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
        '& .MuiToggleButton-root': {
          borderColor: 'rgba(255, 205, 77, 1)',
          color: 'rgba(114, 88, 39, 1)',
          '&:hover': {
            borderColor: 'rgba(255, 205, 77, 1)',
            color: 'rgba(114, 88, 39, 1)',
          },
        },
        '& .Mui-selected': {
          backgroundColor: 'rgba(255, 205, 77, 1) !important',
          color: '#fff !important',
        },
      }}
    >
      <ToggleButton value="Monday">월</ToggleButton>
      <ToggleButton value="Tuesday">화</ToggleButton>
      <ToggleButton value="Wednesday">수</ToggleButton>
      <ToggleButton value="Thursday">목</ToggleButton>
      <ToggleButton value="Friday">금</ToggleButton>
      <ToggleButton value="Saturday">토</ToggleButton>
      <ToggleButton value="Sunday">일</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default DaysOfWeekSelector;
