import React from 'react';
import { Typography, Button, Box, Divider } from '@mui/material';

const NoticeDetail = ({ notice, onPrevClick }) => {
    return (
        <>
            <div style={{backgroundColor: '#fff', height: '100%', border: '1px solid rgba(217, 216, 216, 1)'}}>
                <div style={{padding: '35px 45px 0'}}>
                    <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600, mb: 1 }}>
                        {notice.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontSize: '14px', mb: 2 }}>
                        {notice.date}
                    </Typography>
                </div>

                <Divider sx={{ my: '20px' }} />

                <Typography sx={{p: '25px 45px'}}>{notice.content}</Typography>

                <Divider sx={{ my: '10px' }} />

                <Box>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Button sx={{ color: 'rgba(110, 195, 113, 1)', ml: '15px'}}>
                            이전 
                        </Button>
                        <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: '13px'}}>
                            [공지] 스꾸냠 정기 서비스 점검 안내
                        </Typography>
                    </div>
                    <Divider sx={{ my: '10px' }} />
                    
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                        <Button sx={{ color: 'rgba(110, 195, 113, 1)',  ml: '15px'}}>
                            다음
                        </Button>
                        <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: '13px'}}>
                            [이벤트] 스꾸냠 정기 서비스 점검 안내3
                        </Typography>
                    </div>
                </Box>
            </div>
            
            <div style={{textAlign: 'center', margin: '25px 0'}}>
                <Button onClick={onPrevClick} sx={{backgroundColor: '#fff', p: '6px 20px', border: '1px solid rgba(217, 216, 216, 1)', borderRadius: '4px', color: 'rgba(102, 102, 102, 1)'}}>
                    목록으로 돌아가기
                </Button>
            </div>
        </>
    );
};

export default NoticeDetail;
