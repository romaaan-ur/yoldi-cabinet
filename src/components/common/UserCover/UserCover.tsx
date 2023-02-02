import React, { FC, useMemo } from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';

import useAppSelector from "@/hooks/useAppSelector";

import { IProfile } from "@/types";

interface Props {
  data?: IProfile | undefined;
}

export const UserCover: FC<Props> = ({ data }) => {
  const profile = useAppSelector((state) => state.user.data);

  const cover = useMemo(() => {
    if (data?.cover) {
      return {
        alt: data.slug,
        src: data.cover?.url || "",
        width: parseInt(data.cover?.width || "0"),
        height: parseInt(data.cover?.height || "0"),
      };
    }
    if (profile?.cover) {
      return {
        alt: profile.slug,
        src: profile.cover?.url || "",
        width: parseInt(profile.cover?.width || "0"),
        height: parseInt(profile.cover?.height || "0"),
      };
    }
    return null;
  }, [data, profile]);

  return (
    <Box
      width="100%"
      height={200}
      bgcolor={"backgroundSecondary.main"}
      borderBottom="1px solid"
      borderColor="strokeSecondary.main"
      position="relative"
      mb="85px"
    >
      {cover && (
        <Box position="absolute" width="100%" height={200}>
          <Image
            alt={cover.alt}
            src={cover.src}
            width={cover.width}
            height={200}
            placeholder="empty"
            style={{ width: "100%" }}
            // fill={true}
          />
        </Box>
      )}

      <Box
        position="relative"
        maxWidth={800}
        width="100%"
        mx="auto"
        paddingTop="150px"
        paddingLeft="30px"
        paddingRight="30px"
      >
        <Avatar
          src={data ? data?.image?.url : profile?.image?.url}
          sx={{
            width: 100,
            height: 100,
            fontSize: 36,
            borderColor: "strokeSecondary.main",
          }}
        >
          {data ? data.name.at(0) : profile?.name.at(0)}
        </Avatar>
      </Box>
    </Box>
  );
};
