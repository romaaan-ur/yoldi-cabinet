import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  description: string;
  children?: React.ReactNode;
}

export const UserDescription: FC<Props> = ({ description, children }) => {
  return (
    <>
      <Box mt="30px" mb="60px" maxWidth={600} pr="10px">
        <Typography>{description}</Typography>
      </Box>
      <Box>{children}</Box>
    </>
  );
};
