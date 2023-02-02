import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";

interface Props {
  name: string;
  email: string;
  children?: React.ReactNode;
}

export const UserBio: FC<Props> = ({ name, email, children }) => {
  return (
    <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        sx={{ marginBottom: { xs: "10px" } }}
      >
        <Typography variant="h1" sx={{ marginBottom: "10px" }}>
          {name}
        </Typography>
        <Link href={`mailto:${email}`}>
          <Typography color="gray.main">{email}</Typography>
        </Link>
      </Box>
      {children}
    </Box>
  );
};
