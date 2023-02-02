import React, { FC } from "react";

import Box from "@mui/material/Box";
import { OutlinedTextFieldProps } from "@mui/material/TextField";

import { Input } from "@/components/ui";

interface Props extends Omit<OutlinedTextFieldProps, "variant"> {
  leftLabel: string;
}

export const HalfInput: FC<Props> = ({ leftLabel, ...props }) => {
  return (
    <Box display="flex">
      <Input
        label={leftLabel}
        disabled
        InputProps={{
          sx: {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            "&.Mui-disabled": {
              border: "1px solid",
              borderColor: "strokePrimary.main",
            },
          },
        }}
      />
      <Input
        {...props}
        InputProps={{
          sx: { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
        }}
      />
    </Box>
  );
};
