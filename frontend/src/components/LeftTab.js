import { useState } from "react";
import { Card, Typography, Divider, Grid, Button, Box } from "@mui/material";
import dummyImg from "../images/dummy1.png";
import currentBtnY from "../images/btn_currentOrder_y.png";
import currentBtnG from "../images/btn_currentOrder_g.png";
import salesBtnY from "../images/btn_manageSales_y.png";
import salesBtnG from "../images/btn_manageSales_g.png";
import storeBtnY from "../images/btn_manageStore_y.png";
import storeBtnG from "../images/btn_manageStore_g.png";
import noticeBtnY from "../images/btn_notice_y.png";
import noticeBtnG from "../images/btn_notice_g.png";

const LeftTab = () => {
  const labelStyle = {
    backgroundColor: "rgba(110, 195, 113, 1)",
    color: "#fff",
    padding: "2px 8px",
    fontSize: 13,
    fontWeight: 600,
    borderRadius: "4px",
  };

  const renderLabel = (text) => <Typography sx={labelStyle}>{text}</Typography>;

  const renderButton = (btnType, imgSrc) => (
    <Button
      onClick={() => handleBtnClick(btnType)}
      sx={{p: 0}}
    >
      <Box
        component="img"
        src={activeBtn === btnType ? imgSrc[0] : imgSrc[1]}
        alt={`${btnType}Btn`}
        width={"100%"}
      />
    </Button>
  );

  const [activeBtn, setActiveBtn] = useState("current");

  const handleBtnClick = (btnType) => {
    setActiveBtn(btnType);
  };

  return (
    <Card sx={{ p: "15px 20px", borderRadius: '4px', border: '1px solid rgba(217, 216, 216, 0.5)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', height: "calc(100vh - 150px)", }}>
      <img src={dummyImg} alt="cafeImg" width={"100%"} height={135} />

      <div style={{ margin: "12px 0" }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: 17, color: "rgba(70, 70, 70, 1)" }}
        >
          커피나무
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: 15,
            color: "rgba(102, 102, 102, 1)",
          }}
        >
          중앙학술정보관 지하 3층
        </Typography>
      </div>

      <Divider sx={{ m: "15px 0 20px" }} />

      <Grid container gap={"15px"}>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: 'center'
          }}
        >
          {renderLabel("즐겨찾기")}
          <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: 14, fontWeight: 700}}>50명</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: 'center'
          }}
        >
          {renderLabel("오늘 받은 주문")}
          <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: 14, fontWeight: 700}}>100건</Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: 'center'
          }}
        >
          {renderLabel("총 받은 주문")}
          <Typography sx={{color: 'rgba(70, 70, 70, 1)', fontSize: 14, fontWeight: 700}}>1,580건</Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ mt: "25px" }}>
        <Grid item>{renderButton("current", [currentBtnY, currentBtnG])}</Grid>
        <Grid item>{renderButton("sales", [salesBtnY, salesBtnG])}</Grid>
        <Grid item>{renderButton("store", [storeBtnY, storeBtnG])}</Grid>
        <Grid item>{renderButton("notice", [noticeBtnY, noticeBtnG])}</Grid>
      </Grid>
    </Card>
  );
};

export default LeftTab;
