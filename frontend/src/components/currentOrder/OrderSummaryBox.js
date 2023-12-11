import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import todayOrderCount_20 from "../../images/todayOrderCount_20.png";

const OrderSummaryBox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="7px"
      bgcolor="rgba(234, 234, 234, 1)"
      p="7px"
      borderRadius={"4px"}
    >
      <Box display="flex" flexDirection="row" gap="7px">
        <Box component="img" src={todayOrderCount_20} flex="4" borderRadius={"4px"}></Box>
        <Box flex="8" bgcolor="rgba(117, 117, 117, 1)" borderRadius={"4px"} sx={{textAlign: 'center', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <Typography variant="body2" sx={{fontWeight: 700}}>밀린 주문</Typography>
          <Typography variant="h4" p={1}>0개</Typography>
          <Typography variant="body2" sx={{fontWeight: 700}}>아직 주문이 없어요</Typography>
        </Box>
      </Box>
      <Box bgcolor="#fff" height="77px" borderRadius={"4px"}  sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center',  padding: '5px 20px'}}>
        <Typography variant="body1" sx={{fontWeight: 700, color: 'rgba(87, 127, 89, 1)'}}>오늘 수익</Typography>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(114, 88, 39, 1)'}}>
          <Typography variant="h5" sx={{fontWeight: 700}}>3,000,000</Typography>
          <Typography variant="h5" sx={{fontWeight: 700}}>원</Typography>
        </div>
      </Box>
    </Box>
  );
};

export default OrderSummaryBox;
