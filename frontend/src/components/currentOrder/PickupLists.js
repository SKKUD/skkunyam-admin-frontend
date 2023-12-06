import { Box } from "@mui/system";

const PickupLists = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="7px"
      bgcolor="rgba(234, 234, 234, 1)"
      p="7px"
      borderRadius={"4px"}
      overflow="auto"
      m="20px 0"
      fullWidth
    >
      <Box bgcolor="#fff" height={150} borderRadius={"4px"}></Box>
      <Box bgcolor="#fff" height={150} borderRadius={"4px"}></Box>
      {/* <Box bgcolor="#fff" height={158} borderRadius={"4px"} textAlign={"center"}>
        아직 오픈 시간이 아니에요!
      </Box> */}
    </Box>
  );
};

export default PickupLists;
