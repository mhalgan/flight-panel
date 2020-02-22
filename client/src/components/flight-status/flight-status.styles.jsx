import { makeStyles } from "@material-ui/core/styles";
import { green, amber } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  chip: {
    padding: theme.spacing(1),
    borderRadius: "4px",
    backgroundColor: green[500],
    fontWeight: 500
  },
  delayed: {
    backgroundColor: amber[500],
    color: "rgba(0, 0, 0, 0.87)"
  }
}));

export default useStyles;
