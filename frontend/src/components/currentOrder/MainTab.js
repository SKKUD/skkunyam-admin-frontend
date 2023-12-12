import React, { useState } from "react";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import OrderItem from "./OrderItem";
import { dummyOrders } from "../../dummyData/dummyOrders";

const MainTab = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const tabsInfo = [
    { label: "새로 들어온 주문!", index: 0 },
    { label: "진행중인 주문", index: 1, margin: "0 7px" },
    { label: "완료된 주문", index: 2 },
  ];

  return (
    <div>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        TabIndicatorProps={{ style: { backgroundColor: "transparent" } }}
        variant="fullWidth"
        sx={{
          ".MuiTab-root": {
            color: "gray",
            fontWeight: 700,
            "&.Mui-selected": {
              color: `rgba(114, 88, 39, 1)`,
            },
          },
        }}
      >
        {tabsInfo.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            sx={{
              backgroundColor:
                tabValue === tab.index
                  ? "rgba(255, 231, 105, 1)"
                  : "rgba(234, 234, 234, 1)",
              borderRadius: "4px 4px 0px 0px",
              margin: tab.margin || 0,
            }}
          />
        ))}
      </Tabs>
      <Box sx={{ backgroundColor: "rgba(234, 234, 234, 1)", p: "7px" }}>
        <Box
          sx={{
            textAlign: "center",
            borderRadius: "4px",
            backgroundColor: isOpened ? 'transparent' : "rgba(255, 255, 255, 1)",
            height: "calc(100vh - 200px)",
            overflowY: "scroll",
            WebkitOverflowScrolling: "touch",
            '&::-webkit-scrollbar': {
              width: "0em",
            },
          }}
        >
          {isOpened ? (
            <>
              {tabValue === 0 && (
                <div>
                  {dummyOrders.length !== 0 ? (
                    dummyOrders.map((order) => (
                      <OrderItem key={order.orderId} order={order} type="new"/>
                    ))
                  ) : (
                    <Typography>새로 들어온 주문이 없습니다.</Typography>
                  )}
                </div>
              )}
              {tabValue === 1 && (
                <div>
                  {dummyOrders.length !== 0 ? (
                    dummyOrders.map((order) => (
                      <OrderItem key={order.orderId} order={order} type="now"/>
                    ))
                  ) : (
                    <Typography>진행중인 주문이 없습니다.</Typography>
                  )}
                </div>
              )}
              {tabValue === 2 && (
                <div>
                  {dummyOrders.length !== 0 ? (
                    dummyOrders.map((order) => (
                      <OrderItem key={order.orderId} order={order} type="past"/>
                    ))
                  ) : (
                    <Typography>완료된 주문이 없습니다.</Typography>
                  )}
                </div>
              )}
            </>
          ) : (
            <>
              <div style={{ padding: "35% 0 10%" }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "rgba(85, 85, 85, 1)",
                    fontSize: "24px",
                  }}
                >
                  아직 가게를 오픈하지 않으셨어요!
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: "rgba(85, 85, 85, 1)",
                    fontSize: "14px",
                  }}
                >
                  아직 오픈 시간이 아니에요!
                </Typography>
              </div>
              <Button
                variant="contained"
                sx={{
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "rgba(255, 205, 77, 1)",
                  },
                  backgroundColor: "rgba(255, 205, 77, 1)",
                  color: "rgba(114, 88, 39, 1)",
                  borderRadius: "34px",
                  fontWeight: "bold",
                  p: "5px 20px",
                }}
                onClick={() => setIsOpened(true)}
              >
                일찍 오픈하기
              </Button>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default MainTab;
