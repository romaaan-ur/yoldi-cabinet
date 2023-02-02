import React, { FC } from "react";

import CircularProgress  from "@mui/material/CircularProgress";
import Box from '@mui/material/Box';

export const Loader: FC = () => {
  return (
    <Box mx="auto" my="auto">
      <CircularProgress />
    </Box>
  );
};
