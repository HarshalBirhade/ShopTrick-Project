import React from "react";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import "./CheckoutSteps.css";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <p>Shipping Details</p>,
      icon: <LocalShippingIcon />,
    },
    {
      label: <p>Confirm Order</p>,
      icon: <LibraryAddCheckIcon />,
    },
    {
      label: <p>Payment</p>,
      icon: <AccountBalanceIcon />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
  };

  return (
    <>
      <div>
        <Stepper
          className="stepper"
          alternativeLabel
          activeStep={activeStep}
          style={stepStyles}
        >
          {steps.map((item, index) => (
            <Step
              key={index}
              active={activeStep === index ? true : false}
              completed={activeStep >= index ? true : false}
            >
              <StepLabel
                style={{
                  color:
                    activeStep >= index ? "#12486B" : "rgba(0, 0, 0, 0.649)",
                }}
                icon={item.icon}
              >
                {item.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </>
  );
};

export default CheckoutSteps;
