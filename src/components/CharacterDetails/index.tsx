"use client";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { ICharacterDetails } from "./types";
import { useStyles } from "./style";

const CharacterDetails = (props: ICharacterDetails) => {
  const { dialogOpen, dialogData, onDialogClose } = props;
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const {
    name = "",
    image = "",
    status = "",
    gender,
    species,
    location,
    origin,
  } = dialogData || {};

  if (!dialogData || Object.keys(dialogData).length === 0) {
    return null;
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialogOpen}
      onClose={onDialogClose}
      aria-labelledby="character-details"
      className={classes.dialog}
    >
      <DialogTitle id="character-details" className={classes.dialogTitle}>
        {"Character Details"}
      </DialogTitle>
      <DialogContent>
        <Grid className={classes.box}>
          <Box className={classes.imgContainer}>
            <Image width={100} src={image} alt={name} height={100} />
          </Box>
          <List className={classes.listBox} dense={true}>
            <ListItem>
              <ListItemText>
                <strong>Name:</strong> {name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Status:</strong> {status}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Gender:</strong> {gender}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Species:</strong> {species}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Location:</strong> {location?.name}
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <strong>Originally From:</strong> {origin?.name}
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          data-test-id="close-dialog-button"
          autoFocus
          onClick={onDialogClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default CharacterDetails;
