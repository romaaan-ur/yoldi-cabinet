import React, { FC } from "react";

import Box from "@mui/system/Box";

import { Header } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{ marginBottom: { xs: "50px" } }}
    >
      <Header />
      {children}
    </Box>
  );
};
