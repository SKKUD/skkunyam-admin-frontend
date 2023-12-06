import React from "react";
import { Box, Typography, Divider } from "@mui/material";

const OrderItem = ({ order }) => (
  <Box key={order.orderId} sx={{ textAlign: 'left', backgroundColor: '#fff', p: '20px', mb: '10px' }}>
    <Typography sx={{ fontSize: 20, color: 'rgba(110, 195, 113, 1)', fontWeight: 600 }}>{order.time} 주문</Typography>

    <Box sx={{ mt: '10px' }}>
      {order.menus.map((menu, menuIndex) => (
        <Box key={menuIndex} sx={{ display: 'flex', pb: '10px' }}>
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
        </Box>
      ))}
    </Box>

    <Divider sx={{ my: '10px' }} />

    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 600, fontSize: '14px' }}>주문 번호 {order.orderId}</Typography>
    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 600, fontSize: '14px' }}>결제완료 {order.price}원</Typography>
    <Typography sx={{ color: 'rgba(156, 156, 156, 1)', fontWeight: 400, fontSize: '14px' }}>{order.orderer}님</Typography>
  </Box>
);

export default OrderItem;
