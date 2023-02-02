import React, { FC } from "react";

import MuiTextField, { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends Omit<OutlinedTextFieldProps, "variant"> {}

export const Input: FC<Props> = ({
  ...props
}) => {
  return (
    <MuiTextField
      variant="outlined"
      {...props}
    />
  );
};
