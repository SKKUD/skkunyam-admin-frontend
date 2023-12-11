import React from "react";
import { Box, Typography, Divider, Button, Grid } from "@mui/material";

const OrderItem = ({ order }) => (
  <Box key={order.orderId} sx={{ textAlign: 'left', backgroundColor: '#fff', p: '20px', mb: '10px' }}>
    <Typography sx={{ fontSize: 20, color: 'rgba(110, 195, 113, 1)', fontWeight: 600 }}>{order.time} 주문</Typography>

    <Grid container sx={{ mt: '10px'}}>
      {order.menus.map((menu, menuIndex) => (
        <Grid item xs={9} key={menuIndex} sx={{ display: 'flex', pb: '10px'}}>
          {menu.temp ? (
            <span style={{ backgroundColor: menu.temp === "hot" ? 'rgba(255, 205, 77, 1)' : 'rgba(110, 195, 113, 1)', color: "#fff", padding: '2px 5px', marginRight: '7px', width: '15px', height: '20px' }}>
              {menu.temp === "hot" ? '따' : '아'}
            </span>
          )
            :
            <span style={{ backgroundColor: 'transparent', marginRight: '7px', width: '33px', height: '20px' }}>
            </span>
          }
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: menu.temp ? '8px' : '0' }}>
            <Typography sx={{ fontWeight: 600 }}>{menu.name}</Typography>
            <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)' }}>{menu.options.join(", ")}</Typography>
          </Box>
        </Grid>
      ))}

      <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
        <Button sx={{backgroundColor: 'rgba(255, 205, 77, 1)', color: 'rgba(114, 88, 39, 1)', p: '3px 15px'}}>주문받기</Button>
        <Button sx={{backgroundColor: 'rgba(70, 70, 70, 1)', color: 'rgba(255, 205, 77, 1)', p: '3px 15px', mb: '5px'}}>거절하기</Button>
      </Grid>
    </Grid>

    <Divider sx={{ my: '10px' }} />

    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 600, fontSize: '14px' }}>주문 번호 {order.orderId}</Typography>
    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 600, fontSize: '14px' }}>결제완료 {order.price}원</Typography>
    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 400, fontSize: '14px' }}>{order.orderer}님</Typography>
  </Box>
);

export default OrderItem;
