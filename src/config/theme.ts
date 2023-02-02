import { createTheme } from "@mui/material/styles";

import { COLORS, FONT_SIZE, FONT_WEIGHT } from "./themeUtils";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: FONT_SIZE.title,
      fontWeight: FONT_WEIGHT.title,
    },
    subtitle1: {
      fontSize: FONT_SIZE.subtitle,
      fontWeight: FONT_WEIGHT.subtitle,
    },
    body1: {
      fontSize: FONT_SIZE.paragraph,
      fontWeight: FONT_SIZE.paragraph,
    },
    body2: {
      fontSize: FONT_SIZE.paragraphMini,
      fontWeight: FONT_SIZE.paragraphMini,
    },
    button: {
      textTransform: "none",
      fontSize: FONT_SIZE.buttonText,
      fontWeight: FONT_WEIGHT.buttonText,
    },
  },
  palette: {
    primary: {
      main: COLORS.TEXT_COLOR,
    },
    error: {
      main: COLORS.ERROR,
    },
    text: {
      primary: COLORS.TEXT_COLOR,
    },
    backgroundPrimary: {
      main: COLORS.BACKGROUND_PRIMARY,
    },
    backgroundSecondary: {
      main: COLORS.BACKGROUND_SECONDARY,
    },
    strokePrimary: {
      main: COLORS.STROKES_PRIMARY,
    },
    strokeSecondary: {
      main: COLORS.STROKES_SECONDARY,
    },
    gray: {
      main: COLORS.GRAY,
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: 0,
          "&:-webkit-autofill": {
            transitionDelay: "9999s",
          },
        },
        root: ({ theme: { palette } }) => ({
          borderRadius: 5,
          height: 50,
          padding: "12px 20px",
          border: "1px solid",
          borderColor: palette.strokePrimary.main,
          "&:hover": {
            borderColor: palette.gray.main,
            "& > fieldset": {
              borderColor: palette.gray.main,
            },
          },
          "&.Mui-focused": {
            borderColor: palette.gray.main,
            "& > fieldset": {
              borderColor: palette.gray.main,
            },
          },
          "&.Mui-disabled": {
            backgroundColor: palette.backgroundSecondary.main,
            color: palette.gray.main,
            WebkitTextFillColor: palette.gray.main,
            border: "none",
          },
        }),
        notchedOutline: {
          display: "none",
        },
        error: ({ theme: { palette } }) => ({
          border: "1px solid",
          borderColor: palette.error.main,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          borderRadius: 5,
          "&.Mui-disabled": {
            backgroundColor: palette.strokePrimary.main,
            color: palette.backgroundSecondary.main,
          },
        }),
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: COLORS.BACKGROUND_PRIMARY,
            backgroundColor: COLORS.TEXT_COLOR,
            padding: "12px 33px",
            height: 50,
            "&:hover": {
              backgroundColor: COLORS.TEXT_COLOR,
            },
            "&:focus": {
              backgroundColor: COLORS.TEXT_COLOR,
            },
          },
        },
        {
          props: { variant: "secondary" },
          style: {
            color: COLORS.TEXT_COLOR,
            backgroundColor: COLORS.BACKGROUND_PRIMARY,
            border: `1px solid ${COLORS.STROKES_PRIMARY}`,
            padding: "7px 33px",
            height: 40,
            "&:hover": {
              backgroundColor: COLORS.BACKGROUND_PRIMARY,
              border: `1px solid ${COLORS.GRAY}`,
            },
            "&:focus": {
              backgroundColor: COLORS.BACKGROUND_PRIMARY,
              border: `1px solid ${COLORS.GRAY}`,
            },
          },
        },
      ],
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme: { palette } }) => ({
          width: 50,
          height: 50,
          color: `${palette.text.primary}`,
          backgroundColor: `${palette.backgroundSecondary.main}`,
          border: "1px solid",
          borderColor: `${palette.backgroundSecondary.main}`,
          fontSize: 18,
          fontWeight: 400,
        }),
      },
    },
    MuiModal: {
      defaultProps: {
        sx: {
          top: {
            // xs: "80px"
          },
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

export default theme;
