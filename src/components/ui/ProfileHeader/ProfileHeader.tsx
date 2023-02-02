import React, { FC } from "react";

import Box from "@mui/material/Box";


import useAppSelector from "@/hooks/useAppSelector";

export const ProfileHeader: FC = () => {

  const profile = useAppSelector((state) => state.user.data);

  const hasCover = profile?.cover;

  return (
    <Box>
      {/* {hasCover ? <span>cover</span> : <Box />} */}
    </Box>
  );
};
