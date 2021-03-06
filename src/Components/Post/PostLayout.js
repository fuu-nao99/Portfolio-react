import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  main: {
    marginTop: theme.spacing(3)
  }
}));
const PostLayout = props => {
  const classes = useStyles();
  return (
    <Container className="contact-container" maxWidth="sm">
      <CssBaseline />
      <h1>Contact</h1>
      <main className={classes.main}>{props.children}</main>
    </Container>
  );
};

export default PostLayout;
