import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const FormField = ({ label = "", placeholder, id }) => {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item sx={{margin: '15px 0'}}>
        <Typography
          sx={{
            color: "rgba(70, 70, 70, 1)",
            fontWeight: 700,
            fontSize: 15,
            mb: "3px",
            minWidth: '70px', 
            display: 'inline-block',
            textAlign: 'right',
          }}
        >
          {label}
        </Typography>
      </Grid>
      <Grid item xs>
        <TextField
          fullWidth
          id={id}
          placeholder={placeholder}
          size='small'
          inputProps={{ style: { fontSize: 13, padding: '10px' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
                borderColor: 'rgba(217, 216, 216, 1)',
              },
            },
            backgroundColor: '#fff',
            minWidth: '200px', 
            display: 'inline-block', 
          }}
        />
      </Grid>
    </Grid>
  );
}

export default FormField;
