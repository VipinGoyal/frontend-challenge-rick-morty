"use client";

import Grid from "@mui/material/Unstable_Grid2";
import React, { useCallback } from "react";
import Image from "next/image";
import { useStyles } from "./style";
import { ICharacter } from "./types";

const Character = (props: ICharacter) => {
  const { item, onCharacterClick } = props;
  const classes = useStyles();

  const onClickHandler = useCallback(() => {
    onCharacterClick(item);
  }, [item, onCharacterClick]);

  return (
    <Grid spacing={4}>
      <div
        data-testid={`box-${item?.id}`}
        className={classes.box}
        onClick={onClickHandler}
      >
        <Image
          data-testid={`img-${item?.id}`}
          src={item?.image}
          alt={item?.name}
          width={250}
          height={250}
        />
        <div className={classes.name}>{item?.name}</div>
      </div>
    </Grid>
  );
};

export default Character;
