import React, {useState} from "react";
import { Typography, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { dummyTopNotices, dummyBottomNotices } from "../../dummyData/dummyNotices";
import TopNotices from "./TopNotices";
import BottomNoticesTable from "./BottomNoticesTable";

const NoticeMainTab = () => {
    const [page, setPage] = useState(0);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };
    
    return (
        <div style={{ padding: '10px 20px'}}>
            {/* Header */}
            <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: '28px', fontWeight: 600}}>공지사항</Typography>
                <TextField variant="outlined" size="small"
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                        ),
                    }}
                    sx={{width: '250px', backgroundColor: '#fff'}}
                />
            </Grid>

            {/* Top Notice */}
            <TopNotices notices={dummyTopNotices} />

            {/* Bottom Notice */}
            <Grid sx={{height: '50vh', overflow: 'scroll'}}>
                <BottomNoticesTable
                    notices={dummyBottomNotices}
                    page={page}
                    handleChangePage={handleChangePage}
                />
            </Grid>
        </div>
    )
}

export default NoticeMainTab;