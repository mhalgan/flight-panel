import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    textAlign: "left"
  },
  scheduledTime: {
    fontWeight: "bold",
    fontSize: "1.2em"
  },
  bold: {
    fontWeight: "bold"
  },

  divider: {
    float: "left",
    marginRight: theme.spacing(1)
  },
  delayedArrival: {
    textDecoration: "line-through",
    fontWeight: "normal"
  },
  moreDetails: {
    textAlign: "right",
    fontWeight: "bold",
    "& button": {
      color: green[500],
      textTransform: "none"
    }
  }
}));

export default useStyles;
