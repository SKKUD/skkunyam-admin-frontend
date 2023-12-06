import { Grid, Typography } from '@mui/material';
import StepIndicator from './StepIndicator';
import { useNavigate } from 'react-router-dom';

const FinishSignUp = ({step, setIsLogin}) => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate('/');
        setIsLogin(true);
    }

    return (
        <>

            <Grid sx={{ mt: "55px", width: "100%", backgroundColor: "rgba(255, 205, 77, 1)", height: "35%" }}>
                <h1 style={{ textAlign: "center", color: "#fff" }}>이미지 추가 예정</h1>
            </Grid>

            <Grid sx={{ width: "100%", p: '3% 35%' }}>
                <StepIndicator step={step} />
            </Grid>

            <Grid sx={{ width: "100%", justifyContent: "center", textAlign: "center" }}>
                <Typography sx={{ color: "rgba(70, 70, 70, 1)", fontWeight: 700, fontSize: 32, lineHeight: "42px" }}>
                가입이 완료되었습니다!
                </Typography>
                <Typography sx={{ color: "rgba(70, 70, 70, 1)", m: "15px 0 25px", fontSize: 18 }}>
                스꾸냠에서 받은 오더와 매출 관리를 도와드릴게요
                </Typography>

                <button onClick={handleBtnClick} style={{margin: 25, border: 0, padding: 10, borderRadius: 4, fontSize: '21px', lineHeight: '22px', fontWeight: 700, backgroundColor: 'rgba(255, 231, 105, 1)', color: 'rgba(114, 88, 39, 1)', width: '30%', maxWidth: 586}}>가게 관리하러 가기</button>
            </Grid>
        </>
    )
}

export default FinishSignUp;