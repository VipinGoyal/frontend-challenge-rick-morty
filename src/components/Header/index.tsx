"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useStyles } from "./style";

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h3">Rick and Morty</Typography>
      </Toolbar>
    </AppBar>
  );
}
