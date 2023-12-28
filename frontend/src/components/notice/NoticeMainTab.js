import React, {useState} from "react";
import { Typography, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { dummyTopNotices, dummyBottomNotices } from "../../dummyData/dummyNotices";
import TopNotices from "./TopNotices";
import BottomNoticesTable from "./BottomNoticesTable";
import NoticeDetail from "./NoticeDetail";

const NoticeMainTab = () => {
    const [page, setPage] = useState(0);
    const [selectedNotice, setSelectedNotice] = useState(null);

    const handleChangePage = (e, newPage) => {
        setPage(newPage);
    };

    const handleNoticeClick = (notice) => {
        console.log(notice.title);
        setSelectedNotice(notice);
    };

    const handleResetSelectedNotice = () => {
        setSelectedNotice(null);
    };

    
    return (
        <div style={{ padding: '10px 20px'}}>
            {
                selectedNotice !== null ? 
                (
                    <>
                        <NoticeDetail notice={selectedNotice} onPrevClick={handleResetSelectedNotice}/>
                    </>
                )
                :
                (
                    <>
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

                        <TopNotices notices={dummyTopNotices} onNoticeClick={handleNoticeClick} />

                        <Grid sx={{height: '50vh', overflow: 'scroll'}}>
                            <BottomNoticesTable
                                notices={dummyBottomNotices}
                                page={page}
                                handleChangePage={handleChangePage}
                                onNoticeClick={handleNoticeClick} 
                            />
                        </Grid>
                    </>
                )
            }
        </div>
    )
}

export default NoticeMainTab;