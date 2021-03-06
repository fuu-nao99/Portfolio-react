import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import PostLayout from "./PostLayout";
import SnackBar from "../Utils/SnackBar";
import PostForm from "./PostForm";
import ErrorButton from "../Utils/ErrorButton";
import {useWindowDimensions} from '../windowSize';



const useStyles = makeStyles(theme => ({
  backdrop: {
    color: "#fff"
  }
}));

const Contact = () => {

  const { width, height } = useWindowDimensions();

  const classes = useStyles();
  const [progress, setProgress] = useState(false);

  const [status, setStatus] = React.useState({
    open: false,
    type: "success",
    message: "成功しました。"
  });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStatus({ ...status, open: false });
  };

  let form = (
    <Backdrop className={classes.backdrop} open={progress}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
  if (!progress) {
    form = <PostForm setProgress={setProgress} setStatus={setStatus} />;
  }

  return (
    <div className="contact" id="contact" style={{ width: width, height: height*0.9 }}>
      <React.Fragment>
        <PostLayout>
          {form}
          <ErrorButton setStatus={setStatus} style={{ paddingBottom: "30px" }} />
        </PostLayout>
        <SnackBar
          open={status.open}
          handleClose={handleClose}
          type={status.type}
          message={status.message}
        />
      </React.Fragment>
    </div>
  );
};

export default Contact;
