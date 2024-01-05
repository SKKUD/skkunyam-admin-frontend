import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import MenuPopup from './MenuPopup';
import MenuItem from './MenuItem';
import { dummyMenus } from '../../dummyData/dummyMenus';

const ManageMenu = () => { 
    const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);

    const handleMenuPopupOpen = () => {
        setMenuPopupOpen(true);
    };

    const handleMenuPopupClose = () => {
        setMenuPopupOpen(false);
    };

    return (
        <>
            <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600 }}>메뉴관리</Typography>

            <div style={{backgroundColor: 'rgba(238, 238, 238, 1)', borderRadius: '4px', padding: '10px', margin: '10px 0'}}>
                <Grid container spacing={1} >
                    {dummyMenus.map((item) => (
                        <Grid key={item.id} item xs={12} sm={6}>
                            <MenuItem item={item} />
                        </Grid>
                    ))}
                </Grid>
            </div>

            <button onClick={handleMenuPopupOpen} style={{ width: '100%', border: '1px solid rgba(217, 216, 216, 1)', backgroundColor: 'rgba(238, 238, 238, 1)', color: 'rgba(102, 102, 102, 1)', fontWeight: 500, fontSize: 16, padding: '5px', borderRadius: '4px',  '&:hover': { backgroundColor: 'transparent' }, }}>+ 메뉴 추가하기</button>
            <MenuPopup open={isMenuPopupOpen} onClose={handleMenuPopupClose} />
        </>
    )
}

export default ManageMenu;