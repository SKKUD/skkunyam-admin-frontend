import React from 'react';
import { Grid} from '@mui/material';
import ManageStoreInfo from './ManageStoreInfo';
import ManageMenu from './ManageMenu';

const StoreMainTab = () => {
    return (
        <Grid style={{ padding: '10px 20px' }}>
            {/* 가게 정보 수정 */}
            <ManageStoreInfo/>

            {/* 메뉴관리 */}
            <ManageMenu/>
        </Grid>
    );
}

export default StoreMainTab;
