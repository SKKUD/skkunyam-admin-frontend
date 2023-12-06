import Header from "../components/Header";
import LeftTab from "../components/LeftTab";
import MainTab from "../components/currentOrder/MainTab";
import RightTab from "../components/currentOrder/RightTab";
import { Grid } from "@mui/material";
import { Navigate } from 'react-router-dom';

const Home = ({ isLogin }) => {
  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />

      <Grid
        container
        sx={{
          width: "80%",
          m: "55px 10% 0",
          p: "30px 0",
          justifyContent: "center",
        }}
        gap={3}
      >
        <Grid item xs={2.7}>
          <LeftTab />
        </Grid>
        <Grid item xs={5.5}>
          <MainTab />
        </Grid>
        <Grid item xs={2.8}>
          <RightTab />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
