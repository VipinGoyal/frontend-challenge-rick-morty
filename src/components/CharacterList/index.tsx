"use client";

import React, { useCallback, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Character from "@/components/Character";
import CharacterDetails from "@/components/CharacterDetails";
import { ICharacterDetail } from "@/components/CharacterDetails/types";
import { ICharacterList } from "./types";

const CharacterList = (props: ICharacterList) => {
  const { allCharacters } = props;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogData, setDialogData] = useState<ICharacterDetail>();

  const onClickHandler = useCallback((itemDetails: ICharacterDetail) => {
    setDialogData(itemDetails);
    setDialogOpen(true);
  }, []);

  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <Grid
      mt={1}
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      disableEqualOverflow
      sx={{ marginTop: "5rem" }}
    >
      {allCharacters.map((item, index) => {
        return (
          <Character
            key={index}
            item={item}
            onCharacterClick={onClickHandler}
          />
        );
      })}
      <CharacterDetails
        dialogOpen={dialogOpen}
        onDialogClose={handleClose}
        dialogData={dialogData!}
      />
    </Grid>
  );
};
export default CharacterList;
