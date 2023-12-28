import React from "react";
import { Box, Typography } from "@mui/material";
import PickupItem from "./PickupItem"; 

const PickupLists = ({ orders }) => {
  // const orders = [];

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="7px"
      height={"100%"}
      overflow={"scroll"}
      sx={{
        WebkitOverflowScrolling: "touch",
        '&::-webkit-scrollbar': {
          width: "0",
        },
      }}
    >
      {orders.length !== 0 ? (
        orders.map((order) => (
          <PickupItem key={order.orderId} order={order} />
        ))
      ) : (
        <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 1)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{color: 'rgba(117, 117, 117, 1)', fontWeight: 600, fontSize: '14px'}}>아직 주문이 없습니다.</Typography>
        </Box>
      )}
    </Box>
  );
};

export default PickupLists;
