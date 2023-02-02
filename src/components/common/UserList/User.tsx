import React, { FC } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { IProfile } from "@/types";
import { Avatar } from "@mui/material";
import Link from "next/link";

interface Props {
  item: IProfile;
}

export const User: FC<Props> = ({ item }) => {
  return (
    <Link href={`user/${item.slug}`}>
      <Box
        display="flex"
        py="11px"
        borderBottom="1px solid"
        borderColor="strokeSecondary.main"
      >
        <Avatar src={item.image?.url}>{item.name.charAt(0)}</Avatar>
        <Box display="flex" flexDirection="column" ml="20px">
          <Typography variant="button">{item.name}</Typography>
          <Typography variant="body1" color="gray.main">
            {item.email}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};
