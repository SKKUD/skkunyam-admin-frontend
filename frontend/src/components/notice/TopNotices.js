import React from 'react';
import TopNoticeItem from './TopNoticeItem';

const TopNotices = ({ notices }) => { 
    return (
        <div style={{padding: '15px 0 25px'}}>
            {notices.map((notice) => (
                <TopNoticeItem key={notice.id} notice={notice} />
            ))}
        </div>
    )
}

export default TopNotices;