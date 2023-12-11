import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const FormField = ({ label="", placeholder, id }) => {
    return (
        <Grid item xs={6}>
        <Typography
            sx={{
            color: "rgba(114, 88, 39, 1)",
            fontWeight: 700,
            fontSize: 15,
            mb: "3px",
            }}
        >
            {label}
        </Typography>
        <TextField fullWidth id={id} placeholder={placeholder} size='small'  inputProps={{style: {fontSize: 13, padding: '10px 14px' }}}
            sx={{
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(255, 231, 105, 1)',  
            },
            '&:hover fieldset': {
                borderColor: 'rgba(255, 231, 105, 1)', 
            },
            },
            backgroundColor: '#fff'
            }}/>
        </Grid>
    )
}

export default FormField;