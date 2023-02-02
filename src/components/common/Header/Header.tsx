import React, { FC } from "react";

import { useRouter } from "next/router";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from '@mui/material/Avatar';
import Typography  from "@mui/material/Typography";

import useAppSelector from "@/hooks/useAppSelector";

import { Logo, Button } from "@/components/ui";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getUser } from "@/store/slice/userSlice";

export const Header: FC = () => {
  const router = useRouter();

  const handleSignIn = () => router.push("/login");

  const profile = useSelector(getUser);

  return (
    <Box
      px="20px"
      py="15px"
      borderBottom="1px solid"
      borderColor="strokeSecondary.main"
    >
      <Grid container justifyContent="space-between" maxWidth={1220} mx="auto">
        <Grid item lg={3.5} xs={4}>
          <Link href="/">
            <Logo />
          </Link>
        </Grid>
        <Grid
          item
          xs={2}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
        >
          {profile ? (
            <Box display="flex" alignItems="center">
              <Typography variant="body1">{profile.name}</Typography>
              <Box ml="20px">
                <Avatar src={profile.image?.url}>
                  {profile.name.charAt(0)}
                </Avatar>
              </Box>
            </Box>
          ) : (
            <Button variant="secondary" label="Войти" onClick={handleSignIn} />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
