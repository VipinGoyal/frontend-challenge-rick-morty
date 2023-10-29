"use client";
import { createTheme } from "@mui/material";

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xl: 1500,
      lg: 1200,
      md: 900,
      sm: 600,
      xs: 0,
    },
  },
});

export default defaultTheme;
