import React, { FC, useCallback, useState } from "react";

import { Input, LockIcon, EyeIcon, EyeSlashIcon } from "@/components/ui";
import InputAdornment from "@mui/material/InputAdornment";
import { OutlinedTextFieldProps } from "@mui/material/TextField";

interface Props extends Omit<OutlinedTextFieldProps, "variant"> {}

export const PasswordField: FC<Props> = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(
    () => setShowPassword(!showPassword),
    [showPassword]
  );

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LockIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            onClick={handleShowPassword}
            sx={{ cursor: "pointer" }}
          >
            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
          </InputAdornment>
        ),
      }}
    />
  );
};
