import React, { FC } from "react";

import Box from "@mui/system/Box";

import { Header, Footer } from "@/components/common";

interface Props {
  children: React.ReactNode;
}

export const NoAuth: FC<Props> = ({ children }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
