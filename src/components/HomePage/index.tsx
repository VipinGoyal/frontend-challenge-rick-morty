"use client";

import React from "react";
import Header from "../Header";
import CharacterList from "@/components/CharacterList";
import useAllCharactersInfinite from "@/hooks/useAllCharactersInfinite";
import { Box, CircularProgress } from "@mui/material";
import { useStyles } from "./style";

const HomePage = () => {
  const { allCharacters, infiniteSrollRef, loading, hasNextPage } =
    useAllCharactersInfinite();
  const classes = useStyles();
  return (
    <>
      <Header />
      <CharacterList allCharacters={allCharacters} />
      <Box className={classes.loader}>
        {(hasNextPage || loading) && (
          <CircularProgress ref={infiniteSrollRef} />
        )}
      </Box>
    </>
  );
};

export default HomePage;
