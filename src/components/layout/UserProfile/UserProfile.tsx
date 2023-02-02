import { FC } from "react";

import Box from "@mui/material/Box";

interface Props {
  children: React.ReactNode;
}

export const UserProfile: FC<Props> = ({ children }) => {
  return (
    <Box
      maxWidth={800}
      width="100%"
      mx="auto"
      sx={{ padding: { xs: "0 30px" } }}
    >
      <Box display="flex" flexDirection="column" flex={1}>
        {children}
      </Box>
    </Box>
  );
};
