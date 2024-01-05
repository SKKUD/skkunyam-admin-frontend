import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MenuItem = ({ item }) => {
  const [isSoldOut, setIsSoldOut] = useState(false);

  const handleSoldOutToggle = () => {
    setIsSoldOut(!isSoldOut);
  };

  return (
    <Card>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
            {/* 메뉴 이미지 */}
            <CardMedia
                component="img"
                alt={item.name}
                height="120"
                image={item.image}
                sx={{ width: '120px', borderRadius: 1 }}
            />
            {/* 메뉴 정보 */}
            <Box sx={{ flex: '1 0 auto', pl: 2, display: 'flex', flexDirection: 'column' }}>
                <div style={{display: 'flex'}}>
                    <Typography sx={{backgroundColor: 'rgba(255, 205, 77, 1)', color: '#fff', p: '3px 8px', borderRadius: '4px', fontSize: 14, lineHeight: '18px', fontWeight: 600}}>{item.category}</Typography>
                    {item.isSeasonal ? <Typography sx={{ml: '8px', backgroundColor: 'rgba(255, 205, 77, 1)', color: '#fff', p: '3px 8px', borderRadius: '4px', fontSize: 14, lineHeight: '18px', fontWeight: 600}}>SEASON</Typography>: ''}
                </div>
                <Typography sx={{fontSize: 18, fontWeight: 600, color: 'rgba(70, 70, 70, 1)', p: '10px 0 0'}} noWrap>{item.name}</Typography>
                <Typography sx={{fontSize: 14, fontWeight: 400, color: 'rgba(117, 117, 117, 1)'}}>{item.price}원</Typography>
            </Box>

            {/* 메뉴 설정 */}
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, justifyContent: 'space-between' }}>
                <IconButton>
                    <SettingsOutlinedIcon sx={{color: 'rgba(255, 205, 77, 1)'}}/>
                </IconButton>
            </Box>
        </div>

        <Button 
            fullWidth
            variant="contained"
            onClick={handleSoldOutToggle}
            sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, backgroundColor: isSoldOut ? 'rgba(110, 195, 113, 1)' : 'rgba(255, 231, 105, 1)', color: 'rgba(70, 70, 70, 1)', fontWeight: 600, '&:hover': {backgroundColor: isSoldOut ? 'rgba(110, 195, 113, 1)' : 'rgba(255, 231, 105, 1)'} }}
          >
            {isSoldOut ? '품절 취소' : '품절'}
        </Button>
    </Card>
  );
};

export default MenuItem;
