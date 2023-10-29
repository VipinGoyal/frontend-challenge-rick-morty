import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  dialog: {
    textAlignLast: "center",
    textAlign: "center",
  },
  dialogTitle: {
    fontWeight: "bold",
  },
  characterContainer: {
    justifyContent: "center",
    color: "white",
  },
  box: {
    borderRadius: "0.5rem",
  },
  listBox: {
    "& span": {
      fontSize: "1.1rem",
    },
  },
  imgContainer: {
    "& img": {
      width: "100%",
      height: "100%",
    },
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    overflow: "hidden",
    margin: "0px auto",
  },
}));
