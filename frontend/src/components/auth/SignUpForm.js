import React, { useState } from 'react';
import { Grid, Typography, Button, TextField } from '@mui/material';
import FormField from './FormField';
import StepIndicator from './StepIndicator';
import DaysOfWeekSelector from './DaysOfWeekSelector';

const SignUpForm = ({step, setStep}) => {
    const [selectedType, setSelectedType] = useState(null);

    const btnStyle = {
        borderColor: 'rgba(255, 205, 77, 1)',
        color: 'rgba(208, 171, 73, 1)',
        '&:hover': {
          borderColor: 'rgba(255, 205, 77, 1)',
          color: 'rgba(208, 171, 73, 1)',
        },
      };
    

      return (
        <>
          <Grid sx={{m: '60px 0 0', width: "100%", p: '2% 35% 0'}}>
            <StepIndicator step={step} />
          </Grid>
    
          <Grid sx={{ width: "52%", justifyContent: "center", textAlign: "center", margin: 'auto', maxWidth: 950, mt: '25px' }}>
            <Grid container spacing={3} textAlign="left" alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Typography sx={{ color: "rgba(114, 88, 39, 1)", fontWeight: 700, fontSize: 15, pb: '10px' }}>
                    사장님의 가게를 선택해주세요
                    </Typography>

                    <Grid item sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                ...btnStyle,
                                backgroundColor: selectedType === 'school' ? 'rgba(255, 205, 77, 1)' : 'transparent',
                                color: selectedType === 'school' ? '#fff' : 'rgba(208, 171, 73, 1)',
                            }}
                            onClick={() => setSelectedType('school')}
                        >
                            학식
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            sx={{
                                ...btnStyle,
                                backgroundColor: selectedType === 'cafe' ? 'rgba(255, 205, 77, 1)' : 'transparent',
                                color: selectedType === 'cafe' ? '#fff' : 'rgba(208, 171, 73, 1)',
                            }}
                            onClick={() => setSelectedType('cafe')}
                        >
                            카페
                        </Button>
                    </Grid>
                </Grid>

                <FormField label="이름" placeholder="이름을 입력해주세요" id="name" />
                <FormField label="가게 이름" placeholder="가게 이름을 입력해주세요" id="storeName" />
                <FormField label="연락처" placeholder="연락처는 손님에게 노출되지 않습니다" id="contact" />
                <FormField label="이메일" placeholder="이메일을 입력해주세요" id="email" />
                <FormField label="가게설명" placeholder="안녕하세요! 맛있는 커피를 제공하는 스꾸냠입니다!" id="description" />
                <FormField label="가게위치" placeholder="서울특별시 종로구 명륜동 000-00" id="address" />
                
                <Grid item xs={6} >
                    <Typography
                        sx={{
                        color: "rgba(114, 88, 39, 1)",
                        fontWeight: 700,
                        fontSize: 15,
                        mb: "3px",
                        }}
                    >
                        운영요일
                    </Typography>
                    <DaysOfWeekSelector />
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        sx={{
                        color: "rgba(114, 88, 39, 1)",
                        fontWeight: 700,
                        fontSize: 15,
                        mb: "3px",
                        }}
                    >
                        운영시간
                    </Typography>
                    <div style={{display: 'flex', flexDirection: 'row', gap: 12}}>
                        <FormField placeholder="오픈시간"/>
                        <FormField placeholder="마감시간"/>
                    </div>
                </Grid>
            </Grid>

            <button onClick={()=>setStep(3)} style={{margin: 40, border: 0, padding: 10, borderRadius: 4, fontSize: '21px', lineHeight: '22px', fontWeight: 700, backgroundColor: 'rgba(255, 231, 105, 1)', color: 'rgba(114, 88, 39, 1)', width: '45%'}}>가입하기</button>
          </Grid>
        </>
    )
    
}

export default SignUpForm;