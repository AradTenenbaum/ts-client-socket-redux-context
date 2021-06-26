import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";

const SnackBar = ({
  open,
  setOpen,
  severity,
  text
}: {
  open: boolean;
  setOpen: Function;
  severity: ("success" | "error" | "warning" | "info");
  text: string;
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
    >
      <Alert severity={severity}>{text}</Alert>
    </Snackbar>
  );
};

export default SnackBar;
