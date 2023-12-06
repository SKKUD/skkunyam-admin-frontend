import React, {useState} from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Header from "../components/Header";
import StepIndicator from "../components/auth/StepIndicator";
import SignUpForm from "../components/auth/SignUpForm";
import FinishSignUp from "../components/auth/FinishSignUp";

const SignUp = ({setIsLogin}) => {
    const [step, setStep] = useState(2);

  return (
    <Grid container sx={{ backgroundColor: "rgba(255, 251, 229, 1)", height: "100vh", overflow: 'scroll'  }}>
        <Header isLogin={false} />

        {
            step === 2 ?
            <SignUpForm step={step} setStep={setStep}/>
            : (
                step === 3 && 
                <FinishSignUp step={step} setIsLogin={setIsLogin}/>
            )
        }
    </Grid>
  );
};

export default SignUp;
