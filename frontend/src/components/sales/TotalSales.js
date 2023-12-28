import { Typography } from '@mui/material';

const TotalSales = () => {
    return (
        <div className='container' style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '25px 0'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', border: '1px solid rgba(217, 216, 216, 1)', padding: '4px 20px'}}>
                <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 600 }}>오늘 총 매출</Typography>
                <Typography sx={{ color: 'rgba(110, 195, 113, 1)', fontSize: '26px', fontWeight: 700 }}>100,000 원</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', border: '1px solid rgba(217, 216, 216, 1)', padding: '4px 20px'}}>
                <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 600 }}>오늘 판매량</Typography>
                <Typography sx={{ color: 'rgba(110, 195, 113, 1)', fontSize: '26px', fontWeight: 700 }}>70 건</Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', border: '1px solid rgba(217, 216, 216, 1)', padding: '4px 20px'}}>
                <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 600 }}>전체 총 매출</Typography>
                <Typography sx={{ color: 'rgba(110, 195, 113, 1)', fontSize: '26px', fontWeight: 700 }}>30,000,000 원</Typography>
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#fff', border: '1px solid rgba(217, 216, 216, 1)', padding: '4px 20px'}}>
                <Typography sx={{ color: 'rgba(70, 70, 70, 1)', fontSize: '16px', fontWeight: 600 }}>전체 판매량</Typography>
                <Typography sx={{ color: 'rgba(110, 195, 113, 1)', fontSize: '26px', fontWeight: 700 }}>70,000 건</Typography>
            </div>
        </div>
    )
}

export default TotalSales;