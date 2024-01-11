import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Typography, Divider, Box } from "@mui/material";
import { calculateCompletionTime } from "../../utils/calculateTime";

const OrderAcceptPopup = ({ actionType, isOpened, onClose, onAccept, onReject, onCheck, orderInfo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAction = () => {
    if (actionType === "accept") {
      onAccept(inputValue);
    } else if (actionType === "reject") {
      onReject(inputValue);
    } else {
      onCheck();
    }
    setInputValue(""); 
    onClose();
  };

  const handleClose = () => {
    setInputValue("");
    onClose();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const renderTextField = (placeholder) => (
    <TextField
      label=""
      placeholder={placeholder}
      inputProps={{ style: { fontSize: 13, padding: '10px 20px' } }}
      fullWidth
      value={inputValue}
      onChange={handleInputChange}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            borderColor: 'rgba(255, 205, 77, 1)',
          },
        },
        backgroundColor: 'rgba(255, 251, 229, 1)'
      }}
    />
  );

  const renderActionButton = (label, backgroundColor, color) => (
    <Button
      fullWidth
      onClick={label === "닫기" ? handleClose : handleAction}
      sx={{ backgroundColor, color, borderRadius: 0, p: '12px', fontWeight: 700, fontSize: 16 }}
    >
      {label}
    </Button>
  );
  
  return (
    <Dialog open={isOpened} onClose={handleClose} >
      <DialogTitle sx={{ p: 6, textAlign: 'center', fontWeight: 600, fontSize: 28 }}>
        {actionType === "accept" && "주문 받을게요!"}
        {actionType === "reject" && "주문 거절하시겠어요?"}
        {actionType === "check" && "완료된 주문 확인"}
      </DialogTitle>
      <DialogContent sx={{ p: 6 }}>
        <Typography sx={{ fontSize: 16, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>주문메뉴</Typography>
        <Divider sx={{ my: '10px' }} />
        {orderInfo && (
          <div style={{ margin: '0 0 40px 0' }}>
            {orderInfo.menus.map((menu, index) => (
              <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
                <div style={{ flex: 1, marginRight: '30px' }}>
                  <Typography sx={{ fontSize: 16, color: 'rgba(34, 34, 34, 1)', fontWeight: 600 }}>
                    {menu.name}
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: 'rgba(156, 156, 156, 1)' }}>
                    {menu.options.join(", ")}
                  </Typography>
                </div>
                <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)', fontWeight: 600 }}>
                  4,500원
                </Typography>
                <Divider sx={{ my: '10px' }} />
              </Box>
            ))}
          </div>
        )}
        {actionType === "accept" ? (
          <>
            <Typography sx={{ fontSize: 16, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>걸리는 시간</Typography>
            <Divider sx={{ my: '10px' }} />
            {renderTextField("소요시간을 입력해주세요")}
          </>
        ) : actionType === "reject" ? (
          <>
            <Typography sx={{ fontSize: 16, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>취소사유</Typography>
            <Divider sx={{ my: '10px' }} />
            {renderTextField("취소사유를 입력해주세요")}
          </>
        ) : (
          <>
            <Typography sx={{ fontSize: 16, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>주문확인</Typography>
            <Divider sx={{ my: '10px' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>조리완료시간</Typography>
                <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>{orderInfo && calculateCompletionTime(orderInfo.time)}</Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>결제시간</Typography>
                <Typography sx={{ fontSize: 14, color: 'rgba(70, 70, 70, 1)', fontWeight: 700 }}>{orderInfo && orderInfo.time}</Typography>
              </div>
            </div>
          </>
        )}
      </DialogContent>
      <DialogActions sx={{ display: 'flex', justifyContent: 'space-between', p: 0, mt: 3 }}>
        {
          actionType === "check" ?
          <div style={{ flex: 1, margin: 0 }}>
            {renderActionButton("닫기", 'rgba(255, 205, 77, 1)', 'rgba(70, 70, 70, 1)')}
          </div>
          :
          <>
            <div style={{ flex: 2, margin: 0 }}>
              {actionType === "accept" ?
                renderActionButton("주문받기", 'rgba(255, 205, 77, 1)', 'rgba(70, 70, 70, 1)') :
                renderActionButton("주문취소", 'rgba(255, 205, 77, 1)', 'rgba(70, 70, 70, 1)')}
            </div>
            <div style={{ flex: 1, margin: 0 }}>
              {renderActionButton("닫기", 'rgba(70, 70, 70, 1)', 'rgba(255, 231, 105, 1)')}
            </div>
          </>
        }
      </DialogActions>
    </Dialog>
  );
};

export default OrderAcceptPopup;
