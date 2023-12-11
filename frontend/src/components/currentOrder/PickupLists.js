import React from "react";
import { Box } from "@mui/system";
import PickupItem from "./PickupItem"; 

const PickupLists = ({ orders }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="7px"
      bgcolor="rgba(234, 234, 234, 1)"
      p="7px"
      borderRadius={"4px"}
      m="20px 0"
    >
      {orders.map((order) => (
        <PickupItem key={order.orderId} order={order} />
      ))}
    </Box>
  );
};

export default PickupLists;
