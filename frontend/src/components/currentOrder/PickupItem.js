import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const PickupItem = ({ order }) => (
  <Box key={order.orderId} sx={{ textAlign: 'left', backgroundColor: '#fff', p: '10px 15px'}}>
    <Typography sx={{ fontSize: 18, color: 'rgba(110, 195, 113, 1)', fontWeight: 600 }}>{order.time} 픽업</Typography>

    <Grid sx={{ mt: '10px'}}>
      <Box sx={{ display: 'flex', pb: '10px', alignItems: 'center'}}>
        {order.menus.length > 0 && (
          <>
            {order.menus[0].temp ? (
              <span style={{ backgroundColor: order.menus[0].temp === "hot" ? 'rgba(255, 205, 77, 1)' : 'rgba(110, 195, 113, 1)', color: "#fff", padding: '5px 7px 5px 9px', marginRight: '10px', width: '15px', borderRadius: '20px' }}>
                {order.menus[0].temp === "hot" ? '따' : '아'}
              </span>
            )
              :
              <span style={{ backgroundColor: 'transparent', marginRight: '7px', width: '33px', height: '20px' }}>
              </span>
            }
            <Typography sx={{ fontWeight: 600 }}>{order.menus[0].name}</Typography>
          </>
        )}
      </Box>
    </Grid>

    {order.menus.length > 1 && (
      <>
        <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontSize: '12px' }}>
          외 {order.menus.length - 1}개 주문
        </Typography>
      </>
    )}

    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontSize: '12px' }}>
      결제완료 {order.price}원
    </Typography>
    <Typography sx={{ color: 'rgba(156, 156, 156, 1)',  fontSize: '12px' }}>
      {order.orderer}님
    </Typography>
  </Box>
);

export default PickupItem;
