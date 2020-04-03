import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    marginTop: 40
  }
});

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" component="h4">
        Crypto Price Checker
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        Using the Cryptonator API
      </Typography>
    </div>
  );
}
