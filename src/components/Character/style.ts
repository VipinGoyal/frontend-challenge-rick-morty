import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  box: {
    "&:hover": {
      backgroundColor: "yellow",
    },
    cursor: "pointer",
  },
  name: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "250px",
  },
}));
