import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import Controls from "../controls";

import { Gjinia } from "../../../../app/models/Gjinia";
import GjiniaForm from "../form/GjiniaForm";

const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function PopUp(props: {
  title: any;
  children: any;
  openPopup: any;
  setOpenPopup: any;
}) {
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Controls.ActionButton
            color="secondary"
            onClick={() => {
              setOpenPopup(false);
            }}
          >
            <CloseIcon />
          </Controls.ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <GjiniaForm />
      </DialogContent>
    </Dialog>
  );
}
