import React from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import StepIndicator from './StepIndicator';

const FormField = ({ label, id }) => (
    <Grid item xs={6}>
      <Typography
        sx={{
          color: "rgba(114, 88, 39, 1)",
          fontWeight: 700,
          fontSize: 16,
          pb: "10px",
        }}
      >
        {label}
      </Typography>
      <TextField label={label} fullWidth id={id} />
    </Grid>
);
  

const SignUpForm = ({step, setStep}) => {
    return (
        <>
            <Grid sx={{ mt: "55px", width: "100%", p: '3% 35%' }}>
                <StepIndicator step={step} />
            </Grid>

            <Grid sx={{ width: "55%", justifyContent: "center", textAlign: "center", margin: 'auto' }}>
                <Grid container spacing={2} textAlign="left" alignItems="center" justifyContent="center">
                    <Grid item xs={12}>
                        <Typography sx={{ color: "rgba(114, 88, 39, 1)", fontWeight: 700, fontSize: 16, pb: '10px' }}>사장님의 가게를 선택해주세요</Typography>
                        <Grid item sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
                            <Button variant="outlined" fullWidth>학식</Button>
                            <Button variant="outlined" fullWidth>카페</Button>
                        </Grid>
                    </Grid>

                    <FormField label="이름" id="name" />
                    <FormField label="가게이름" id="storeName" />
                    <FormField label="연락처" id="contact" />
                    <FormField label="이메일" id="email" />
                    <FormField label="가게설명" id="description" />
                    <FormField label="가게주소" id="address" />
                    <FormField label="운영요일" id="businessDays" />
                    <FormField label="운영시간" id="businessHours" />
                </Grid>

                <button onClick={()=>setStep(3)} style={{margin: 50, border: 0, padding: 10, borderRadius: 4, fontSize: '21px', lineHeight: '22px', fontWeight: 700, backgroundColor: 'rgba(255, 231, 105, 1)', color: 'rgba(114, 88, 39, 1)', width: '45%'}}>가입하기</button>
            </Grid>
        </>
    )
    
}

export default SignUpForm;