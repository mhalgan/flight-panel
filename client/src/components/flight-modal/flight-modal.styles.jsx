import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    maxWidth: "550px",
    maxHeight: "470px",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    width: "90%",
    height: "90%"
  },
  actions: {
    display: "flex"
  },
  button: {
    marginLeft: "auto"
  }
}));

export default useStyles;
