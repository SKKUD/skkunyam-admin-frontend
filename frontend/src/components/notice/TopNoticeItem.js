import { Typography, Box } from "@mui/material";
import iconNotice from "../../images/icon_notice.png";

const TopNoticeItem = ({ notice }) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', bgcolor: 'rgba(238, 238, 238, 1)', p: '8px 20px', mt: '10px', gap: '15px', borderRadius: '4px'}}>
            <img src={iconNotice} alt="noticeIcon" width={22} height={22} />
            <Typography sx={{ fontSize: '13px', color: 'rgba(70, 70, 70, 1)' }}>{notice.title}</Typography>
        </Box>
    )
}

export default TopNoticeItem;