import { AppBar, Button, Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar elevation={0} sx={{ backgroundColor: 'rgba(70, 70, 70, 1)', alignItems: 'center' }}>
      <Grid container justifyContent="space-between" alignItems="center" sx={{height: 55, width: '77%'}}>
        <Grid item>
          <Grid container direction="row" alignItems="center" gap={3}>
            <Typography sx={{ color: 'white', fontSize: 24, fontWeight: 700 }}>
              SKKUNYAM
            </Typography>
            <Typography sx={{ color: 'white', fontSize: 14, fontWeight: 700 }}>
              성균관대학교 오더 서비스 스꾸냠입니다!
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={2}>
            <Grid item>
              <Button sx={{ color: 'white', fontSize: 14, fontWeight: 700 }}>고객센터</Button>
            </Grid>
            <Grid item>
              <Button sx={{ color: 'white', fontSize: 14, fontWeight: 700 }}>로그아웃</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
