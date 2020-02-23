import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    maxWidth: "550px",
    maxHeight: "500px",
    padding: theme.spacing(1),
    margin: theme.spacing(2),
    width: "90%",
    height: "90%"
  }
}));

export default useStyles;
