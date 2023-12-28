import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root.Mui-selected': {
    borderRadius: '18px',
    backgroundColor: 'rgba(255, 231, 105, 1)', 
    color: 'rgba(70, 70, 70, 1)', 
    padding: '0px 15px',
    '&:hover': {
        backgroundColor: 'rgba(255, 231, 105, 1)', 
    },
    boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25)'
  },
  '& .MuiToggleButton-root': {
    borderRadius: '20px',
    '&:hover': {
        backgroundColor: 'transparent',
    },
    height: '34px',
  },
}));

const PeriodToggleGroup = ({ value, onChange }) => {
    return (
        <StyledToggleButtonGroup
          value={value}
          exclusive
          onChange={onChange}
          aria-label="text alignment"
          sx={{ backgroundColor: '#fff', p: '5px 10px', borderRadius: '20px', gap: '7px', boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.25) inset;' }}
        >
          <ToggleButton value="today" sx={{ border: 0 }}>오늘</ToggleButton>
          <ToggleButton value="week" sx={{ border: 0 }}>일주일</ToggleButton>
          <ToggleButton value="month" sx={{ border: 0 }}>한달</ToggleButton>
          <ToggleButton value="year" sx={{ border: 0 }}>일년</ToggleButton>
        </StyledToggleButtonGroup>
    )
}

export default PeriodToggleGroup;
