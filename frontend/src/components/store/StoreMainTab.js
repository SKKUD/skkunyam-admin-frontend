import React, { useState } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FormField from './FormField';

const StoreMainTab = () => {
    return (
        <div style={{ padding: '10px 20px'}}>
            {/* 가게 정보 수정 */}
            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600 }}>가게정보수정</Typography>
            <Box sx={{m: '30px 0 50px'}}>
                <FormField label="가게 이름" placeholder="가게 이름을 입력해주세요." id="storeName" />
                <FormField label="가게 위치" placeholder="가게 위치를 입력해주세요." id="storePlace" />
                <FormField label="가게 소개" placeholder="가게 소개를 입력해주세요." id="storeIntro" />
                <FormField label="연락처" placeholder="연락처를 입력해주세요." id="storeContact" />
            </Box>

            {/* 메뉴관리 */}
            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600 }}>메뉴관리</Typography>
        </div>
    );
}

export default StoreMainTab;