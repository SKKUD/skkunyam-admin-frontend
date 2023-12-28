import React from 'react';
import TopNoticeItem from './TopNoticeItem';

const TopNotices = ({ notices, onNoticeClick }) => { 
    return (
        <div style={{padding: '15px 0 25px'}}>
            {notices.map((notice) => (
                <TopNoticeItem key={notice.id} notice={notice} onNoticeClick={onNoticeClick} />
            ))}
        </div>
    )
}

export default TopNotices;