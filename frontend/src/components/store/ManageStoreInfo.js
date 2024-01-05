import React from 'react';
import { Typography, Box, Grid, Button } from '@mui/material';
import FormField from './FormField';
import DaysOfWeekSelector from './DaysOfWeekSelector';
import storeImg0 from '../../images/storeImg0.png';
import storeImg1 from '../../images/storeImg1.png';
import storeImg2 from '../../images/storeImg2.png';
import storeImg3 from '../../images/storeImg3.png';
import storeImg4 from '../../images/storeImg4.png';
import storeImg5 from '../../images/storeImg5.png';

const ManageStoreInfo = () => {
    return (
        <>
        <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600 }}>가게정보수정</Typography>
            <Box sx={{m: '30px 0'}}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <Typography sx={{ color: "rgba(70, 70, 70, 1)", fontWeight: 700, fontSize: 15, mb: "3px", minWidth: '70px', display: 'inline-block', textAlign: 'right', mr: '15px' }}>가게 사진</Typography>
                    <Box style={{ display: 'flex' }}>
                        <div style={{ height: 119, position: 'relative' }}>
                            <img src={storeImg0} alt="대표사진" style={{ width: 132, marginRight: '15px' }} />
                            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 700, textAlign: 'center', position: 'absolute', bottom: 0, left: 0, width: 132, backgroundColor: 'rgba(255, 231, 105, 1)', padding: '5px 0' }}>대표사진</Typography>
                        </div>
                        <div style={{ display: 'flex', border: '1px solid rgba(217, 216, 216, 1)', height: 119, backgroundColor: 'rgba(238, 238, 238, 1)' }}>
                            {[storeImg1, storeImg2, storeImg3].map((src, index) => (
                                <img key={index} src={src} alt={`storeImg${index + 1}`} style={{ width: 122, height: 109, padding: '5px' }} />
                            ))}
                        </div>
                    </Box>
                </div>
                <FormField label="가게 이름" placeholder="가게 이름을 입력해주세요." id="storeName" />
                <FormField label="가게 위치" placeholder="가게 위치를 입력해주세요." id="storePlace" />
                <FormField label="가게 소개" placeholder="가게 소개를 입력해주세요." id="storeIntro" />
                <FormField label="연락처" placeholder="연락처를 입력해주세요." id="storeContact" />
                
                <Grid sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                        <Typography sx={{ color: "rgba(70, 70, 70, 1)", fontWeight: 700, fontSize: 15, mb: "3px", minWidth: '70px', display: 'inline-block', textAlign: 'right', mr: '15px' }}>영업요일</Typography>
                        <DaysOfWeekSelector/>
                    </div>
                    <div style={{ alignItems: 'center', marginBottom: '12px' }}>
                        <FormField label="영업시간" placeholder="영업시간을 입력해주세요." id="storeTime" />
                    </div>
                </Grid>
                
                <div style={{textAlign: 'right'}}>
                    <button style={{border: 0, borderRadius: 4, backgroundColor: 'rgba(255, 205, 77, 1)', padding: '5px 10px', color: 'rgba(70, 70, 70, 1)'}}>저장하기</button>
                </div>
            </Box>
        </>
    )
}

export default ManageStoreInfo;