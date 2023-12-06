import React from "react";
import { Box } from "@mui/system";

const OrderSummaryBox = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="7px"
      bgcolor="rgba(234, 234, 234, 1)"
      p="7px"
      borderRadius={"4px"}
      fullWidth
    >
      <Box display="flex" flexDirection="row" gap="7px" height="142px">
        <Box flex="4" bgcolor="#fff" borderRadius={"4px"}></Box>
        <Box flex="8" bgcolor="#fff" borderRadius={"4px"}></Box>
      </Box>
      <Box bgcolor="#fff" height="77px" borderRadius={"4px"}></Box>
    </Box>
  );
};

export default OrderSummaryBox;
