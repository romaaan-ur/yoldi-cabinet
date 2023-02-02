import "@mui/material/styles";

    
declare module "@mui/material/styles" {
  interface Palette {
    backgroundPrimary: Palette["primary"];
    backgroundSecondary: Palette["primary"];
    strokePrimary: Palette["primary"];
    strokeSecondary: Palette["primary"];
    gray: Palette["primary"];
  }
  interface PaletteOptions {
    backgroundPrimary?: PaletteOptions["primary"];
    backgroundSecondary?: PaletteOptions["primary"];
    strokePrimary?: PaletteOptions["primary"];
    strokeSecondary?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true,
    secondary: true,
  }
}