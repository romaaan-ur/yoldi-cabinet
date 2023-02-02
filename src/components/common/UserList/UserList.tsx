import React, { FC } from "react";

import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";

import { User } from "./User";

import { IProfile } from "@/types";
import { Loader } from "@/components/ui";

interface Props {
  list: IProfile[] | undefined;
  isLoading: boolean;
}

export const UserList: FC<Props> = ({ isLoading, list }) => {
  if (isLoading) {
    return (
      <Stack spacing={2}>
        <Skeleton variant="rectangular" width="100%" height={70} />
        <Skeleton variant="rectangular" width="80%" height={70} />
        <Skeleton variant="rectangular" width="50%" height={70} />
      </Stack>
    );
  }

  return (
    <Box borderTop="1px solid" borderColor="strokeSecondary.main">
      {list?.map((item) => (
        <User key={item.email} item={item} />
      ))}
    </Box>
  );
};
