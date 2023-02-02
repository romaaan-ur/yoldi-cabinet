import React, { FC } from "react";

import MuiButton from "@mui/material/Button";
import { ButtonBaseProps } from "@mui/material";

interface Props extends Omit<ButtonBaseProps, "color"> {
  label: string;
  variant?: "primary" | "secondary"
  startIcon?: React.ReactNode
}

export const Button: FC<Props> = ({ label, variant = "primary", startIcon, ...props }) => {
  return <MuiButton {...props} variant={variant} startIcon={startIcon}>{label}</MuiButton>;
};
