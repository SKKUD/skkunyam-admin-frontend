import React, { useState } from "react";
import Header from "../components/Header";
import LeftTab from "../components/LeftTab";
// current Order
import MainTab from "../components/currentOrder/MainTab";
import RightTab from "../components/currentOrder/RightTab";
// notice
import NoticeMainTab from "../components/notice/NoticeMainTab";
import { Box, Grid, Typography } from "@mui/material";
import { Navigate } from 'react-router-dom';

const Home = ({ isLogin }) => {
  const [activeTab, setActiveTab] = useState("current"); 

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  if (!isLogin) {
    return <Navigate to="/auth" />;
  }

  return (
    <div style={{backgroundColor: 'rgba(249, 249, 249, 1)'}}>
      <Header />

      <Grid
        container
        sx={{
          width: "80%",
          m: "auto",
          mt: "55px",
          p: "30px 0",
          justifyContent: "center",
          maxWidth: '1170px'
        }}
        gap={3}
      >
        <Grid item xs={2.7}>
          <LeftTab activeTab={activeTab} onTabChange={handleTabChange}/>
        </Grid>
        {
          activeTab === "current" ? (
            <>
              <Grid item xs={5.5}>
                <MainTab />
              </Grid>
              <Grid item xs={2.8}>
                <RightTab />
              </Grid>
            </>
          )
          :
          (
            <Grid item xs={8.3}>
              {activeTab === 'notice' && <NoticeMainTab />}
            </Grid>
          )
        }

          {/* {activeTab === "current" && <MainTab />}
          {activeTab === "sales" && <SalesTab />}
          {activeTab === "store" && <StoreTab />}
          {activeTab === "notice" && <NoticeTab />} */}
      </Grid>
    </div>
  );
};

export default Home;
