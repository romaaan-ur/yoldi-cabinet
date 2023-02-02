import React, { FC } from "react";

import Image from "next/image";
import Box from "@mui/material/Box";

import logo from "./assets/logo.png";
import styles from "./Logo.module.css";
import { Typography } from "@mui/material";

export const Logo: FC = () => {
  return (
    <Box display="flex" alignItems="center">
      <Image
        src={logo}
        alt="YolDi logo"
        width={80}
        height={50}
        className={styles.logo}
      />
      <Typography
        variant="body1"
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        Разрабатываем и запускаем сложные веб проекты
      </Typography>
    </Box>
  );
};
