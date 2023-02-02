import React, { FC, useMemo } from "react";

import { useRouter } from "next/router";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { COLORS } from "../../../config/themeUtils";
import Link from "next/link";

export const Footer: FC = () => {
  const router = useRouter();

  const isSignIn = useMemo(
    () => router.pathname === "/login",
    [router.pathname]
  );

  const grayText = isSignIn ? "Eще нет аккаунта?" : "Уже есть аккаунт?";
  const actionText = isSignIn ? "Зарегистрироваться" : "Войти";

  const link = isSignIn ? "/register": "/login";

  return (
    <Box py="23px" display="flex" justifyContent="center" alignItems="center">
      <Typography
        variant="body1"
        sx={{
          color: COLORS.GRAY,
        }}
      >
        {grayText}{" "}
        <Link href={link}>
          <Typography variant="button" sx={{ color: COLORS.TEXT_COLOR }}>
            {actionText}
          </Typography>
        </Link>
      </Typography>
    </Box>
  );
};
