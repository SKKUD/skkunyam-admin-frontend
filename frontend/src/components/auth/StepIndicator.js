import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["SNS 연동", "정보 입력", "완료"];

const StepIndicator = ({ step }) => {
  return (
    <Box sx={{ width: "100%"}}>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label, index) => (
          <Step
            key={label}
            sx={{
              "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                color: "rgba(177, 177, 177, 1)",
                fontWeight: 700,
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "rgba(255, 205, 77, 1)",
              },

              "& .MuiStepLabel-root .Mui-active ": {
                color: "rgba(110, 195, 113, 1)",
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepIndicator;
